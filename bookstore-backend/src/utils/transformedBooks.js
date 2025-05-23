//normalize categories and replace upvote with stars(average)
import books from '../../../shared/books.js';

const transformedBooks = books.map(book => {
    const normalizedCategories = book.categories.map(cat => cat.toLowerCase());

    const ratings = book.reviews?.map(r => r.rating) || [];
    const stars = ratings.length
        ? +(ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(2)
        : 0;

    return {
        ...book,
        categories: normalizedCategories,
        stars,
        reviews: book.reviews || [],
        // Remove upvotes if they exist
        ...(book.upvotes ? { upvotes: undefined } : {}),
    };
});

export default transformedBooks;
