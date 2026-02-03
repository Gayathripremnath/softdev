import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    document.querySelector('.demo-form-card')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="phone-number">
            📞 +91-9993060007
          </span>
          <span className="phone-number">
            📞 +91-91234 56789
          </span>
        </div>
        <button className="demo-btn" onClick={scrollToForm}>Request Demo</button>
      </div>

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
        
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
        
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
