// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo-container">
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" alt="Flipkart Logo" className="logo" />
                <span className="logo-text">Plus</span>
                <span className="explore-text">Explore <span className="plus-text">Plus</span></span>
            </div>
            <div className="search">
                <input type="text" placeholder="Search for products, brands and more" className="search-input" />
                <button className="search-button">Search</button>
            </div>
            <div className="right-icons">
                <span className="login">Login</span>
                <span className="more">More</span>
                <span className="cart">Cart</span>
            </div>
        </header>
    );
}

export default Navbar;
