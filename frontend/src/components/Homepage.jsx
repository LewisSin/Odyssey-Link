// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <nav>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </nav>
      </header>
      <section className="hero">
        <h1>Welcome to the Travel Sharing Community</h1>
        <p>Discover and share your travel experiences.</p>
        <Link to="/explore" className="explore-button">Explore Now</Link>
      </section>
      <section className="features">
        <div className="feature">
          <h2>Create Travel Journals</h2>
          <p>Document your journeys with personal travel journals.</p>
        </div>
        <div className="feature">
          <h2>Share Photos</h2>
          <p>Upload your travel photos and share your adventures.</p>
        </div>
        <div className="feature">
          <h2>Interactive Maps</h2>
          <p>Mark your travels and plan your next trip with interactive maps.</p>
        </div>
      </section>
      <footer className="landing-footer">
        <p>Travel Sharing Community © 2024</p>
      </footer>
    </div>
  );
};

export default LandingPage;
