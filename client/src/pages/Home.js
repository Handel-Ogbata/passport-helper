import React from 'react';
import { Link } from 'react-router-dom';
import passportImg from '../assets/passport.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Let's make passport<br />
            application easier.
          </h1>
          <p className="hero-subtitle">
            Navigate through the Nigerian passport application process with ease.
            No more confusion, just clear step-by-step guidance.
          </p>
          <div className="hero-buttons">
            <Link to="/application" className="btn-primary">
              Get Started
            </Link>
            <Link to="/application" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src={passportImg} 
            alt="Nigerian Passport" 
            className="passport-image" 
          />
          <div className="hero-background-circle"></div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>Document Guide</h3>
          <p>Clear checklist of all required documents and how to prepare them correctly.</p>
        </div>
        <div className="feature-card">
          <h3>Step-by-Step Process</h3>
          <p>Follow our detailed guide through each stage of the application process.</p>
        </div>
        <div className="feature-card">
          <h3>Application Support</h3>
          <p>Get helpful tips and common pitfalls to avoid during your application.</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 