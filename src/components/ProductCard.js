import React from 'react';
import './ProductCard.css';
import productImage from '../assets/images/product-image.jpg';

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src={productImage} alt="Product" />
      <h2>Product Name</h2>
      <p>Product description goes here.</p>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductCard;
