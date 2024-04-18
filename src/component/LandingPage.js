import React from 'react';
import { ShoppingCart, Person, Search } from '@mui/icons-material';
import '../App.css';
import banner from '../images/banner.jpeg'
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import jhon from '../images/robert.jpeg'
import Button from '@mui/material/Button';
import ultimate from '../images/ultimate.png'
import ultra from '../images/ultra.png'
import mega from '../images/mega.jpeg.png'
import hyper from '../images/hyper.png'
import booksData from './data';
import { useState } from 'react';
import CartListing from './CartListing';
import Audiodata from './AudioData'

const LandingPage = () => {

    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    // Function to add item to the cart
    const addToCart = (book) => {
        setCartItems([...cartItems, book]);
        setTotalPrice(totalPrice + book.price);
    };

    // Function to remove item from the cart
    const removeFromCart = (bookToRemove) => {
        const updatedCart = cartItems.filter((book) => book !== bookToRemove);
        setCartItems(updatedCart);
        setTotalPrice(totalPrice - bookToRemove.price);
    };

    return (
        <div>
            <div className='bg-light top-section'>

                {/* navbar section strt here */}

                <nav className="navbar navbar-expand-lg navbar-light top-nav">
                    <div className="container">
                        <Link className="navbar-brand" href="#">BookVerse</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Books</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">About Author</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Contact</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <div className="input-group">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <Link className="input-group-text color">
                                        <Search />
                                    </Link>
                                </div>
                            </form>
                            <div className="right-content">
                                <button className="btn color mx-2" onClick={() => setShowCart(!showCart)}>
                                    <ShoppingCart />{cartItems.length}
                                </button>
                                <Link to="/signIn" className="btn color mx-2"><Person /> Sign In</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Conditionally render cart listing */}
                {showCart &&
                    <CartListing
                        cartItems={cartItems}
                        totalPrice={totalPrice}
                        removeFromCart={removeFromCart}
                    />
                }

                {/* banner section strt here */}

                <div className='container banner'>
                    <div className='row'>
                        <div className='col-lg-7 top-heading'>
                            <p className='color new-release'>NEW RELEASE</p>
                            <h1>The Sons of the Empire</h1>
                            <div className='col-lg-9 detail'>
                                <p>Justo habitant at augue ac sed proin consectetur ac urna nisl elit nulla facilisis viverra dolor sagittis nisi risus egestas adipiscing nibh euismod.</p>
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" style={{ backgroundColor: '#8E43F0' }}>Buy Now</Button>
                                    <Button variant="outlined" style={{ color: '#8E43F0' }}>Read Sample</Button>
                                </Stack>
                            </div>
                        </div>
                        <div className='col-lg-5 right-content'>
                            <img className='img-fluid' alt='banner' src={banner} />
                        </div>
                    </div>
                </div>
            </div>

            {/* biography section strt here */}

            <div className='bg-light '>
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

                    {/* Awards section strt here */}

                    <div className='row'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div className="box">
                                    <img className="box-img" src={ultra} alt="Image 1" />
                                    <div className="box-body">
                                        <h5 className="box-title">Best Author Awards 2012</h5>
                                        <p className="box-text">Arcu pellentesque nisi consectetur netus aenean metus sit mattis sit sed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className="box">
                                    <img className="box-img" src={mega} alt="Image 2" />
                                    <div className="box-body">
                                        <h5 className="box-title">World's #1 Best-selling Book</h5>
                                        <p className="box-text">Diam nibh non in enim nunc suscipit risus, adipiscing aenean quisque viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className="box">
                                    <img className="box-img" src={hyper} alt="Image 3" />
                                    <div className="box-body">
                                        <h5 className="box-title">NYT Best-selling Author 2014</h5>
                                        <p className="box-text">Urna donec dolor bibendum lectus arcu purus eget nisl, ut nisl vitae.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className="box">
                                    <img className="box-img" src={ultimate} alt="Image 4" />
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
            {/* best selling books section strt here */}
            <div className=' bg-light'>
                <div className='container best-selling '>
                    <div class="container p-100">
                        <div class="row  best-selling-top-row">
                            <div class="col-12 col-sm-8  best-selling-top-text">
                                <h1>Best Selling Books </h1>
                                <p>Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean.                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='row selling-books'>
                        {booksData.map((book) => (
                            <div key={book.id} className='col-lg-3'>
                                <div className="box">
                                    <img className="box-img" src={book.image} alt={`Image ${book.id}`} style={{ width: "270px", height: "300px" }} />
                                    <div className="box-body">
                                        <h5 className="box-title">{book.name}</h5>
                                        <p className="box-text">Author: {book.author}</p>
                                        <p className="box-text">Price: {book.price}</p>
                                        <Button variant="contained" style={{ backgroundColor: '#8E43F0', }} onClick={() => addToCart(book)}>Add to Cart</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='shop-all-books'>
                        <Button variant="outlined" style={{ color: '#8E43F0', }}>Shop All Books</Button>
                    </div>

                </div>
            </div>

            {/* audio section strt here */}

            <div className=' bg-light'>
                <div className='container best-selling '>
                    <div class="container p-100">
                        <div class="row  best-selling-top-row">
                            <div class="col-12 col-sm-8  best-selling-top-text">
                                <h1>Latest Audiobook </h1>
                                <p>Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row audio-section'>
                        {Audiodata.map((book) => (
                            <div key={book.id} className='col-lg-3'>
                                <div className="box">
                                    <img className="box-img" src={book.image} alt={`Image ${book.id}`} style={{ width: "270px", height: "300px" }} />
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
            <div className='container best-selling '>
                <div class="container p-100">
                    <div class="row  best-selling-top-row">
                        <div class="col-12 col-sm-8  best-selling-top-text">
                            <h1>Be the first to know </h1>
                            <p>Lectus amet scelerisque fusce est venenatis, eget enim dolor amet vitae pharetra</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
