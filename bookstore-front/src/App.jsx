import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookListPage from './pages/BookListPage';
import BookPage from './pages/BookPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/layout/Layout';
import CartPage from './pages/CartPage';
import { bookLoader } from '../src/loaders/bookLoader.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import MainNavbar from './components/layout/Navbar';
import "./index.css";
import { CartProvider } from './hooks/cartContext.jsx'

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [{
    path: '/',
    element: <HomePage />
  }, {
    path: '/about',
    element: <AboutPage />
  }, {
    path: '/books',
    element: <BookListPage />
  }, {
    path: '/books/:id',
    element: <BookPage />,
    loader: bookLoader,
  }, {
    path: '/contact',
    element: <ContactPage />
  }, {
    path: '/cart',
    element: <CartPage />
  }]
}]

const router = createBrowserRouter(routes);

//Main application component intializing React Router with route definitions
function App() {
  return (
    <>

      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>




    </>
  );
}

export default App;
