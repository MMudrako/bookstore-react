
import { createContext, useEffect, useState, useRef } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const storedCart = localStorage.getItem('guest_cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        localStorage.setItem('guest_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        const existing = cartItems.find(p => p.id === item.id);
        const price = parseFloat(item.price) || 0;

        if (existing) {
            updateQuantity(item.id, existing.quantity + 1);
        } else {
            setCartItems([...cartItems, { ...item, price, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(p => p.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(p => p.id === id ? { ...p, quantity: parseInt(quantity) } : p));
    };

    const clearCart = () => {
        setCartItems([]);
    };

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