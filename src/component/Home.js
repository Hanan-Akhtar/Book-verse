import React, { useState, useEffect } from 'react';
import './Style.css';
import banner from '../images/banner.jpeg';
import Stack from '@mui/material/Stack';
import jhon from '../images/robert.jpeg';
import Button from '@mui/material/Button';
import ultimate from '../images/ultimate.png';
import ultra from '../images/Ultra.png';
import mega from '../images/mega.jpeg.png';
import hyper from '../images/hyper.png';
import booksData from './data';
import CustomDrawer from './CartDrawer';
import Audiodata from './AudioData';
import { useContextApi } from './CartContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const { cartItems, setCartItems, isCartOpen, setIsCartOpen } = useContextApi();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotalPrice(cartItems);
    }, [cartItems]);

    const addToCart = (book) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === book.id);

        if (existingItemIndex !== -1) {
            const newCartItems = [...cartItems];
            newCartItems[existingItemIndex].quantity++;
            setCartItems(newCartItems);
        } else {
            const newItem = { ...book, quantity: 1 };
            setCartItems([...cartItems, newItem]);
        }
        setIsCartOpen(true);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const increaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity++;
        setCartItems(newCartItems);
    };

    const decreaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity--;
            setCartItems(newCartItems);
        }
    };

    const calculateTotalPrice = (cartItems) => {
        let total = 0;
        cartItems.forEach(item => {
            total += Number(item.price) * item.quantity;
        });
        setTotalPrice(total);
    };

    const toggleCartDrawer = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div>
            <div className='bg-light'>
                <div className='top-section'>
                    {/* banner section start here */}
                    <div className='container banner' style={{ marginTop: "0px" }}>
                        <div className='row'>
                            <div className='col-lg-5 order-lg-last right-content'>
                                <img className='img-fluid' alt='banner' src={banner} />
                            </div>
                            <div className='col-lg-7 order-lg-first top-heading'>
                                <p className='color new-release'>NEW RELEASE</p>
                                <h1>The Sons of the Empire</h1>
                                <div className='col-lg-9 detail'>
                                    <p>Justo habitant at augue ac sed proin consectetur ac urna nisl elit nulla facilisis viverra dolor sagittis nisi risus egestas adipiscing nibh euismod.</p>
                                    <Stack spacing={2} direction="row">
                                        <Button variant="contained" onClick={() => addToCart(booksData[0])} style={{ backgroundColor: '#8E43F0' }}>Buy Now</Button>
                                        <Button variant="outlined" style={{ color: '#8E43F0' }}>Read Sample</Button>
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* biography section start here */}

                <div>
                    <div className='container'>
                        <div className='row biography'>
                            <div className='col-lg-6'>
                                <img alt='jhon' className='img-fluid' src={jhon} />
                            </div>
                            <div className='col-lg-6 jhon-detail'>
                                <p className='color'>Biography</p>
                                <div className='jhon-robert'>
                                    <h1>John Roberts</h1>
                                    <p>Tellus tellus mattis pulvinar nulla euismod fermentum rhoncus sed vestibulum neque praesent pharetra ut fames viverra suscipit gravida dictumst volutpat ullamcorper lacus, malesuada enim proin volutpat mattis nunc amet, eget vitae egestas.
                                    </p>
                                    <p>
                                        Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean nam.
                                    </p>
                                </div>
                                <Button variant="outlined" style={{ color: '#8E43F0' }}>Read More</Button>
                            </div>
                        </div>

                        {/* Awards section start here */}

                        <div className='row' style={{ marginBottom: "50px" }}>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6 mb-4' style={{ height: "200px" }}>
                                    <div className="box">
                                        <img className="box-img" src={ultra} alt="Image 1" />
                                        <div className="box-body">
                                            <h5 className="box-title">Best Author Awards 2012</h5>
                                            <p className="box-text">Arcu pellentesque nisi consectetur netus aenean metus sit mattis sit sed.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 mb-4' style={{ height: "200px" }}>
                                    <div className="box">
                                        <img className="box-img" src={mega} alt="Image 2" />
                                        <div className="box-body">
                                            <h5 className="box-title">World's #1 Best-selling Book</h5>
                                            <p className="box-text">Diam nibh non in enim nunc suscipit risus, adipiscing aenean quisque viverra.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 mb-4' style={{ height: "200px" }}>
                                    <div className="box">
                                        <img className="box-img" src={hyper} alt="Image 3" />
                                        <div className="box-body">
                                            <h5 className="box-title">NYT Best-selling Author 2014</h5>
                                            <p className="box-text">Urna donec dolor bibendum lectus arcu purus eget nisl, ut nisl vitae.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 mb-4' style={{ height: "200px" }}>
                                    <div className="box">
                                        <img className="box-img" src={ultimate} alt="Image 4" style={{ width: "60px", height: "60px", marginBottom: "21px" }} />
                                        <div className="box-body">
                                            <h5 className="box-title">Best Author Awards 2018</h5>
                                            <p className="box-text">Morbi odio sodales et facilisis mi nibh fringilla quis risus ultricies facilisis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* best selling books section start here */}
                <div>
                    <div className='container best-selling'>
                        <div className="container p-100">
                            <div className="row best-selling-top-row">
                                <div className="col-12 col-sm-8 best-selling-top-text">
                                    <h1>Best Selling Books</h1>
                                    <p>Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row selling-books'>
                            {booksData.map((book, index) => (
                                index < 4 && (
                                    <div key={book.id} className='col-lg-3 col-md-6 mb-4'>
                                        <div className="box">
                                            <img className="box-img" src={book.image} alt={`Image ${book.id}`} style={{ width: "100%", height: "300px" }} />
                                            <div className="box-body">
                                                <h5 className="box-title">{book.name}</h5>
                                                <p className="box-text">Author: {book.author}</p>
                                                <p className="box-text">Price: ${Number(book.price).toFixed(2)}</p>
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
                        <div className='shop-all-books'>
                            <Link to="/books"><Button variant="outlined" style={{ color: '#8E43F0' }}>Shop All Books</Button></Link>
                        </div>

                    </div>
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
                    calculateTotalPrice={calculateTotalPrice}
                />

                {/* audio section start here */}

                <div>
                    <div className='container best-selling'>
                        <div className="container p-100">
                            <div className="row best-selling-top-row">
                                <div className="col-12 col-sm-8 best-selling-top-text">
                                    <h1>Latest Audiobook</h1>
                                    <p>Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row audio-section'>
                            {Audiodata.map((book) => (
                                <div key={book.id} className='col-lg-3 col-md-6 mb-4'>
                                    <div className="box">
                                        <img className="box-img" src={book.image} alt={`Image ${book.id}`} style={{ width: "100%", height: "300px" }} />
                                        <div className="box-body">
                                            <h5 className="box-title">{book.heading}</h5>
                                            <audio controls style={{ width: "100%", maxWidth: "270px" }}>
                                                <source src={book.audio} type="audio/mp3" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
