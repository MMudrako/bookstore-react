//api/books/index.js
import { connectToDB } from '../../../../bookstore-vercel/src/pages/api/db.js';



export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method is not allowed" })
    }

    try {
        const { db } = await connectToDB();
        const books = await db.collection("books").find().toArray(); // ✅ Get all documents
        res.json(books);
    } catch (err) {
        console.error('Failed to fetch books:', err);
        res.status(500).send('Server error');
    }
}

