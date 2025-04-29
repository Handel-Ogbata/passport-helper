import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          PassportHelper
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/application" className="nav-link">Apply Now</Link>
          </li>
          <li>
            <Link to="/application" className="nav-button">Get Started</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar; 