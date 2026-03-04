import React, { useEffect } from "react";
import { motion } from "framer-motion"; 
import "./Features.css";

const featureList = [
  {
    title: "Enquiry Management",
    desc: "Enquiry upload, customer details entry, follow-up tracking, status monitoring, and conversion management.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Quotation Management",
    desc: "Prepare professional quotations with item-wise cost calculation, approval tracking, and version control.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Financial Control",
    desc: "Invoice creation, security deposit management, creditors and debtors tracking, balance sheet generation, and extra expense management.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Planning & Documentation",
    desc: "BOQ management, project schedule monitoring, daily task assignment, and photo documentation.",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Purchase & Stock Control",
    desc: "Purchase request, purchase order, purchase bill entry, stock management, and stock transfer.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Workforce & Resource Management",
    desc: "Labour management, salary management, subcontract management, tools management, and vehicle management.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
  }
];



const outcomes = [
  { value: "100%", label: "End-to-End Workflow" },
  { value: "0", label: "Duplicate Entry After Approval" },
  { value: "1", label: "Centralized Data System" },
  { value: "24/7", label: "Browser Report Access" }
];

const workModules = [
  "Cash Ledger", "Bank Ledger", "Vendor Ledger", "Labour Ledger",
  "HR Ledger", "Vehicle Ledger", "Client Ledger", "Subcontract Ledger"
];

const controlCards = [
  {
    title: "Additional Reports",
    desc: "Daily Report and Daily Transaction Report are available instantly for management."
  },
  {
    title: "Centralized Financial Visibility",
    desc: "All project data is centralized and automatically reflected in financial reports."
  }
];

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const items = document.querySelectorAll(".fx-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fx-page">
      <section className="fx-hero">
        <div className="fx-wrap fx-hero-grid">
          <div className="fx-hero-main fx-scroll" style={{ "--sd": "60ms" }}>
            <p className="fx-kicker">SMART BUILD FEATURES</p>
            <h1>Complete Enquiry to Project Management Workflow</h1> </div>
            <div className="sub-fx">
            <p className="fx-subtitle">
              Smart Build covers the full business cycle from enquiry to final balance sheet,
              with centralized project, financial, workforce, and reporting control.
            </p>
           </div>
         
        </div>
      </section>


      <section className="fx-grid-section">
        <div className="fx-wrap">
          <div className="fx-section-head fx-scroll" style={{ "--sd": "70ms" }}>
          </div>
          <div className="fx-grid">
            {featureList.map((item, index) => (
              <article className="fx-item" key={item.title}>
                <div className="fx-item-image fx-scroll" style={{ "--sd": `${90 + index * 95}ms` }}>
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className="fx-item-body fx-scroll" style={{ "--sd": `${130 + index * 95}ms` }}>
                  <span className="fx-item-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEDGER SECTION */}
      <section className="fx-ops-section">
        <div className="fx-wrap fx-ops-layout">
          <div className="fx-ops-content fx-scroll" style={{ "--sd": "80ms" }}>
            <h2>Ledger & Financial Modules</h2>
            <p className="fx-subtitle">
              Smart Build provides complete accounting visibility through centralized ledgers
              and instantly available management reports.
            </p>
            <ul className="fx-ops-list">
              {workModules.map((item) => (
                <li key={item}>
                  <span className="fx-check">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="fx-ops-panels">
            <article className="fx-ops-image-card fx-scroll" style={{ "--sd": "150ms" }}>
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Construction planning"
                loading="lazy"
              />
            </article>
            {controlCards.map((item, index) => (
              <article className="fx-ops-card fx-scroll" style={{ "--sd": `${210 + index * 90}ms` }} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fx-flow-section">
        <div className="fx-wrap">
          <div className="fx-section-head fx-scroll" style={{ "--sd": "70ms" }}>
            <p className="fx-kicker">DELIVERY FLOW</p>
            <h2>How Smart Build Handles the Complete Lifecycle</h2>
          </div>

          <div className="fx-proof-grid" style={{ marginBottom: '60px' }}>
            {outcomes.map((item, index) => (
              <article className="fx-proof-item fx-scroll" style={{ "--sd": `${100 + index * 100}ms` }} key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>

      
        </div>
      </section>

      <section className="fx-cta-section">
        <div className="fx-wrap fx-cta-box fx-scroll" style={{ "--sd": "120ms" }}>
          <h2>Need A Demo Built Around Your Workflow?</h2>
          <p>We configure Smart Build around your process so your team adopts faster.</p>
          <a href="/" className="fx-btn fx-btn-primary">Request Demo</a>
        </div>
      </section>
    </div>
  );
};

export default Features;