import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer-and-Nav/Footer';
import Navbar from '../Footer-and-Nav/Nav';
import { CartProvider } from '../component/CartContext';

const Layout = () => {
    return (
        <div>
            
            <Navbar />
            
            
            <Outlet /> 
            <Footer />
        </div>
    );
};

export default Layout;
