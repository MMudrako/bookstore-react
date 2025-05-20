import express from 'express';

const booksUpvoting = [

    {
        id: "9781847497826",
        title: "The Master and Margarita",
        upvotes: 0,
        reviews: [],
        author: "Mikhail Bulgakov",
        cover: "https://covers.openlibrary.org/b/isbn/9781847497826-M.jpg",
        categories: ["classic", "novel", "fantasy", "religious philosophy", "political", "satire", "Soviet Union", "20th-century"],
        description: "The story concerns a visit by the devil and his entourage to the officially atheistic Soviet Union. The devil, manifested as one Professor Woland, challenges the Soviet citizens' beliefs towards religion and condemns their behavior throughout the book. The Master and Margarita combines supernatural elements with satirical dark comedy and Christian philosophy, defying categorization within a single genre. Many critics consider it to be one of the best novels of the 20th century, as well as the foremost of Soviet satires."
    },
    {
        id: "9781519526861",
        title: "Dead Souls",
        upvotes: 0,
        reviews: [],
        author: "Nikolai Gogol",
        cover: "https://covers.openlibrary.org/b/isbn/9781519526861-M.jpg",
        categories: ["classic", "poem in prose", "comedy", "political", "satire", "Russian Empire", "19th-century"],
        description: "The story follows the exploits of Chichikov, a middle-aged gentleman of middling social class and means. Chichikov arrives in a small town and turns on the charm to woo key local officials and landowners. He reveals little about his life thus far, or his purpose, as he sets about carrying out his bizarre and mysterious plan to acquire 'dead souls'."
    },
    {
        id: "61002146",
        title: "The Twelve Chairs",
        upvotes: 0,
        reviews: [],
        author: "Ilf and Petrov",
        cover: "https://covers.openlibrary.org/b/lccn/61002146-M.jpg",
        categories: ["classic", "novel", "political", "satire", "Soviet Union", "20th-century"],
        description: "In the Soviet Union in 1927, during the NEP era, a former Marshal of the Nobility, Ippolit Matveyevich 'Kisa' Vorobyaninov, works as the registrar of marriages and deaths in a sleepy provincial town. His mother-in-law reveals on her deathbed that her family jewellery was hidden from the Bolsheviks in one of the twelve chairs from the family's dining-room set. Those chairs, along with all other personal property, were taken away by the Communists after the 1917 Russian Revolution. Vorobyaninov wants to find the treasure."
    }]

const app = express();

app.use(express.json());

//first endpoints testing
app.get('/hello', function (req, res) {
    res.send('Hello!')
});

app.get('/api/books/:id', (req, res) => {
    const book = booksUpvoting.find(b => b.id === req.params.id);
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