import { connectToDB } from '../db.js';
import admin from 'firebase-admin';

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
    const { bookId } = req.query;

    if (req.method === "GET") {
        try {
            const { db } = await connectToDB();
            const book = await db.collection("books").findOne({ id: bookId });
            if (!book) return res.status(404).send('Book not found');
            res.json(book);
        } catch (err) {
            return res.status(400).json({ message: "Invalid ID" });
        }

    } else if (req.method === "POST") {
        try {
            const { authtoken } = req.headers;
            if (!authtoken) return res.status(401).json({ message: "Missing auth token" });

            const user = await admin.auth().verifyIdToken(authtoken);
            const { uid } = user;

            const { comment, rating } = req.body;
            if (!rating || rating < 1 || rating > 5) {
                return res.status(400).json({ message: "Rating must be between 1 and 5" });
            }

            let username = "Anonymous";
            try {
                const firebaseUser = await admin.auth().getUser(uid);
                username = firebaseUser.displayName || "Anonymous";
            } catch (error) {
                console.error("Failed to fetch Firebase user info:", error.message);
            }

            const { db } = await connectToDB();
            const book = await db.collection('books').findOne({ id: bookId });
            if (!book) return res.status(404).json({ message: "Book not found" });

            const reviews = book.reviews || [];
            const alreadyReviewed = reviews.some(r => r.uid === uid);
            if (alreadyReviewed) {
                return res.status(403).json({ message: "You already reviewed this book" });
            }

            const newReview = {
                uid,
                user: username,
                comment,
                rating
            };

            const updateResult = await db.collection('books').findOneAndUpdate(
                { id: bookId },
                { $push: { reviews: newReview } },
                { returnDocument: 'after' }
            );

            const updatedBook = updateResult.value;
            const ratings = updatedBook.reviews.map(r => r.rating);
            const avg = ratings.reduce((sum, val) => sum + val, 0) / ratings.length;

            const finalUpdate = await db.collection('books').findOneAndUpdate(
                { id: bookId },
                { $set: { stars: avg } },
                { returnDocument: 'after' }
            );

            res.status(201).json({
                reviews: finalUpdate.value.reviews,
                stars: finalUpdate.value.stars
            });

        } catch (error) {
            console.error("Error in POST /api/books/[bookId]:", error.message);
            res.status(500).json({ message: "Internal server error" });
        }

    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
