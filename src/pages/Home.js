import React from 'react';
import ProductCard from '../components/ProductCard';
import Testimonial from '../components/Testimonial';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to MyProduct</h1>
        <p>Your one-stop shop for the best product.</p>
      </section>
      <section className="product-section">
        <ProductCard />
      </section>
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <Testimonial quote="This product is amazing!" author="Customer A" />
        <Testimonial quote="I love it!" author="Customer B" />
      </section>
    </div>
  );
};

export default Home;
