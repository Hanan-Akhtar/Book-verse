import React from 'react';
import CartListing from './CartListing';

const Sidebar = ({ cartItems, totalPrice, removeFromCart, showSidebar, toggleSidebar }) => {
    return (
        <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>Close</button>
            <h2>Cart</h2>
            <CartListing cartItems={cartItems} totalPrice={totalPrice} removeFromCart={removeFromCart} />
        </div>
    );
}

export default Sidebar;
