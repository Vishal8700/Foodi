// CategoriesSection.jsx
import React from "react";
import "./CategoriesSection.css";
import img1 from "../assets/pngwing.com.png";
import img2 from "../assets/pngwing.com (1).png";
import img3 from "../assets/pngwing.com (2).png";
import img4 from "../assets/pngwing.com (3).png";




const categories = [
  {
    name: "Main Dish",
    count: "86 dishes",
    imageUrl: img1, // Replace with actual image paths
  },
  {
    name: "Break Fast",
    count: "12 break fast",
    imageUrl: img2,
  },
  {
    name: "Dessert",
    count: "48 dessert",
    imageUrl: img3,
  },
  {
    name: "Browse All",
    count: "255 Items",
    imageUrl: img4,
  },
];

const CategoriesSection = () => {
  return (
    <section className="categories-section-img-sts">
      <h5 className="categories-subtitle-img-sts">Customer Favorites</h5>
      <h2 className="categories-title-img-sts">Popular Categories</h2>

      <div className="categories-grid-img-sts" id="category">
        {categories.map((category, index) => (
          <div key={index} className="category-card-img-sts">
            <div className="category-image-img-sts">
              <img src={category.imageUrl} alt={category.name} />
            </div>
            <h3 className="category-name">{category.name}</h3>
            <p className="category-count">{category.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
