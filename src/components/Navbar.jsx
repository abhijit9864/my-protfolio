import React, { useState } from 'react';
import './Navbar.css';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">Abhijit</a>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Work Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
           <a href="/my-protfolio/resume.pdf" target="_blank" rel="noopener noreferrer"  className="download-btn" download>Download CV</a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
