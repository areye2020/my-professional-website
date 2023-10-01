import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="section-title">Home</h1>
      <div className="content">
        <img className="rounded-image" src="home-image.jpg" alt="Home" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit...</p>
      </div>
    </div>
  );
};

export default Home;
