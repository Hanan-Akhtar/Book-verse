import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import './Footer.css';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleChange = (event) => {
        setEmail(event.target.value);
        setIsValidEmail(true); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setIsValidEmail(isValid);
        if (isValid) {
            console.log('Email subscribed:', email);
        }
    };

    return (<>
    {/* email section strt here */}
    <div className='container be-the-first '>
                <div class="container p-100">
                    <div class="row  top-row">
                        <div class="col-12 col-sm-8  top-text">
                            <h1>Be the first to know </h1>
                            <p>Lectus amet scelerisque fusce est venenatis, eget enim dolor amet vitae pharetra</p>
                            <form onSubmit={handleSubmit}>
                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        <div className="input-group mb-3">
                                            <input
                                                type="email"
                                                className={`form-control ${isValidEmail ? '' : 'is-invalid'}`}
                                                placeholder="Your Email Address"
                                                value={email}
                                                onChange={handleChange}
                                            />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit">Subscribe</button>
                                            </div>
                                            {!isValidEmail && (
                                                <div className="invalid-feedback">
                                                    Please enter a valid email address.
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h3>Book Verse</h3>
                    </div>
                    <div className="col-md-4">
                        <ul className="footer-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/books">Books</Link></li>
                            <li><Link to="/about">Author</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="social-icons">
                            <li><a href="#"><Facebook style={{ color: 'white' }} /></a></li>
                            <li><a href="#"><Instagram style={{ color: 'white' }} /></a></li>
                            <li><a href="#"><Twitter style={{ color: 'white' }} /></a></li>
                            <li><a href="#"><LinkedIn style={{ color: 'white' }} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Book Store | Powered by Book Store</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;
