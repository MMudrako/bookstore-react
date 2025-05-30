import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Navigate, useNavigate } from 'react-router-dom';

export default function BookCard({ book }) {

    const navigate = useNavigate();

    return (
        <div className=" custom-container w-full  bg-dullgreen flex justify-center rounded-xl">
            <Disclosure as="div" className="w-full   shadow-lg bg-white/5 divide-y divide-white/10">

                {/* Compact Line Header */}
                <DisclosureButton className="w-full flex items-center justify-between p-4 text-left group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <span className="text-base font-semibold text-white">{book.title}</span>
                        <span className="text-sm text-white/70">by {book.author}</span>
                    </div>
                    <ChevronDownIcon className="size-5 ml-2 fill-white/60 group-data-open:rotate-180 transition-transform" />
                </DisclosureButton>



                {/* Expanded Content */}
                <DisclosurePanel className="flex flex-col sm:flex-row gap-4 p-4 text-sm text-white/60">
                    <div className="w-full sm:w-1/4 max-w-[120px]">
                        <img
                            src={book.cover}
                            alt={book.title}
                            className="w-full h-auto rounded shadow object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        {book.description || 'No description available.'}
                    </div>
                </DisclosurePanel>
            </Disclosure>
            <div className="flex gap-3">
                <button className="px-3 py-1 m-2 max-h-12 text-sm bg-dust text-white rounded hover:bg-olive transition"
                    onClick={() => navigate(`/books/${book.id}`)}>
                    Book Details
                </button>
                <button className="px-2 py-1 m-2 max-h-12 text-sm bg-wornred text-white rounded hover:bg-ruby transition">
                    Add to Cart
                </button>

            </div>
        </div>
    );
}
