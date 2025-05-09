import { Link } from 'react-router-dom';

//Top navigation bar for main site pages
export default function Header() {
    return (
        <>
            <header className="flex gap-6 bg-parchment md:flex md:justify-betweenhidden sm:block">

                <nav className='flex gap-6 justify-between items-center text-lg text-wood'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/books">Books Catalog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </nav>
                <h2 className="text-ruby text-4xl mb-4">Welcome to the Bookstore</h2>


            </header>


        </>
    )
}