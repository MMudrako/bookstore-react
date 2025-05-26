import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'


export default function AddReviewForm({ onAddReview }) {
    const [nameText, setNameText] = useState('');
    const [commentText, setCommentText] = useState('');
    const [selectedStar, setSelectedStar] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddReview({ nameText, commentText, selectedStar });
        console.log("user:", nameText, "comment:", commentText, selectedStar)
        setNameText('');
        setCommentText('');
        setSelectedStar(0);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='w-full flex flex-col rounded-md shadow-md items-start justify-center text-left p-4 bg-gray-50'>
                    <div className='flex flex-col items-start  gap-2 m-2'>
                        <label className='font-semibold'>
                            Name:
                            <input className='block border-wood border-2 rounded-lg p-1 mb-4' type="text" value={nameText} onChange={e => setNameText(e.target.value)} />
                        </label>
                        <label className='font-semibold'>
                            Comment:
                            <textarea className='block border-wood border-2 rounded-lg p-1 mb-4' type="text" value={commentText} onChange={e => setCommentText(e.target.value)} />
                        </label>
                    </div>


                    <div className='m-2'>
                        <h3 className="text-sm font-medium text-gray-900">Star Rating:</h3>

                        <fieldset aria-label="Rate this Book" className="my-4">
                            <RadioGroup value={selectedStar} onChange={setSelectedStar} className="flex items-center gap-x-3">
                                {[0, 1, 2, 3, 4, 5].map((rating) => (
                                    <Radio
                                        key={rating}
                                        value={rating}

                                    >
                                        {() => (
                                            <StarIcon
                                                className='size-5'
                                                fill={rating <= selectedStar ? '#facc15' : '#d1d5db'} // yellow-400 or gray-300
                                                stroke="#000"
                                                aria-hidden="true"
                                            />


                                        )}

                                    </Radio>
                                ))}


                            </RadioGroup>
                        </fieldset>
                    </div>
                    <button className="w-30 bg-wornred hover:bg-ruby text-white py-3 rounded-md text-base font-medium">Add Comment</button>
                </div>

            </form>




        </>


    )
}