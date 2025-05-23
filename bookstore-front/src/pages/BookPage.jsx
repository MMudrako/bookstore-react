
import { StarIcon, UserIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import books from '../../../shared/books';
import { useParams } from 'react-router-dom';


/* const bookMedias = [
    { name: "printed", isAvailable: true },
    { name: "pdf", isAvailable: false },
    { name: "audio", isAvailable: false }
] */
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function BookPage() {
    //const [bookMedia, setBookMedia] = useState("printed");
    const { id } = useParams();
    const book = books.find(b => b.id === id);

    if (!book) {
        return <div className="p-6 text-red-600">Book not found.</div>;
    } else {
        //remove it once connected to DB
        const ratings = book.reviews?.map(r => r.rating) || [];
        const stars = ratings.length
            ? +(ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(2)
            : 0;


        return (
            <div className="bg-white flex flex-col sm:flex-row gap-8 p-6 text-sm text-black">

                {/* Book Cover */}
                <div className="w-full sm:max-w-[400px]">
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-auto rounded shadow object-cover"
                    />
                </div>

                {/* Book Info */}
                <div className="flex-1 space-y-6">

                    <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-4">
                        {/* Title */}
                        <div className='col-start-1 row-start-1'>
                            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl ">
                                {book.title}
                            </h1>
                            <span className='text-small '>by {book.author}</span>
                        </div>

                        {/* Price */}
                        <p className="text-2xl text-gray-900 col-start-2 row-start-1 self-start">
                            $29.99
                        </p>

                        {/* Reviews */}
                        <div className="flex items-center gap-2">

                            {[0, 1, 2, 3, 4].map(rating => (
                                <StarIcon
                                    key={rating}
                                    className={classNames(
                                        stars > rating ? 'text-yellow-500' : 'text-gray-200',
                                        'size-5'
                                    )}
                                />
                            ))}
                            <a href="#" className="text-indigo-600">{book.reviews.length} reviews</a>
                        </div>

                        {/* Media Options */}
                        {/* <div>
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
                    </div> */}

                    </div>


                    {/* Add to Cart */}
                    <button className="w-30 bg-wornred hover:bg-ruby text-white py-3 rounded-md text-base font-medium">
                        Add to Cart
                    </button>

                    {/* Description */}
                    <div className="pt-6 border-t border-gray-200">
                        <p className="text-gray-700">{book.description}</p>
                    </div>

                    {/*Reviews */}
                    <div className="pt-6 border-t border-gray-200">
                        <h3 className='text-wood bg-parchment px-8 py-4 '>Top Reviews: </h3>
                        <div className='w-full flex flex-col items-center justify-center text-left p-4 bg-gray-50'>
                            {book.reviews.map(r => {
                                return (
                                    <div key={r.user} className='flex w-full flex-col rounded-md shadow-md'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <UserIcon className="size-10 rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" />
                                            <span className='font-semibold'>{r.user}</span>
                                        </div>
                                        <div className="flex items-center gap-2">

                                            {[0, 1, 2, 3, 4].map(rate => (
                                                <StarIcon
                                                    key={rate}
                                                    className={classNames(
                                                        r.rating > rate ? 'text-yellow-500' : 'text-gray-200',
                                                        'size-5'
                                                    )}
                                                />
                                            ))}

                                        </div>
                                        <p className="px-2 py-6 text-gray-700 italic">{r.comment}</p>
                                    </div>
                                )

                            })
                            }
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
