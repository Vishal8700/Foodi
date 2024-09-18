
import React from "react";
import Header from "../Header/Header";
import Hero from "../HeroSection/Hero"
import CategoriesSection from "../CategorySection/CategorySection";
import MenuCarousel from "../MenuCarousel/MenuCarousel";
import Testimonial from "../Testimonial/Testimonial";
import CulinaryServices from "../CulinaryServices/CulinaryServices";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <CategoriesSection/>
      <MenuCarousel/>
      <Testimonial/>
      <CulinaryServices/>
      <Footer/>
    </div>
  );
};

export default Home;
