import { useEffect, useState, useRef } from 'react';

const CART_KEY = 'guest_cart';

export function useCart() {
    const [cartItems, setCartItems] = useState([]);
    const isFirstRender = useRef(true);

    // Load cart from localStorage on first mount
    useEffect(() => {
        const storedCart = localStorage.getItem(CART_KEY);
        console.log('📦 Loading cart from localStorage:', storedCart);
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage — but skip first render
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        console.log('💾 Saving cart to localStorage:', cartItems);
        localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    // === Utility functions ===
    const addToCart = (item) => {
        const existing = cartItems.find(p => p.id === item.id);
        if (existing) {
            updateQuantity(item.id, existing.quantity + 1);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
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

    const cartTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
    };
}
