


// import React, { useEffect } from 'react';
import Image from "next/image";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container centered-content">
        {/* Hero Content */}
        <div className="hero-content">
           <h2 className="hero-subheading">
             <div className="csi-logo-container">
               <div className="logo-circle">
                 <Image 
                   src="/logo.png" 
                   alt="CSI-IT Logo" 
                   width={50} 
                   height={50} 
                   className="csi-logo"
                 />
               </div>
               <div className="text-container">
                 <span className="animated-text csi-text">CSI-IT</span>
                 <span className="fcrit-text">  FCRIT</span>
               </div>
             </div>
           </h2>
            <h3 className="presents-text">𝓅𝓇𝑒𝓈𝑒𝓃𝓉𝓈</h3>
          <div className="technovation-container">
            <Image 
              src="/TECHNOVation.gif" 
              alt="TECHNOVation 2025" 
              width={800} 
              height={300} 
              className="technovation-gif"
              priority
            />
          </div>
          
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
