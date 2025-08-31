"use client";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} CSI-IT Club, FCRIT. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
