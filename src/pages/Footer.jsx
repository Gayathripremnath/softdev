import React from "react";
import "./Footer.css";
import logo from "../assets/logo.Jpg"; 

const Footer = () => {
  return (
    <footer className="footer-wrapper">

      <div className="footer-logo-float">
        <img src={logo} alt="Genova Technologies" />
      </div>

      {/* FOOTER CONTENT */}
      <div className="footer-main">

        <div className="footer-header">
         

          <div className="social-icons">
            <span>f</span>
            <span>t</span>
            <span>in</span>
          </div>
        </div>

        <div className="footer-grid">

          <div className="footer-col">
            <h4>Social Media</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>

          <div className="footer-col">
            <h4>Our Products</h4>
            <p>Smart Build Application</p>
            <p>Farm Management Application</p>
            <p>Enquiry Management Application</p>
            <p>Vehicle Management Application</p>
            <p>School Management Application</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <p>Our Clients</p>
            <p>About Us</p>
            <p>Domain Registration</p>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>
              1st Floor, Basil Building, Horse Ride Road,
              Opp. St. Michels Church, Westhill,
              Kozhikode, Kerala, 673005
            </p>
            <p><strong>GSTIN:</strong> 32AKLPL0387L1ZW</p>
            <p>
              <strong>Call us:</strong><br />
              +91 7559080005<br />
              +91 8714359715<br />
              +91 9562020978
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          © Copyright @ 2025 <span>TECHNOLOGIES</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
