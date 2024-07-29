import React from 'react';
import './Testimonial.css';

const Testimonial = ({ quote, author }) => {
  return (
    <div className="testimonial">
      <p>"{quote}"</p>
      <h4>- {author}</h4>
    </div>
  );
};

export default Testimonial;
