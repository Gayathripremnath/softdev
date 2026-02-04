import React from "react";
import "./Services.css";
import heroImg from "../assets/civil.jpg";
import img1 from "../assets/about-civil.jpg";
import img2 from "../assets/civil.jpg";
import img3 from "../assets/civil.jpg";


const Services = () => {
  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-text">
          <h1>Comprehensive Construction Services</h1>
          
          <p>
            Smart Build Application delivers professional construction planning,
            inspection, and execution services powered by technology.
          </p>
        </div>

        <div className="services-form">
          <h3>Request a Service</h3>
          <input placeholder="Full Name" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number" />
          <select>
            <option>Select Service</option>
            <option>Project Planning</option>
            <option>Site Inspection</option>
            <option>Cost Estimation</option>
          </select>
          <button>Submit Request</button>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="problems">
        <h2>Common Construction Challenges We Solve</h2>

        <div className="problem-grid">
          <div className="problem-card">Poor Project Planning</div>
          <div className="problem-card">Budget Overruns</div>
          <div className="problem-card">Safety Compliance Issues</div>
          <div className="problem-card">Material Mismanagement</div>
          <div className="problem-card">Timeline Delays</div>
          <div className="problem-card">Lack of Real-Time Insights</div>
        </div>
      </section>

      {/* INSPECTION COVER */}
      <section className="inspection-cover">
  <div className="inspection-text">
    <h2>What Our Services Cover</h2>
    <ul>
      <li>✔ Detailed Site Inspection</li>
      <li>✔ Real-time Progress Monitoring</li>
      <li>✔ Quality & Safety Audits</li>
      <li>✔ Cost & Resource Optimization</li>
      <li>✔ Final Project Reporting</li>
    </ul>
  </div>

  <div className="inspection-image">
    <img src={img1} className="img-primary" alt="Inspection 1" />
    <img src={img2} className="img-secondary" alt="Inspection 2" />
  </div>
</section>

      {/* INCLUDED REPORT */}
      <section className="included">
        <h2>What Is Included in Our Report?</h2>

        <div className="included-grid">
          <div className="included-card">📸 Site Photos & Documentation</div>
          <div className="included-card">📋 Scope of Work Summary</div>
          <div className="included-card">🏗 Construction Details</div>
          <div className="included-card">💰 Cost Estimation</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2>Why Choose Smart Build?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h4>Expert Engineers</h4>
            <p>Certified professionals with industry experience.</p>
          </div>

          <div className="why-card">
            <h4>Tech Driven</h4>
            <p>ERP-powered tracking and insights.</p>
          </div>

          <div className="why-card">
            <h4>No Sales Pressure</h4>
            <p>We guide, not force decisions.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let’s build smarter, faster, and better.</p>
        <button>Get Started</button>
      </section>

    </div>
  );
};

export default Services;
