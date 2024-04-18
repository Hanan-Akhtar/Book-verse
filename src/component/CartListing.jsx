import React from 'react';

const CartListing = ({ cartItems, totalPrice, removeFromCart }) => {
    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <table className="cart-items">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index} className="cart-item">
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td><button onClick={() => removeFromCart(item)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total Price: ${totalPrice}</p>
        </div>
    );
}

export default CartListing;
