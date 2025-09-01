"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Events", href: "#events" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"} ${scrolled ? "scrolled" : ""}`}
      >
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo-container">
            <Image 
              src="/fcrit_logo.png" 
              alt="FCRIT Logo" 
              width={50} 
              height={50} 
              className="fcrit-logo"
            />
            <h1 className="navbar-logo">Fr. C. Rodrigues Institute of Technology</h1>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            {/* Theme Toggle
            <button onClick={toggleTheme} className="theme-toggle">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="mobile-menu-btn">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button onClick={toggleMenu} className="mobile-menu-close">
          <X size={24} />
        </button>
        
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={toggleMenu}
            className="navbar-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
