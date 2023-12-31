import React from 'react';
import { HeroImage } from '../../assets';
import './HomePage.css';

function HomePage() {
  
  return (
    <div className="heroContainer">
      <img src={HeroImage} alt="heroImage" className="heroContainer-img" />
      <div className="heroContainer-text">
        <h1>
          Shoping online <br />
          was never been easier.
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
