import { connectToDB } from '../bookstore-backend/db.js';
import books from '../shared/books.js';

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
    const db = await connectToDB();
    const collection = db.collection('books');

    await collection.deleteMany({});
    await collection.insertMany(books);

    console.log("database seeded!");

    process.exit(0);
}
seed();