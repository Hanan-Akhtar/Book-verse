import './Style.css'
import banner from '../images/banner.jpeg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import booksData from './data';
import { useState } from 'react';
import CustomDrawer from './CartDrawer';
const Books = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const addToCart = (book) => {
        // Check if the item is already in the cart
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === book.id);

        if (existingItemIndex !== -1) {
            // If the item exists, increase its quantity
            const newCartItems = [...cartItems];
            newCartItems[existingItemIndex].quantity++;

            // Update the state with the new cart items
            setCartItems(newCartItems);
        } else {
            // If the item does not exist, add it to the cart with quantity 1
            const newItem = { ...book, quantity: 1 }; // Use the entire book object
            const updatedCartItems = [...cartItems, newItem];

            // Update the state with the new cart items
            setCartItems(updatedCartItems);
        }

        // Calculate total price after the state update
        calculateTotalPrice(cartItems);

        // Open the cart drawer
        setIsCartOpen(true);
    };







    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        calculateTotalPrice(newCartItems);
    };

    const increaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity++;
        setCartItems(newCartItems);
        calculateTotalPrice(newCartItems);
    };

    const decreaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity--;
            setCartItems(newCartItems);
            calculateTotalPrice(newCartItems);
        }
    };

    const calculateTotalPrice = (items) => {
        const total = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
        setTotalPrice(total);
    };

    const toggleCartDrawer = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (<>
        <div className='books-section bg-light'>
            <div className="container" style={{ marginTop: "0px" }}>
                <div className="books">
                    <div className="p-100">
                        <div className="row top-row">
                            <div className="col-12 col-sm-8 top-text">
                                <h1>Books</h1>
                                <p>Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' top-section'>
                    {/* banner section strt here */}
                    <div className='container banner' style={{ marginTop: "0px" }}>
                        <div className='row'>
                            <div className='col-lg-7 top-heading'>
                                <p className='color new-release'>NEW RELEASE</p>
                                <h2>The Sons of the Empire</h2>
                                <div className='col-lg-9 detail'>
                                    <p style={{ marginBottom: "1rem", fontWeight: "600" }}>Convallis feugiat enim consectetur mi purus massa sit mus in ac lacus odio ut scelerisque parturient.</p>
                                    <p>Vitae quam interdum turpis faucibus non in quis volutpat eu, amet enim sed mattis augue sed ultrices vestibulum vitae praesent vitae id massa a rhoncus id donec odio.</p>
                                    <Stack spacing={2} direction="row">
                                        <Button variant="outlined" style={{
                                            color: '#8E43F0',
                                            borderColor: "#8E43F0",
                                            '&:hover': {
                                                color: '#FFFFFF',
                                                backgroundColor: '#8E43F0',
                                            }
                                        }}>Buy Now</Button>
                                    </Stack>
                                </div>
                            </div>
                            <div className='col-lg-5 right-content'>
                                <img className='img-fluid' alt='banner' src={banner} />
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div className='container best-selling '>
                        <div class="container p-100">
                            <div class="row  best-selling-top-row">
                                <div class="col-12 col-sm-8  best-selling-top-text">
                                    <h1>Best Selling Books </h1>
                                </div>
                            </div>
                        </div>

                        <div className='row more-books'>
                            {booksData.map((book, index) => (
                                index < 8 && (
                                    <div key={book.id} className='box col-lg-3 col-md-6 mb-4'>
                                        <div className="">
                                            <img className="box-img" src={book.image} alt={`Image ${book.id}`} style={{ width: "270px", height: "300px" }} />
                                            <div className="box-body">
                                                <h5 className="box-title">{book.name}</h5>
                                                <p className="box-text">Author: {book.author}</p>
                                                <p className="box-text">Price: {book.price}</p>
                                                <Button
                                                    variant="contained"
                                                    style={{ backgroundColor: '#8E43F0' }}
                                                    onClick={() => addToCart(book)}
                                                >
                                                    Add to Cart
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                        {/* Cart Drawer */}
                        <CustomDrawer
                            cartItems={cartItems}
                            totalPrice={totalPrice}
                            isCartOpen={isCartOpen}
                            toggleCartDrawer={toggleCartDrawer}
                            removeFromCart={removeFromCart}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            selectedBook={selectedBook} // Pass the selected book item
                        />

                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Books;