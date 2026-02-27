import React, { useEffect } from "react";
import "./Features.css";

const featureList = [
  {
    title: "Project Lifecycle Visibility",
    desc: "Track every stage from enquiry to handover with clear ownership and real-time status.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Live Cost Intelligence",
    desc: "Monitor budget versus actual spend continuously and prevent unnoticed cost leakage.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Material & Inventory Control",
    desc: "Manage inward/outward movement, stock alerts, and consumption across sites.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Labour & Contractor Monitoring",
    desc: "Capture attendance, productivity, and contractor progress with auditable records.",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Finance & Reporting",
    desc: "Generate project-ledgers, profitability views, and one-click management reports.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Client Transparency",
    desc: "Share controlled updates and milestone summaries through a dedicated client view.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
  }
];

const flow = [
  { step: "01", title: "Capture", desc: "Collect project, cost, and site data in one structure." },
  { step: "02", title: "Connect", desc: "Align office and site teams around a shared workflow." },
  { step: "03", title: "Control", desc: "Act quickly with live insights before delays escalate." }
];

const outcomes = [
  { value: "38%", label: "Lower Cost Leakage" },
  { value: "2.4x", label: "Faster Approvals" },
  { value: "92%", label: "On-Time Milestones" },
  { value: "100%", label: "Audit Ready Logs" }
];

const workModules = [
  "Daily progress updates with date/location proof",
  "Material request, issue, and stock reconciliation",
  "Labour attendance and subcontractor billing",
  "Project-wise finance, P&L, and live cash view"
];

const controlCards = [
  {
    title: "Site Command Center",
    desc: "View all active projects, pending issues, and blockers from one operational board."
  },
  {
    title: "Management Snapshot",
    desc: "Get daily executive summaries on progress, risk, and cost variance across teams."
  }
];

const Features = () => {
  useEffect(() => {
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
            <h1>Modern Construction ERP Built For Speed, Control, And Profit</h1>
            <p className="fx-subtitle">
              One connected workflow for enquiry, site execution, inventory, labour, and finance.
              Your team updates once, leadership gets complete visibility in real time.
            </p>
            <div className="fx-hero-actions">
              <a href="/" className="fx-btn fx-btn-primary">Request Demo</a>
              <a href="/services" className="fx-btn fx-btn-ghost">Explore Services</a>
            </div>
          </div>

          <div className="fx-hero-side">
            <div className="fx-hero-card fx-scroll" style={{ "--sd": "160ms" }}>
              <h3>Live Operations Pulse</h3>
              <ul>
                <li><span className="dot"></span> 14 Projects active this week</li>
                <li><span className="dot"></span> 27 Pending approvals synced</li>
                <li><span className="dot"></span> 99.1% data capture compliance</li>
              </ul>
            </div>
            <div className="fx-hero-card fx-card-dark fx-scroll" style={{ "--sd": "240ms" }}>
              <p>Decision-ready dashboard for owners, PMs, and site engineers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fx-proof-section">
        <div className="fx-wrap">
          <div className="fx-proof-grid">
            {outcomes.map((item, index) => (
              <article className="fx-proof-item fx-scroll" style={{ "--sd": `${80 + index * 90}ms` }} key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fx-grid-section">
        <div className="fx-wrap">
          <div className="fx-section-head fx-scroll" style={{ "--sd": "70ms" }}>
            <p className="fx-kicker">CORE CAPABILITIES</p>
            <h2>Everything Your Team Needs In One Platform</h2>
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

      <section className="fx-ops-section">
        <div className="fx-wrap fx-ops-layout">
          <div className="fx-ops-content fx-scroll" style={{ "--sd": "80ms" }}>
            <p className="fx-kicker">OPERATIONS TEMPLATE</p>
            <h2>Built For Office, Site, And Management In One Flow</h2>
            <p className="fx-subtitle">
              Replace fragmented tools with one connected template where execution teams update once
              and leadership gets instant clarity.
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
                alt="Construction planning and execution"
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
            <h2>How Smart Build Moves Work Forward</h2>
          </div>
          <div className="fx-flow-grid">
            {flow.map((item, index) => (
              <article className="fx-flow-item fx-scroll" style={{ "--sd": `${110 + index * 120}ms` }} key={item.step}>
                <span>{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
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
