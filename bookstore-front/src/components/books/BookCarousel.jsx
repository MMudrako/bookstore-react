import books from '../../data/books'

export default function BookCarousel() {
    return (
        <div className="px-4 py-6 bg-wood">
            <h2 className="text-2xl font-semibold mb-4 text-olive">Featured Books</h2>

            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex flex-nowrap gap-4 px-2">
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[22%] sm:w-[25%] md:w-[25%] lg:w-[15%] xl:w-[15%] max-w-[200px] aspect-[3/4]"
                        >
                            <img
                                src={book.cover}
                                alt={book.title}
                                className="w-full h-full rounded-lg shadow-md object-cover"
                            />
                            <div className="mt-2 text-center text-parchment">
                                <h3 className="text-lg font-medium truncate">{book.title}</h3>
                                <p className="text-sm text-dust truncate">{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
