import { connectToDB } from '../bookstore-backend/db.js';
import transformedBooks from './src/utils/transformedBooks.js';

// Code Option to create first database: Auto-create database and collection if not present
// This avoids relying on Atlas UI for manual setup

// const db = client.db("BookStoreApp");
// const booksCollection = db.collection("books");

// // Optional safeguard: Prevent duplicate seeds
// const existing = await booksCollection.countDocuments();
// if (existing === 0) {
//   await booksCollection.insertMany(seedData);
//   console.log("Database seeded!");
// } else {
//   console.log("Seeding skipped: 'books' collection already has data.");
// }
async function seed() {

    try {
        const db = await connectToDB("BookStoreApp");
        const collection = db.collection('books');

        await collection.deleteMany({});
        await collection.insertMany(transformedBooks);

        console.log("database reseeded with normalized data and stars!");

    } catch (err) {
        console.error('Seeding failed:', err);
    } finally {
        await client.close();
    }


}
seed();