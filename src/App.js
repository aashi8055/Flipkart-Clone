// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';

const App = () => {
    // Sample product (replace with your own data)
    const products = [
        { id: 1, imageUrl: 'https://via.placeholder.com/200', title: 'Product 1', price: 999 },
        { id: 2, imageUrl: 'https://via.placeholder.com/200', title: 'Product 2', price: 1499 },
        { id: 3, imageUrl: 'https://via.placeholder.com/200', title: 'Product 3', price: 299 },
        // Add more products as needed
    ];

    return (
        <div className="App">
            <Navbar />
            <main>
                <Banner />
                <section className="products">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            imageUrl={product.imageUrl}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </section>
            </main>
            <footer>
                <p>© 2024 Flipkart Clone</p>
            </footer>
        </div>
    );
}

export default App;
