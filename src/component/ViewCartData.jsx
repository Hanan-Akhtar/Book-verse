import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableFooter } from '@mui/material';
import { useContextApi } from './CartContext';
import { Close } from '@mui/icons-material';

const ViewCartData = ({
    cartItems,
    calculateTotalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
}) => {
    const { isCartOpen, setIsCartOpen } = useContextApi();

    

    const handleContinueShopping = () => {
        // Implement your continue shopping logic here
    };

    

    return (
        <>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <h2>View Cart</h2>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItems.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={item.image} alt={item.name} style={{ width: 50, height: 50, marginRight: 10 }} />
                                            {item.name}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <button style={{ backgroundColor: "white", border: "none" }} onClick={() => decreaseQuantity(index)}>-</button>
                                        {item.quantity}
                                        <button style={{ backgroundColor: "white", border: "none" }} onClick={() => increaseQuantity(index)}>+</button>
                                    </TableCell>
                                    <TableCell>
                                        {item.price}
                                    </TableCell>
                                    <TableCell>
                                        <button style={{ backgroundColor: "#8E43F0", color: "white", border: 'none' }} onClick={() => removeFromCart(index)}>Remove</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={2}>Total Price:</TableCell>
                                <TableCell>${calculateTotalPrice(cartItems)}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>

            </div>
            <div>
                <button onClick={handleContinueShopping} style={{marginTop:"30px", backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>Continue Shopping</button>
            </div>
        </>
    );
}
export default ViewCartData;
