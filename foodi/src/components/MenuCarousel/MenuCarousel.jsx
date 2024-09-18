import React, { useState, useEffect } from 'react';
import './MenuCarousel.css';
import dish1 from "../assets/pngegg (1).png";
import dish2 from "../assets/pngegg (2).png";
import dish3 from "../assets/pngegg (3).png";
import dish4 from "../assets/pngegg.png";
import dish5 from "../assets/—Pngtree—cobb salad american cuisine isolated_15450055.png";

const MenuCarousel = () => {
  const dishes = [
    { name: 'Fattoush salad', price: 24.00, rating: 4.9, image: dish1 },
    { name: 'Vegetable salad', price: 26.00, rating: 4.6, image: dish2 },
    { name: 'Egg vegi salad', price: 23.00, rating: 4.5, image: dish3 },
    { name: 'Greek salad', price: 22.00, rating: 4.7, image: dish4 },
    { name: 'Cobb salad', price: 25.00, rating: 4.8, image: dish5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (

  <div className='body'>
    <div className="menu-carousel">
      <p className="special-dishes">Special Dishes</p>
      <div className="carousel-header">
        <h1 className="carousel-title">Standout Dishes From Our Menu</h1>
        <div className="navigation-buttons">
          <button className="nav-button" onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="nav-button next" onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
      
      <div className="dishes-container">
        {[0, 1, 2 ].map((offset) => {
          const index = (currentIndex + offset) % dishes.length;
          const dish = dishes[index];
          return (
            <div key={index} className={`dish-card ${isTransitioning ? 'transitioning' : ''}`}>
              <div className="dish-image-container">
                <img src={dish.image} alt={dish.name} className="dish-image" />
                <button className="favorite-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <div className="dish-details">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-description">Description of the item</p>
                <div className="dish-footer">
                  <span className="dish-price">${dish.price.toFixed(2)}</span>
                  <span className="dish-rating">
                    <svg className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {dish.rating}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
    
  );
};

export default MenuCarousel;