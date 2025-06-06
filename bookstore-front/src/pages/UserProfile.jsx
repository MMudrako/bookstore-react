//to refactor from bookPage

import { StarIcon, UserIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { Radio, RadioGroup } from '@headlessui/react'
//import books from '../../../shared/books';
import { useLoaderData } from 'react-router-dom';
import AddReviewForm from '../components/AddReviewForm.jsx';
import { useState, useContext } from 'react'
import CartContext from '../hooks/cartContext.jsx';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function BookPage() {

    const loadedBook = useLoaderData();
    console.log(loadedBook);
    const initialReviews = loadedBook.reviews || [];
    const [reviews, setReviews] = useState(initialReviews);
    const [stars, setStars] = useState(loadedBook.stars)
    const [errorMessage, setErrorMessage] = useState([]);
    const { addToCart } = useContext(CartContext);

    async function onAddReview({ nameText, commentText, selectedStar }) {
        try {
            //this part is sent to the server where it is connected to MongodDB
            const response = await axios.post(`/api/books/${loadedBook.id}/reviews`, {
                user: nameText,
                comment: commentText,
                rating: selectedStar
            });
            //these two lines suppose to update the front-end review section with new review?,
            //  but I  still render the same data and page gets refreshed
            //it doesn't get to DB either 
            const { reviews: updatedReviews, stars: updatedStars } = response.data;
            setReviews(updatedReviews);
            setStars(updatedStars);
            setErrorMessage([]);
        } catch (err) {
            if (err.response && err.response.status === 400 && err.response.data.errors) {
                setErrorMessage(err.response.data.errors.map(e => e.msg));
            } else {
                setErrorMessage(['Something went wrong. Try again later.']);
            }
        }

    }


    if (!loadedBook) {
        return <div className="p-6 text-red-600">Book not found.</div>;
    }


    return (
        <div className="bg-white flex flex-col sm:flex-row gap-8 p-6 text-sm text-black">

            {/* Book Cover */}
            <div className="w-1/2 sm:max-w-[400px]">
                <img
                    src={loadedBook.cover}
                    alt={loadedBook.title}
                    className="w-1/2 sm:w-full h-auto rounded shadow object-cover"
                />
            </div>

            {/* Book Info */}
            <div className="flex-1 space-y-6">

                <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-4">
                    {/* Title */}
                    <div className='col-start-1 row-start-1'>
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl ">
                            {loadedBook.title}
                        </h1>
                        <span className='text-small '>by {loadedBook.author}</span>
                    </div>

                    {/* Price */}
                    <p className="text-2xl text-gray-900 col-start-2 row-start-1 self-start">
                        ${loadedBook.price}
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
                        <a href="#" className="text-indigo-600">{reviews.length} reviews</a>
                    </div>



                </div>

                {/* Add to Cart */}
                <button className="w-30 bg-wornred hover:bg-ruby text-white py-3 rounded-md text-base font-medium"
                    onClick={() => {
                        console.log("Book being added to cart:", loadedBook);
                        addToCart({ ...loadedBook, quantity: 1 })
                    }
                    }
                >
                    Add to Cart
                </button>


                {/* Description */}
                <div className="pt-6 border-t border-gray-200">
                    <p className="text-gray-700">{loadedBook.description}</p>
                </div>

                {/*Reviews */}

                <div className='pt-6 border-t border-gray-200'>
                    <h3 className='text-wood bg-parchment px-8 py-4 '>Add a Reviews: </h3>
                    <AddReviewForm onAddReview={onAddReview} />
                </div>
                {errorMessage.length > 0 && (
                    <div className="error-messages">
                        <ul>
                            {errorMessage.map((msg, idx) => (
                                <li key={idx} style={{ color: 'red' }}>{msg}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="pt-6 border-t border-gray-200">
                    <h3 className='text-wood bg-parchment px-8 py-4 '>Top Reviews: </h3>
                    <div className='w-full flex flex-col items-center justify-center text-left p-4 bg-gray-50'>
                        {reviews.map(r => {
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
                        })}
                    </div>
                </div>

            </div>
        </div>

    )

}

