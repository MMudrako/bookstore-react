
import { connectToDB } from '../db.js';



export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method is not allowed" })
    }

    try {
        const { db } = await connectToDB();
        const books = await db.collection("books").find().toArray(); // ✅ Get all documents
        res.status(200).json(books);
    } catch (err) {
        console.error('Failed to fetch books:', err);
        res.status(500).send('Server error');
    }
}

