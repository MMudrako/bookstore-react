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


app.post('/api/books/:id/reviews', async (req, res) => {
    const { id } = req.params;
    const { user, comment, rating } = req.body;
    //validate and push new review
    const newReview = { user, comment, rating };
    if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating must be between 1 and 5" });
    }
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


});

app.listen(8000, function () {
    console.log('server is listening on port 8000')
});