import express from 'express';
import { connectToDB } from '../db.js';



const app = express();

app.use(express.json());

const db = await connectToDB();

//first endpoints testing
app.get('/hello', function (req, res) {
    res.send('Hello!')
});

app.get('/api/books/:id', async (req, res) => {
    const book = await db.collection.find(b => b.id === req.params.id);
    if (!book) {
        return res.status(404).send('Book not found');
    }
    res.send('success! The book ' + book.title + 'is found!')
});
app.post('/api/books/:id/upvote', (req, res) => {
    const book = booksUpvoting.find(b => b.id === req.params.id);
    if (!book) {
        return res.status(404).send('Book not found');
    }
    book.upvotes += 1;

    res.send(book);
});

app.post('/api/books/:id/reviews', (req, res) => {
    const { id } = req.params;
    const { postedBy, text } = req.body;
    const book = booksUpvoting.find(b => b.id === id);
    if (!book) {
        return res.status(404).send('Book not found');
    }
    book.reviews.push({ postedBy, text });

    res.json(book);


})

app.listen(8000, function () {
    console.log('server is listening on port 8000')
});