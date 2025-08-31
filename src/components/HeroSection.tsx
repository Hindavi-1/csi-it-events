


// import React, { useEffect } from 'react';
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container centered-content">
        {/* Hero Content */}
        <div className="hero-content">
           <h2 className="hero-subheading">
           <span className="animated-text csi-text"> CSI-IT </span> Club, FCRIT</h2>
            <h3 className="animated-text presents-text">presents</h3>
          <h1 className="hero-heading">
            <span className="animated-text glitch-text">TECHNO</span><span className="animated-text techno-text glitch-text">Vation</span>  
            <span className="year-text">2025</span>
          </h1>
          
          <p className="hero-description">
 <b> A 3-day celebration of innovation, creativity, and talent </b>– 
  bringing together Technical, Non-Technical, Online, and Offline events 
  for everyone at FCRIT.
</p>
          
          {/* <button className="cta-button">
            <span>Explore Events</span>
            <div className="button-glow"></div>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
