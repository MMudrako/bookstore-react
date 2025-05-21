import BookCard from "../components/books/BookCard";
import books from '../../../shared/books';

export default function BookListPage() {
    return (
        <>
            <div className="w-full px-4 pt-16 bg-parchment space-y-1">
                {books.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </>
    )
}