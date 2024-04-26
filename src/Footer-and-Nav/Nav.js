import React, { useState,useEffect,useContext } from 'react';
import { ShoppingCart, Person, Search } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import { useContextApi } from '../component/CartContext';

const Navbar = () => {
    const location = useLocation();
    const {isCartOpen, setIsCartOpen}=useContextApi()
    const [isBlogPage, setIsBlogPage] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true); 


    useEffect(() => {
        setIsBlogPage(location.pathname === '/blog');
    }, [location]);

    const handleToggleCollapse = () => {
        setIsCollapsed(!isCollapsed); 
    };

    return (
        <>
            {/* navbar section start here */}
            <nav className={`navbar bg-light navbar-expand-lg navbar-light ${isBlogPage ? 'bg-white' : 'bg-light'}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/">BookVerse</Link>
                    <button className="navbar-toggler" type="button" onClick={handleToggleCollapse} aria-expanded={!isCollapsed}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={handleToggleCollapse}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/books" onClick={handleToggleCollapse}>Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={handleToggleCollapse}>About Author</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog" onClick={handleToggleCollapse}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={handleToggleCollapse}>Contact</Link>
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
                            <button className="btn color mx-2" onClick={() => setIsCartOpen(true)}>
                                <ShoppingCart />
                            </button>
                            <Link to="/signIn" className="btn color mx-2"><Person /> Sign In</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
