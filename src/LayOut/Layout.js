import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer-and-Nav/Footer';
import Navbar from '../Footer-and-Nav/Nav';
import CustomDrawer from '../component/CartDrawer';
import { useContextApi } from '../component/CartContext';
const Layout = () => {
    const { cartItems, isCartOpen, toggleCartDrawer, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useContextApi();
    

    return (
        <div>
            
            <Navbar />
            <CustomDrawer
                cartItems={cartItems}
                totalPrice={totalPrice}
                isCartOpen={isCartOpen}
                toggleCartDrawer={toggleCartDrawer}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
            />
            
            <Outlet /> 
            <Footer />
        </div>
    );
};

export default Layout;
