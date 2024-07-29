import React from 'react';
import './ProductDetails.css';
import productImage from '../assets/images/product-image.jpg';

const ProductDetails = () => {
  return (
    <div className="product-details">
      <h1>Product Name</h1>
      <img src={productImage} alt="Product" />
      <p>Detailed description of the product.</p>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
