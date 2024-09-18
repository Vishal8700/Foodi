// HeroSection.jsx
import React from "react";
import "./HeroSection.css";
import heroImage from "../assets/hero.png"; // Update this with the correct image path

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Dive into Delights <br />
          Of Delectable <span className="highlight">Food</span>
        </h1>
        <p className="hero-description">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
        </p>
        <div className="hero-buttons">
          <button className="order-now-btn">Order Now</button>
          <button className="watch-video-btn">
            Watch Video <span className="play-icon">▶</span>
          </button>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Delicious Food" className="hero-image" />
        <div className="hot-spicy-tag">Hot spicy Food 🌶️</div>
      </div>
    </section>
  );
};

export default HeroSection;
