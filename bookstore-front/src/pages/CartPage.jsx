import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../hooks/cartContext';


/* banner to encourage sign-up add once ui is adjusted for auth users
{!user && (
  <div className="bg-yellow-100 text-yellow-900 p-4 text-center">
    Sign in to unlock special offers and save your cart for later!
  </div>
)}
 */
export default function CartPage() {
    const navigate = useNavigate();
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useContext(CartContext);
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
                                    cartItems.length === 0 ? (
                                        <p>Your cart is empty.</p>
                                    ) : (
                                        cartItems.map((product) => (
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
                                                        <p className="ml-4">$ {product.price.toFixed(2)}</p>
                                                        <div className="flex items-end">
                                                            <label htmlFor={`qty-${product.id}`} className="sr-only">Quantity</label>
                                                            <select
                                                                id={`qty-${product.id}`}
                                                                value={product.quantity}
                                                                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                                                                className="border rounded px-2 py-1">
                                                                {[1, 2, 3, 4, 5].map(q => <option key={q} value={q}>{q}</option>)}
                                                            </select>
                                                        </div>
                                                        <div className="flex">
                                                            <button type="button"
                                                                className="font-medium text-wood hover:text-olive"
                                                                onClick={() => removeFromCart(product.id)}>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    )
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
                                <p className="ml-4">${cartTotal.toFixed(2)}</p>
                            </div>
                        </li>
                        <li className="flex py-6 mx-4 flex-1 flex-col">
                            <div className="flex justify-between text-base  text-gray-900">
                                <p className="ml-4">Shipping Estimate</p>
                                <p className="ml-4">${(cartTotal / 10).toFixed(2)}</p>
                            </div>

                        </li>
                        <li className="flex py-6 mx-4 flex-1 flex-col">
                            <div className="flex justify-between text-base  text-gray-900">
                                <p className="ml-4">Tax Estimate</p>
                                <p className="ml-4">${(cartTotal * 0.13).toFixed(2)}</p>
                            </div>

                        </li>
                        <li className="flex py-6 mx-4 flex-1 flex-col">
                            <div className="flex justify-between text-base  text-gray-900">
                                <p className="ml-4 font-semibold">Order Total</p>
                                <p className="ml-4">${(cartTotal + cartTotal * 0.10 + cartTotal * 0.13).toFixed(2)}</p>
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