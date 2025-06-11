import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import { useContext } from 'react';
import CartContext from '../../hooks/cartContext.jsx';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser.js'
const navigation = [
    { name: 'Home', url: "/" },
    { name: 'About', url: '/about' },
    { name: 'Books', url: '/books' },
    { name: 'Contact', url: '/contact' },
    { name: 'Cart', url: "/cart" }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


//Top navigation bar for main site pages
export default function MainNavbar() {
    const location = useLocation();
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    let cartItemCount = cartItems.length;

    const { isLoading, user } = useUser();

    return (
        <Disclosure as="nav" className="bg-wood">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <BookOpenIcon className='size-6' />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => {
                                    const isActive = location.pathname === item.url;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.url}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={classNames('rounded-md px-3 py-2 text-sm font-medium text-left',
                                                isActive
                                                    ? 'bg-wood text-parchment '
                                                    : 'text-dust hover:text-dullgreen hover:bg-dust transition-colors duration-200'

                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full bg-dullgreen p-1 text-parchment hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dust focus:outline-hidden"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View the cart</span>
                            <Link to="/cart" className="relative">
                                <ShoppingCartIcon className="size-6 text-parchment hover:text-white" />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-ruby rounded-full">
                                        {cartItemCount}
                                    </span>
                                )}
                            </Link>
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-dust text-sm focus:ring-2 focus:ring-parchment focus:ring-offset-2 focus:ring-offset-dullgreen focus:outline-hidden">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt="User avatar"
                                        src={avatar}
                                        className="size-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>

                            <MenuItems
                                className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-parchment shadow-lg ring-1 ring-black/5 focus:outline-none"
                            >
                                <div className="py-1">
                                    <MenuItem as="div" disabled>
                                        <div className="px-4 py-2 text-sm text-center text-gray-600">
                                            {isLoading
                                                ? "Loading..."
                                                : user
                                                    ? `Logged in as ${user.email}`
                                                    : "Not signed in"}
                                        </div>
                                    </MenuItem>

                                    <MenuItem>

                                        <button
                                            className="block w-full text-center px-4 py-2 text-sm hover:bg-dust hover:text-gray-900 focus:bg-dust focus:text-gray-900"

                                        >
                                            Your Profile
                                        </button>

                                    </MenuItem>

                                    <MenuItem>
                                        <button
                                            className="block w-full text-center px-4 py-2 text-sm hover:bg-dust hover:text-gray-900 focus:bg-dust focus:text-gray-900"

                                        >
                                            Settings
                                        </button>

                                    </MenuItem>

                                    <MenuItem >
                                        {user
                                            ? <button
                                                className="block w-full text-center px-4 py-2 text-sm hover:bg-dust hover:text-gray-900 focus:bg-dust focus:text-gray-900"
                                                onClick={() => signOut(getAuth())}
                                            >
                                                Sign out
                                            </button>
                                            : <button
                                                className="block w-full text-center px-4 py-2 text-sm hover:bg-dust hover:text-gray-900 focus:bg-dust focus:text-gray-900"
                                                onClick={() => navigate('/login')}
                                            >
                                                Sign in
                                            </button>}
                                    </MenuItem>
                                </div>
                            </MenuItems>


                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.url;
                        return (
                            <DisclosureButton
                                key={item.name}
                                as={Link}
                                to={item.url}
                                aria-current={isActive ? 'page' : undefined}
                                className={classNames(
                                    isActive
                                        ? 'bg-wood text-parchment font-semibold'
                                        : 'text-dust hover:text-dullgreen hover:bg-dust transition-colors duration-200',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        )
                    }
                    )}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}