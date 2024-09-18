// Header.jsx
import React from "react";
import { FiPhoneCall, FiShoppingCart, FiSearch, FiChevronDown } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">F</span>
          <span className="logo-text">FOODI</span>
        </div>
      </div>
      <nav className="nav-links">
        <a href="#home">
          Home <FiChevronDown className="nav-arrow" />
        </a>
        <a href="#menu">
          Menu <FiChevronDown className="nav-arrow" />
        </a>
        <a href="#services">
          Services <FiChevronDown className="nav-arrow" />
        </a>
        <a href="#offers">
          Offers <FiChevronDown className="nav-arrow" />
        </a>
      </nav>
      <div className="header-right">
        <div className="search-icon">
          <FiSearch size={20} />
        </div>
        <div className="cart-icon">
          <FiShoppingCart size={20} />
          <span className="cart-count">8</span>
        </div>
        <button className="contact-btn">
          <FiPhoneCall size={20} />
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
