import React from "react";
import { Link, useLocation } from "react-router-dom";
import footerLogo from "../assets/Logo_white.png";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const pageLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/features", label: "Features" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-col footer-contact-col">
            <img src={footerLogo} alt="Smart Build" className="footer-logo" />
            <h4>Contact Information</h4>
            <p>Phone: <a href="tel:+917559080005">+91 7559080005</a> ( INDIA )</p>
            <p>Phone: <a href="tel:+971508291970">+971 50 829 1970</a> ( UAE )</p>
            <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@smartbuildapp.com" target="_blank" rel="noreferrer">info@smartbuildapp.com</a></p>
            <p>Website: <a href="https://www.smartbuildapp.com" target="_blank" rel="noreferrer">www.smartbuildapp.com</a></p>
          </div>

          <div className="footer-col">
            <h4>Pages</h4>
            <ul className="footer-links" aria-label="Footer page links">
              {pageLinks.map((page) => (
                <li key={page.to}>
                  <Link
                    to={page.to}
                    className={location.pathname === page.to ? "active" : ""}
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <p>
              We provide dedicated support and continuous updates to ensure smooth and efficient
              project management for our clients.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          {"\u00A9"} 2026 Smart Build Construction Management Application. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
