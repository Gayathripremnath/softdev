import React from "react";
import "./Services.css";
import img1 from "../assets/about-civil.jpg";
import img2 from "../assets/civil.jpg";

const challenges = [
  "Poor Project Planning",
  "Budget Overruns",
  "Safety Compliance Issues",
  "Material Mismanagement",
  "Timeline Delays",
  "Lack of Real-Time Insights"
];

const reportItems = [
  "Site Photos and Documentation",
  "Scope of Work Summary",
  "Construction Detail Notes",
  "Cost Estimation"
];

const Services = () => {
  return (
    <div className="sv-page">
      <section className="sv-hero">
        <div className="sv-wrap sv-hero-layout">
          <div className="sv-hero-copy">
            <p className="sv-kicker">SMART BUILD SERVICES</p>
            <h1>Comprehensive Construction Services</h1>
            <p>
              Professional construction planning, inspection, and execution services powered by technology.
            </p>
          </div>

          <div className="sv-form">
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
        </div>
      </section>

      <section className="sv-section">
        <div className="sv-wrap">
          <h2>Common Construction Challenges We Solve</h2>
          <div className="sv-challenge-grid">
            {challenges.map((item) => (
              <div className="sv-challenge-item" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-section">
        <div className="sv-wrap sv-inspection-layout">
          <div className="sv-inspection-copy">
            <h2>What Our Services Cover</h2>
            <ul>
              <li>Detailed Site Inspection</li>
              <li>Real-time Progress Monitoring</li>
              <li>Quality and Safety Audits</li>
              <li>Cost and Resource Optimization</li>
              <li>Final Project Reporting</li>
            </ul>
          </div>

          <div className="sv-inspection-media">
            <img src={img1} className="sv-media-primary" alt="Inspection primary" />
            <img src={img2} className="sv-media-secondary" alt="Inspection secondary" />
          </div>
        </div>
      </section>

      <section className="sv-section sv-report-section">
        <div className="sv-wrap">
          <h2>What Is Included in Our Report?</h2>
          <div className="sv-report-grid">
            {reportItems.map((item) => (
              <div className="sv-report-item" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-cta">
        <div className="sv-wrap sv-cta-box">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's build smarter, faster, and better.</p>
          <button>Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
