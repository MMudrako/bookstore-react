import books from '../../../shared/books';
import { useNavigate } from 'react-router-dom';
const products = books.slice(0, 3);

export default function CartPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex items-start justify-center my-4 border-b border-gray-200 pb-2">
                <h1 className="text-3xl font-bold text-gray-900 ">
                    Shopping Cart
                </h1>
            </div>
            <div className="bg-white flex flex-col sm:flex-row gap-8 p-6 text-sm text-black">
                <div className="flex w-full h-full flex-col  bg-ivory shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200">

                                {
                                    products.map((product) => (
                                        <li key={product.id} className="flex py-6">
                                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <button onClick={() => navigate(`/books/${product.id}`)}>
                                                    <img alt={product.title} src={product.cover} className="size-full object-cover" />
                                                </button>
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex flex-row text-base justify-between font-medium text-gray-900">
                                                        <button onClick={() => navigate(`/books/${product.id}`)}>{product.title}</button>
                                                        <p className=" font-light"> by {product.author}</p>
                                                    </div>

                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="ml-4">$ price</p>
                                                    <div className="flex items-end">
                                                        <label htmlFor={`qty-${product.id}`} className="sr-only">Quantity</label>
                                                        <select id={`qty-${product.id}`} className="border rounded px-2 py-1">
                                                            {[1, 2, 3, 4, 5].map(q => <option key={q} value={q}>{q}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="flex">
                                                        <button type="button" className="font-medium text-wood hover:text-olive">
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>

                        </div>
                    </div>


                </div>
                <div className="flex min-w-96 h-full flex-col  bg-parchment rounded-md shadow-xl">
                    <h2 className='font-semibold text-lg px-6 mb-4'>Order Summary</h2>
                    <ul role="list" className="my-2 divide-y divide-gray-200">
                        <li className="flex py-6 mx-4 flex-1 flex-col">
                            <div className="flex justify-between text-base  text-gray-900">
                                <p className="ml-4">Subtotal</p>
                                <p className="ml-4">$99.00</p>
                            </div>
                        </li>
                        <li className="flex py-6 mx-4 flex-1 flex-col">
                            <div className="flex justify-between text-base  text-gray-900">
                                <p className="ml-4">Shipping Estimate</p>
                                <p className="ml-4">$9.00</p>
                            </div>

                        </li>
                        <li className="flex py-6 mx-4 flex-1 flex-col">
                            <div className="flex justify-between text-base  text-gray-900">
                                <p className="ml-4">Tax Estimate</p>
                                <p className="ml-4">$13.00</p>
                            </div>

                        </li>
                        <li className="flex py-6 mx-4 flex-1 flex-col">
                            <div className="flex justify-between text-base  text-gray-900">
                                <p className="ml-4 font-semibold">Order Total</p>
                                <p className="ml-4">$121.00</p>
                            </div>
                        </li>
                    </ul>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">

                        <div className="mt-6">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-wornred px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-ruby"
                            >
                                Checkout
                            </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                or{' '}
                                <button
                                    type="button"
                                    onClick={() => navigate('/books')}
                                    className="font-medium text-wood hover:text-olive"
                                >
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}