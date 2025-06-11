import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.DATABASE_URL);

let db;

export async function connectToDB() {
    try {
        await client.connect();
        db = client.db("BookStoreApp");
        console.log("connected to MongoDB Atlass BookStore database");
        return { client, db };

    } catch (err) {
        console.error('MongoDB error:', err);
        process.exit(1);
    }
}
