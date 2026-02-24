  import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import "./Navbar.css";
  import logo from "../assets/logo.jpg";
  import logosmall from "../assets/logosmall.png";

  const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToForm = () => {
      document.querySelector('.demo-form-card')?.scrollIntoView({ behavior: 'smooth' });
    };

    
    return (
      <>
        <div className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
          <div className="top-bar-left">
            <span className="phone-number">
              <a href="tel:+919993060007">📞 +91-9778553345</a>
            </span>

            <span className="phone-number">
              <a href="tel:+919123456789">📞 +91-9123456789</a>
            </span>
          </div>
          <button className="demo-btn" onClick={scrollToForm}>Request Demo</button>
        </div>

        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <Link to="/" className="logo">
            <img src={logosmall} alt="Logo" />
          </Link>

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
