import React from 'react';
import { FaUtensils, FaTruck, FaShoppingCart, FaGift } from 'react-icons/fa';
import './CulinaryServices.css';

const CulinaryServices = () => {
  return (
    <div className='body'>
        <div className="culinary-container">
      <div className="culinary-left">
        <h5>OUR STORY & SERVICES</h5>
        <h2>Our Culinary Journey And Services</h2>
        <p>
          Rooted in passion, we curate unforgettable dining experiences and offer
          exceptional services, blending culinary artistry with warm hospitality.
        </p>
        <button className="explore-btn">Explore</button>
      </div>

      <div className="culinary-right">
        <div className="service-box">
          <FaUtensils className="service-icon" />
          <h3>CATERING</h3>
          <p>Delight your guests with our flavors and presentation</p>
        </div>
        <div className="service-box">
          <FaTruck className="service-icon" />
          <h3>FAST DELIVERY</h3>
          <p>We deliver your order promptly to your door</p>
        </div>
        <div className="service-box">
          <FaShoppingCart className="service-icon" />
          <h3>ONLINE ORDERING</h3>
          <p>Explore menu & order with ease using our Online Ordering</p>
        </div>
        <div className="service-box">
          <FaGift className="service-icon" />
          <h3>GIFT CARDS</h3>
          <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CulinaryServices;
