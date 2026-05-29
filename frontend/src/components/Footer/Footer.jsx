import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="HostelMeals logo" className="navbar-logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            molestias blanditiis ipsam eaque distinctio suscipit quos dolor
            placeat excepturi pariatur voluptatibus adipisci sint, eius qui culpa
            recusandae quidem totam nam.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+98 12345678</li>
            <li>contact@HostelMeals.com</li>
          </ul>
        </div>

      </div>

      <hr />
      <p className="footer-copyright">
        © 2025 HostelMeals.com — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
