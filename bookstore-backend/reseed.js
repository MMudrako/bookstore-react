//update books collection with prices
import { connectToDB } from '../bookstore-backend/db.js';


function getRandomPrce(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let client;

async function updatedBooks() {

    try {
        const result = await connectToDB("BookStoreApp");
        client = result.client;
        const db = result.db;

        console.log("Using DB client:", !!client);

        const collection = db.collection('books');
        const books = await collection.find().toArray();
        const transformedBooks = books.map(book => {

            const bookPrice = getRandomPrce(20, 60)

            return {
                ...book,
                price: bookPrice,
            };
        });
        await collection.deleteMany({});
        await collection.insertMany(transformedBooks);

        console.log("database reseeded with book prices!");

    } catch (err) {
        console.error('Seeding failed:', err);
    } finally {
        await client.close();
    }


}
updatedBooks();


