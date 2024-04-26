import React, { createContext, useContext, useState } from 'react';

const CreateContext = createContext();

export const useContextApi = () => useContext(CreateContext)
export const CartProvider = ({ children }) => {
    // global states
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [first, setFirst] = useState("second hello")

    const collections={
        first,
        cartItems, setCartItems,
        isCartOpen, setIsCartOpen,
    }

    return (
        <CreateContext.Provider value={collections}>
            {children}
        </CreateContext.Provider>
    );
};
