
import { createContext, useEffect, useState, useRef } from 'react';

// Provides the cart context object to be consumed with useContext() in components
const CartContext = createContext();

// CartProvider wraps the app and exposes cart state and actions to all child components via cartItems state and utility functions
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const storedCart = localStorage.getItem('guest_cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);// On initial mount, load cart from localStorage (if present)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        localStorage.setItem('guest_cart', JSON.stringify(cartItems));
    }, [cartItems]); // Sync cart to localStorage whenever cartItems changes


    // Called in BookCard and BookPage to add an item or increase quantity
    const addToCart = (item) => {
        const existing = cartItems.find(p => p.id === item.id);
        const price = parseFloat(item.price) || 0;

        if (existing) {
            updateQuantity(item.id, existing.quantity + 1);
        } else {
            setCartItems([...cartItems, { ...item, price, quantity: 1 }]);
        }
    };

    // Utility functions used in CartPage to manage cart state
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(p => p.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(p => p.id === id ? { ...p, quantity: parseInt(quantity) } : p));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    // Calculates the total price of all items in the cart
    const cartTotal = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity) || 1;
        return total + price * quantity;
    }, 0);


    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContext;