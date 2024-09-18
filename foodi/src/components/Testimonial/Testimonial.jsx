import React from 'react';
import './Testimonial.css'; // You can add custom styles in this CSS file
import image from "../assets/Screenshot 2024-09-14 013613.png";
import avatar1 from "../assets/boy.png";
import avatar2 from "../assets/woman.png";
import avatar3 from "../assets/woman (1).png";
const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="chef-section">
        <img 
          src={image} 
          alt="Best Chef" 
          className="chef-image" 
        />
      </div>

      <div className="feedback-section">
        <h3>What Our Customers Say About Us</h3>
        <p className="testimonial-text">
          "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! 
          The attention to detail in presentation and service was impeccable."
        </p>
        <div className="customer-feedback">
          <div className="customer-rating">
            <img 
              src={avatar1} 
              alt="Customer 1" 
              className="customer-avatar"
            />
            <img 
              src={avatar2} 
              alt="Customer 2" 
              className="customer-avatar"
            />
            <img 
              src={avatar3}  
              alt="Customer 3" 
              className="customer-avatar"
            />
            <div className="rating-info">
              <span className="rating-star">⭐ 4.9</span>
              <span className="review-count">(18.6k Reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
