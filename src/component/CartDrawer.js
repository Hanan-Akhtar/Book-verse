import React from 'react';
import Drawer from '@mui/material/Drawer';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableFooter } from '@mui/material';

const CustomDrawer = ({
    cartItems,
    totalPrice,
    isCartOpen,
    toggleCartDrawer,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
}) => {
    return (
        <Drawer anchor="right" open={isCartOpen} onClose={toggleCartDrawer}>
            <div style={{ width: 300 }}>
                <h2>Cart</h2>
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
                                        <button onClick={() => decreaseQuantity(index)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => increaseQuantity(index)}>+</button>
                                    </TableCell>
                                    <TableCell>${item.price * item.quantity}</TableCell>
                                    <TableCell>
                                        <button onClick={() => removeFromCart(index)}>Remove</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={2}>Total Price:</TableCell>
                                <TableCell>${totalPrice}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        </Drawer>
    );
}

export default CustomDrawer;
