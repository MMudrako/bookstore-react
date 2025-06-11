import BookCard from "../components/books/BookCard";
import { useState, useEffect } from "react";

export default function BookListPage() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            const res = await fetch("/api/books");
            const data = await res.json();
            setBooks(data);
        }

        fetchBooks();
    }, []);
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