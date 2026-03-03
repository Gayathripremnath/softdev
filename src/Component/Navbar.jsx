import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logo_black.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToForm = () => {
    document.getElementById("request-demo-section")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header-wrapper ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
      {/* TOP DESCRIPTOR BAR */}
      <div className="top-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-left">
              <a href="tel:+919778553345" className="contact-link">
                <span className="navdot"></span> +91 7559080005
              </a>
              <span className="separator">/</span>
              <a href="tel:+919123456789" className="contact-link">
                <span className="navdot"></span> +91 8714359715
              </a>
              <span className="separator">|</span>
              <span className="availability">Available 24/7</span>
            </div>
            <div className="banner-right">
              <span className="trust-badge">Trusted Construction Partner</span>
            </div>
          </div>
        </div>
      </div>

      {/* FLOAT NAV */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="branding">
              <div className="logo-box">
                <img src={logo} alt="Smart Build" className="nav-logo" />
              </div>
            </Link>

            <div className="nav-center">
              <ul className={`menu-list ${mobileMenuOpen ? "active" : ""}`}>
                <li>
                  <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/features" className={location.pathname === "/features" ? "active" : ""}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
                    Services
                  </Link>
                </li>
                 <li>
                  <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                    Contact
                  </Link>
                </li>
                <li className="mobile-cta">
                  <button className="glow-btn mobile-menu-btn" onClick={scrollToForm}>
                    <Link to="/contact">Request Demo</Link>
                  </button>
                </li>
              </ul>
            </div>

            <div className="nav-end">
              <button className="glow-btn desktop-only" onClick={scrollToForm}>
                Request Demo
              </button>

              <button
                className={`burger ${mobileMenuOpen ? "open" : ""}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

