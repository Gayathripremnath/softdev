import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "./Navbar.css";
import logo from "../assets/Logo_black.png";

const Navbar = () => {
  useEffect(() => {
    emailjs.init('tX9cxueTJuOgEl9Sz');
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [demoPopupOpen, setDemoPopupOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", city: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (demoPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [demoPopupOpen]);

  const openDemoPopup = () => {
    setMobileMenuOpen(false);
    setFormSubmitted(false);
    setFormData({ name: "", email: "", city: "" });
    setDemoPopupOpen(true);
  };

  const closeDemoPopup = () => {
    setDemoPopupOpen(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.city) return;

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,       // matches {{name}}
      from_name: formData.name,  // matches {{from_name}}
      email: formData.email,     // matches {{email}}
      from_email: formData.email, // matches {{from_email}}
      city: formData.city,
      phone: formData.phone || "N/A",
      request_type: 'Navbar Demo Request',
      to_name: 'Smart Build Admin'
    };

    
    const SERVICE_ID = 'service_gsd092p';
    const TEMPLATE_ID = 'template_zyusngf';
    const PUBLIC_KEY = 'tX9cxueTJuOgEl9Sz'; // Removed trailing hyphen

    import('@emailjs/browser').then((emailjs) => {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((response) => {
          console.log('NAVBAR SUCCESS!', response.status, response.text);
          setFormSubmitted(true);
          setFormData({ name: "", email: "", city: "" });
          setIsSubmitting(false);
        })
        .catch((err) => {
          console.error('EmailJS Error Detailed:', err);
          alert(`Submission failed: ${err.text || 'Error'}. Please try again.`);
          setIsSubmitting(false);
        });
    });
  };

  return (
    <>
      <header className={`header-wrapper ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
        <div className="top-banner">
          <div className="container">
            <div className="banner-content">
              <div className="banner-left">
                <a href="tel:+917559080005" className="contact-link">
                  <span className="navdot"></span> +91 7559080005
                  <span>(</span>
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="India flag"
                    className="flag-icon"
                  />
                  <span>)</span>
                </a>
                <span className="separator">/</span>
                <a href="tel:+971508291970" className="contact-link">
                  <span className="navdot"></span> +971 50 829 1970
                  <span>(</span>
                  <img
                    src="https://flagcdn.com/w20/ae.png"
                    alt="UAE flag"
                    className="flag-icon"
                  />
                  <span>)</span>
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
                    <button className="glow-btn mobile-menu-btn" onClick={openDemoPopup}>
                      Request Demo
                    </button>
                  </li>
                </ul>
              </div>

              <div className="nav-end">
                <button className="glow-btn desktop-only" onClick={openDemoPopup}>
                  Request Demo
                </button>

                <button
                  className={`set-nav-mobile ${mobileMenuOpen ? "open" : ""}`}
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

      {demoPopupOpen && (
        <div className="demo-overlay" onClick={closeDemoPopup}>
          <div className="demo-popup" onClick={(e) => e.stopPropagation()}>
            <button className="demo-close-btn" onClick={closeDemoPopup} aria-label="Close">
              &#x2715;
            </button>

            {!formSubmitted ? (
              <>
                <div className="demo-popup-header">
                  <h2 className="demo-popup-title">Request a Demo</h2>
                  <p className="demo-popup-subtitle">
                    Fill in your details and our team will get in touch with you shortly.
                  </p>
                </div>

                <form className="demo-form" onSubmit={handleFormSubmit} noValidate>
                  <div className="demo-form-group">
                    <label htmlFor="demo-name">Full Name</label>
                    <input
                      id="demo-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="demo-form-group">
                    <label htmlFor="demo-email">Email Address</label>
                    <input
                      id="demo-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="demo-form-group">
                    <label htmlFor="demo-city">City</label>
                    <input
                      id="demo-city"
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                      autoComplete="address-level2"
                    />
                  </div>

                  <button type="submit" className="demo-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                    {!isSubmitting && <span className="demo-btn-arrow">&#8594;</span>}
                  </button>
                </form>
              </>
            ) : (
              <div className="demo-success">
                <div className="demo-success-icon">&#10003;</div>
                <h3>Thank You!</h3>
                <p>We've received your demo request. Our team will reach out to you soon.</p>
                <button className="demo-submit-btn" onClick={closeDemoPopup}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
