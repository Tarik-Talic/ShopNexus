import React from 'react';
import HeroImage from '../../assets/Ecommerce-HeroImage.png';
import './Home.css';

function Home() {
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

export default Home;
