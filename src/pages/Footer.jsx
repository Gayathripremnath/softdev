import React from "react";
import "./Footer.css";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer-wrapper">


      <div className="footer-main">

        <div className="footer-header">

          <h1>SMART BUILD</h1>
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
            <p>Instagram</p>
            <div className="footer-branch" style={{ marginTop: '20px' }}>
              <p>
                <strong>Email:</strong> <a href="mailto:info@smartbuildapp.com">info@smartbuildapp.com</a>
              </p>
              <p>
                <strong>Website:</strong> <a href="https://www.smartbuildapp.com" target="_blank" rel="noreferrer">www.smartbuildapp.com</a>
              </p>
            </div>
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

          <div className="footer-col" id="footer-contact">
            <h4>Contact Us</h4>

            <div className="footer-branch">
              <h5>India (Kerala)</h5>
              <p className="footer-comp">Genova Technologies Pvt Ltd</p>
              <p className="footer-address">
                2nd Floor, West Hill Chungam, East Hill<br />
                Kozhikode, Kerala, 673005
              </p>
              <p className="footer-gst"><strong>GSTIN:</strong> 32AKLPL0387L1ZW</p>
              <div className="footer-phones">
                <a href="tel:+917559080005">+91 7559080005</a> <br />
                <a href="tel:+919562020978">+91 9562020978</a>
              </div>
            </div>


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
