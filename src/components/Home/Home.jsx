import React from 'react';
import './Home.css';
import heroPatternImage from "../../assets/homeBanner2.jpg";

export const Home = () => {
  return (
    <div id='home'>
    <section className="home relative">
      <div className="hero_destinationpage" style={{ 
        backgroundImage: `url(${heroPatternImage})`, 
      }}>
      </div>

        
    </section>

      <div className="banners flex justify-around items-center absolute bottom-0 left-0 w-1/2 bg-blue-600 text-white font-bold">
          <div className="banner-section flex flex-col items-center">
            <p>150+</p>
            <p>Projects Done</p>
          </div>
          <div className="banner-section flex flex-col items-center">
            <p>14</p>
            <p>Awards Won</p>
          </div>
          <div className="banner-section flex flex-col items-center">
            <p>7+</p>
            <p>Years Experience.</p>
          </div>
          <div className="banner-section flex flex-col items-center">
            <p>110+</p>
            <p>Happy Clients</p>
          </div>
        </div>

        </div>
  );
}
