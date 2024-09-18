import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Footer.css'; // Ensure to import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-letter">F</div>
              <span className="logo-text">OODI</span>
            </div>
            <p className="footer-tagline">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3>Useful Links</h3>
              <ul>
                {['About Us', 'Events', 'Blogs', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Main Menu</h3>
              <ul>
                {['Home', 'Offers', 'Menus', 'Reservation'].map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:example@email.com">example@email.com</a></p>
              <p>Phone: <a href="tel:+64958248966">+64 958 248 966</a></p>
              <p>Follow us on:</p>
              <div className="social-icons">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                  <a key={index} href="#" className="social-icon">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
  Copyright © {new Date().getFullYear()} VerveBridge | All rights reserved
      </div>
      </div>
    </footer>
  );
};

export default Footer;