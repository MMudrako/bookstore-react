import express from 'express';
import { connectToDB } from '../db.js';
import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// In order to work with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

const { db } = await connectToDB();

// Serve static files from the frontend dist directory
app.use(express.static(path.join(__dirname, '../../bookstore-front/dist')));

const credentials = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS);

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});




// For React Router (SPA): redirect all unmatched routes to index.html
app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, '../../bookstore-front/dist/index.html'));
});

app.get('/api/books', async (req, res) => {
    try {
        const books = await db.collection("books").find().toArray(); // ✅ Get all documents
        res.json(books);
    } catch (err) {
        console.error('Failed to fetch books:', err);
        res.status(500).send('Server error');
    }

});


app.get('/api/books/:id', async (req, res) => {
    const book = await db.collection("books").findOne({ id: req.params.id });
    if (!book) {
        return res.status(404).send('Book not found');
    }
    res.json(book);

});
/* app.post('/api/books/:id/upvote', async (req, res) => {
    const { id } = req.params;
    const updatedBook = await db.collection("books").findOneAndUpdate(
        { id },
        { $inc: { upvotes: 1 } }, {
        returnDocument: 'after'
    }
    );
    res.json(updatedBook);
}); */


//express middleware to check who is making following api requests 
//users will be able to see the bookPage and comments but to make comments will have to login
app.use(async function (req, res, next) {
    const { authtoken } = req.headers;

    if (authtoken) {
        const user = await admin.auth().verifyIdToken(authtoken);
        req.user = user;
        next();
    } else {
        res.sendStatus(400)
    }


})

app.post('/api/users/create', async (req, res) => {
    const { uid, email } = req.user;
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


    const newUser = {
        uid,
        email,
        userName,
        avatar,
        cart
    };

    await db.collection('users').insertOne(newUser);

    return res.status(201).json({ message: 'User created successfully' });
});

app.post('/api/books/:id/reviews', async (req, res) => {
    const { id } = req.params;
    const { uid } = req.user;
    const { comment, rating } = req.body;
    //validate and push new review

    if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating must be between 1 and 5" });
    }

    //fetch displayname from Firebase
    let username = "Anonymous";
    try {
        const firebaseUser = await admin.auth().getUser(uid);
        username = firebaseUser.displayName || "Anonymous";
    } catch (error) {
        console.error("Failed to fetch Firebase user info:", error.message);
    }
    const newReview = { user: username, comment, rating };

    const book = await db.collection('books').findOne({ id });
    const users = book.reviews.map(r => r.user);
    const canComment = uid && !users.includes(uid);

    if (canComment) {
        const bookUpdatedReviews = await db.collection('books').findOneAndUpdate(
            { id },
            { $push: { reviews: newReview } },
            { returnDocument: 'after' }
        );

        if (!bookUpdatedReviews) {
            return res.status(404).json({ message: "Book not found" });
        }
        //recalculate and set new value for stars
        const ratings = bookUpdatedReviews.reviews.map(r => r.rating);
        const avg = ratings.reduce((sum, val) => sum + val, 0) / ratings.length;

        const bookUpdatedStars = await db.collection('books').findOneAndUpdate(
            { id },
            { $set: { stars: avg } },
            { returnDocument: 'after' }
        )
        //if it comes in wrapping object  (including lastErrorObject, ok, etc.) just use .value
        res.json({
            reviews: bookUpdatedStars.reviews,
            stars: bookUpdatedStars.stars
        });

    } else {
        res.sendStatus(403)
    }




});
//start the server

const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log(`server is listening at http://localhost:${PORT}`)
});