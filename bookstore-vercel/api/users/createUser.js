import { connectToDB } from '../db.js'; // adjust relative path
import admin from 'firebase-admin';
import dotenv from 'dotenv';
import { process } from 'node:module';
dotenv.config();

// Lazy-initialize Firebase Admin (avoid re-initialization on each request)

if (!admin.apps.length) {
    const raw = process.env.FIREBASE_ADMIN_CREDENTIALS;

    if (!raw) {
        throw new Error("Missing FIREBASE_ADMIN_CREDENTIALS in environment");
    }

    const credentials = JSON.parse(raw);
    admin.initializeApp({
        credential: admin.credential.cert(credentials)
    });
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { db } = await connectToDB();

        const { authtoken } = req.headers;
        if (!authtoken) return res.status(400).json({ message: "No auth token provided" });

        const decoded = await admin.auth().verifyIdToken(authtoken);
        const { uid, email } = decoded;

        const { userName, avatar = '', cart = [] } = req.body;

        if (!userName || typeof userName !== 'string') {
            return res.status(400).json({ message: 'Username is required and must be a string.' });
        }

        const potentialConflicts = await db.collection('users').find({
            $or: [
                { uid },
                { userName },
                { email }
            ]
        }).toArray();

        for (const user of potentialConflicts) {
            if (user.uid === uid) {
                return res.status(200).json({ message: 'User already exists' });
            }
            if (user.userName === userName) {
                return res.status(400).json({ message: 'Username already taken' });
            }
            if (user.email === email) {
                return res.status(400).json({ message: 'An account with this email already exists' });
            }
        }

        const newUser = { uid, email, userName, avatar, cart };

        await db.collection('users').insertOne(newUser);
        return res.status(201).json({ message: 'User created successfully' });

    } catch (err) {
        console.error("CreateUser error:", err);
        return res.status(500).json({ message: "Server error" });
    }
}
