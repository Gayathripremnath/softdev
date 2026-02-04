import React from "react";
import "./About.css";
import heroImg from "../assets/civil.jpg";
import img1 from "../assets/civil.jpg";
import img2 from "../assets/civil.jpg";
import img3 from "../assets/civil.jpg";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="about-overlay"></div>
        <div className="about-hero-content">
          <span className="breadcrumb">Home / About</span>
          <h1>Crafting Spaces, Shaping Futures</h1>
          <p>
            Smart Build Application helps construction companies plan,
            execute, and deliver projects with confidence.
          </p>
          <button className="primary-btn">Our Services</button>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-intro">
        <div className="about-container">
          <div className="about-images">
            <img src={img1} alt="construction" />
            <img src={img2} alt="team" />
            <img src={img3} alt="site" />
          </div>

          <div className="about-text">
            <h2>Built on Experience. Driven by Quality.</h2>
            <p>
              Smart Build Application is an all-in-one ERP platform
              designed specifically for construction businesses.
              From enquiry to execution, everything stays connected.
            </p>

            <div className="about-stats">
              <div>
                <h3>1000+</h3>
                <span>Projects Completed</span>
              </div>
              <div>
                <h3>98%</h3>
                <span>Success Rate</span>
              </div>
              <div>
                <h3>500+</h3>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2>Why Choose Us</h2>
        <p className="why-sub">
          We deliver smart digital solutions tailored for construction
          professionals.
        </p>

        <div className="why-grid">
          <div className="why-card">
            <h4>Modern Technology</h4>
            <p>Cloud-based ERP with real-time access.</p>
          </div>

          <div className="why-card">
            <h4>Expert Engineers</h4>
            <p>Built by professionals who know construction.</p>
          </div>

          <div className="why-card">
            <h4>Cost Control</h4>
            <p>Track budgets, expenses, and profitability.</p>
          </div>

          <div className="why-card">
            <h4>Centralized Data</h4>
            <p>Everything in one secure platform.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="cta-box">
          <h2>Start Your Project With Us</h2>
          <p>
            Let’s turn your vision into reality with smart planning
            and flawless execution.
          </p>
          <button className="primary-btn">Contact Us</button>
        </div>
      </section>

    </div>
  );
};

export default About;
