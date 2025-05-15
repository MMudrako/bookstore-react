import bookShelves from '../../assets/bookShelvesLight.jpg';
import { Link } from 'react-router-dom';


export default function Hero() {
    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 " style={{
                    backgroundImage: `url(${bookShelves})`
                }}></div>
                <div className="absolute inset-0 bg-black/65 z-10"></div>
                <div className="relative z-20 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-ruby sm:text-7xl">
                            Welcome to the Bookstore
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-parchment sm:text-xl/8">
                            A full-stack bookstore app crafted to demonstrate clean UI,
                            responsive design, and seamless routing — with a touch of
                            visual storytelling. Powered by MongoDB, Express, React,
                            and Node.js.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to='/books'
                                className="rounded-md bg-olive px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-dust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
                            >
                                View The Catalog
                            </Link>
                            <Link to='/about' className="text-sm/6 font-semibold text-parchment">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}