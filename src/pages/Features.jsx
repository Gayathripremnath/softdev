import React, { useEffect } from "react";
import { motion } from "framer-motion"; 
import "./Features.css";
import enquiryImg from "../assets/enquiryimg.jpg";
import ledgerimg from "../assets/ledger.jpg";


const featureList = [
  {
    title: "Enquiry Management",
    desc: "Capture and manage all client enquiries in one place. Track follow-ups, assign leads to your sales team, and convert enquiries into successful projects",
    img:enquiryImg
  },
  {
    title: "Quotation Management",
    desc: "Create accurate and professional quotations quickly. Add materials, labour costs,taxes, and terms to generate detailed quotations for your clients.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: " Material Management",
    desc: "Track material purchases, usage, and stock movements. Ensure proper control overmaterial costs and reduce wastage.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: " Project-wise Income & Expense Tracking",
    desc: "Monitor project finances easily by tracking all income and expenses related to each project. Maintain clear financial control and improve profitability",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Project Operations Management",
    desc: "Manage the entire lifecycle of your construction projects—from planning and execution to completion—with real-time updates and progress tracking",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: " Labour & Site Activity Management",
    desc: "LRecord labour work, daily site activities, and contractor details to maintain better control over project execution.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
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
    title: "Reports & Profit Analysis",
    desc: "Generate detailed reports for project costs, income, expenses, and profitability to help you make better business decisions."
  },
  {
    title: "Web & Mobile Access",
    desc: "Access the system anytime from web or mobile devices, allowing your team to stay connected and update project information from anywhere."
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
             Smart Build Construction Management Application is designed to simplify and
streamline every stage of construction project management. Our powerful features help
you manage operations, finances, and project activities efficiently from a single
platform.
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
                src={ledgerimg}
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