"use client";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(255, 255, 255, 0.03)"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-heading">About CSI-IT Club</h3>
            <p>
              The Computer Society of India - IT Club at FCRIT is dedicated to fostering
              technical excellence and innovation among students through events,
              workshops, and collaborative learning.
            </p>
          </div>

          <div className="footer-section links">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#events">Events</a>
              <a href="#sponsors">Sponsors</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-section contact">
            <h3 className="footer-heading">Contact Us</h3>
            <p>
              <i className="contact-icon location"></i> FCRIT, Vashi, Navi Mumbai
            </p>
            <p>
              <i className="contact-icon email"></i> csiit@fcrit.ac.in
            </p>
          </div>
        </div>

        <div className="footer-social">
          <a href="https://www.instagram.com/csiitfcrit?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/csi-it-fcrit/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        
        </div>

        <div className="footer-bottom">
          <p className="footer-text">
            © {new Date().getFullYear()} CSI-IT Club, FCRIT. All rights reserved.
          </p>
          <p className="footer-tagline">
            <span className="gradient-text">TECHNO</span>vation 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
