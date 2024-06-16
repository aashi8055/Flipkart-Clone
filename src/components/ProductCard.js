// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ imageUrl, title, price }) => {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={title} className="product-image" />
            <div className="product-details">
                <p className="product-title">{title}</p>
                <p className="product-price">₹{price}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
