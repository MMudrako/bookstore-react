
import { StarIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import books from '../data/books'
const reviews = { href: '#', average: 4, totalCount: 117 }

const bookMedias = [
    { name: "printed", isAvailable: true },
    { name: "pdf", isAvailable: false },
    { name: "audio", isAvailable: false }
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const book = books[0];
export default function BookPage() {
    const [bookMedia, setBookMedia] = useState("printed");
    return (
        <div className="bg-white flex flex-col sm:flex-row gap-8 p-6 text-sm text-black">

            {/* Book Cover */}
            <div className="w-full sm:max-w-[400px]">
                <img
                    src="https://covers.openlibrary.org/b/isbn/9781847497826-L.jpg"
                    alt={book.title}
                    className="w-full h-auto rounded shadow object-cover"
                />
            </div>

            {/* Book Info */}
            <div className="flex-1 space-y-6">

                <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-4">
                    {/* Title */}
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl col-start-1 row-start-1">
                        {book.title}
                    </h1>
                    {/* Price */}
                    <p className="text-2xl text-gray-900 col-start-2 row-start-1 self-start">
                        $29.99
                    </p>
                    {/* Reviews */}
                    <div className="flex items-center gap-2">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                                key={rating}
                                className={classNames(
                                    reviews.average > rating ? 'text-yellow-500' : 'text-gray-200',
                                    'size-5'
                                )}
                            />
                        ))}
                        <a href="#" className="text-indigo-600">{reviews.totalCount} reviews</a>
                    </div>

                    {/* Media Options */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-700 mb-2">Choose format:</h2>
                        <RadioGroup
                            value={bookMedia}
                            onChange={setBookMedia}
                            className="flex flex-wrap gap-4"
                        >
                            {bookMedias.map((bookMedia) => (
                                <Radio
                                    key={bookMedia.name}
                                    value={bookMedia}
                                    disabled={!bookMedia.isAvailable}
                                    className={classNames(
                                        bookMedia.isAvailable
                                            ? 'cursor-pointer bg-white text-gray-900 shadow'
                                            : 'cursor-not-allowed bg-gray-100 text-gray-400',
                                        'group relative flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none'
                                    )}
                                >
                                    <span>{bookMedia.name}</span>
                                </Radio>
                            ))}
                        </RadioGroup>
                    </div>

                </div>


                {/* Add to Cart */}
                <button className="w-full bg-wornred hover:bg-ruby text-white py-3 rounded-md text-base font-medium">
                    Add to Cart
                </button>

                {/* Description */}
                <div className="pt-6 border-t border-gray-200">
                    <p className="text-gray-700">{book.description}</p>
                </div>

            </div>
        </div>

    )
}
