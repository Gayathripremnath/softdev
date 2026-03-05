import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-header">
          <h1>SMART BUILD</h1>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Contact Information</h4>
            <p>Phone: <a href="tel:+917559080005">+91 7559080005</a> ( INDIA )</p>
            <p>Phone: <a href="tel:+971508291970">+971 50 829 1970</a> ( UAE )</p>
            <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@smartbuildapp.com" target="_blank" rel="noreferrer">info@smartbuildapp.com</a></p>
            <p>Website: <a href="https://www.smartbuildapp.com" target="_blank" rel="noreferrer">www.smartbuildapp.com</a></p>
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
          © 2026 Smart Build Construction Management Application. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
