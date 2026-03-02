import React, { useEffect, useRef } from "react";
import "./Services.css";
import imgHero from "../assets/service_hero.png";
import imgImplementation from "../assets/service_implementation.png";
import imgCustomization from "../assets/service_customization.png";
import imgTraining from "../assets/service_training.png";
import imgSupport from "../assets/service_support.png";

/* ── Icon components ─────────────────────────────── */
const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const IconPuzzle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.611a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconHeadset = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Service data ──────────────────────────────────── */
const services = [
  {
    id: "implementation",
    icon: <IconRocket />,
    title: "Complete Software Implementation",
    tagline: "Launch with Confidence",
    description:
      "We provide full installation, configuration, and deployment of Smart Build based on your organization structure, project type, and accounting workflow. From initial setup to live deployment — we handle every detail so you can focus on building.",
    points: [
      "Full system installation & configuration",
      "Project-type specific deployment",
      "Accounting workflow alignment",
      "Organization structure mapping",
      "Go-live support & validation",
    ],
    image: imgImplementation,
    direction: "left",
    accent: "#0ea5e9",
    accentGlow: "rgba(14, 165, 233, 0.15)",
  },
  {
    id: "customization",
    icon: <IconPuzzle />,
    title: "Customization & Module Development",
    tagline: "Built Around Your Rules",
    description:
      "Every construction company operates differently. Smart Build is fully customizable — your business process, your rules, our software adapts.",
    points: [
      "Modify existing modules",
      "Add new features & capabilities",
      "Create custom reports & dashboards",
      "Integrate approval workflows",
      "Adapt accounting structures",
    ],
    image: imgCustomization,
    direction: "right",
    accent: "#8b5cf6",
    accentGlow: "rgba(139, 92, 246, 0.15)",
  },
  {
    id: "training",
    icon: <IconUsers />,
    title: "Training & Onboarding",
    tagline: "Empower Your Team",
    description:
      "We provide direct, role-based training to ensure your team uses the system efficiently from day one. Every role gets tailored guidance.",
    points: [
      "Office Admin Staff",
      "Accounts Team",
      "Project Managers",
      "Site Engineers",
      "Management Team",
    ],
    image: imgTraining,
    direction: "left",
    accent: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "support",
    icon: <IconHeadset />,
    title: "Dedicated Technical Support",
    tagline: "Always By Your Side",
    description:
      "Our support team is always available to assist you. We believe strong support is the backbone of long-term customer satisfaction.",
    points: [
      "Technical issues resolution",
      "Workflow guidance & optimization",
      "Report clarification & training",
      "System updates & patches",
      "Performance optimization",
    ],
    image: imgSupport,
    direction: "right",
    accent: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.15)",
  },
];

/* ── Stats ─────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "10+", label: "Years Experience" },
];

/* ── Component ─────────────────────────────────────── */
const Services = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    /* ---- Intersection-based scroll reveal ---- */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sv2-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll(".sv2-anim")
      .forEach((el) => observer.observe(el));

    /* ---- parallax tilt on hero image ---- */
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroImg = document.querySelector(".sv2-hero-img-wrap");
      if (heroImg) {
        const y = scrollY * 0.28;
        heroImg.style.transform = `translateY(${y}px)`;
      }

      /* floating particles parallax */
      document.querySelectorAll(".sv2-particle").forEach((p, i) => {
        const speed = 0.08 + i * 0.04;
        p.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sv2-page">
      {/* ===== FLOATING PARTICLES ===== */}
      <div className="sv2-particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="sv2-particle" style={{ "--pi": i }} />
        ))}
      </div>

      {/* ===== HERO ===== */}
      <section className="sv2-hero" ref={heroRef}>
        <div className="sv2-hero-bg" aria-hidden="true">
          <img src={imgHero} alt="" className="sv2-hero-bg-img" />
          <div className="sv2-hero-overlay" />
        </div>

        <div className="sv2-container sv2-hero-inner">
          <div className="sv2-hero-content sv2-anim sv2-anim-up">
            <span className="sv2-badge">
              <span className="sv2-badge-dot" />
              Smart Build Services
            </span>
            <h1 className="sv2-hero-title">
              We Don't Just Build Software,
              <span className="sv2-gradient-text"> We Build Success </span>
              For Your Business
            </h1>
            <p className="sv2-hero-desc">
              We don't just deploy software. We align implementation,
              customization, training, and support with how your teams execute
              projects — in the field and at the office.
            </p>
            <div className="sv2-hero-actions">
              <button className="sv2-btn sv2-btn-primary">
                Schedule a Call
                <span className="sv2-btn-icon"><IconArrow /></span>
              </button>
              <button className="sv2-btn sv2-btn-ghost">
                Explore Services
              </button>
            </div>
          </div>

          <div className="sv2-hero-img-wrap sv2-anim sv2-anim-right">
            <div className="sv2-hero-img-glow" />
            <img
              src={imgImplementation}
              alt="Smart Build implementation"
              className="sv2-hero-img"
            />
            {/* floating stat cards */}
            <div className="sv2-float-card sv2-float-card-1 sv2-anim sv2-anim-scale">
              <strong>100%</strong>
              <span>Workflow-Oriented</span>
            </div>
            <div className="sv2-float-card sv2-float-card-2 sv2-anim sv2-anim-scale">
              <strong>4</strong>
              <span>Core Service Tracks</span>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="sv2-scroll-hint sv2-anim sv2-anim-up">
          <div className="sv2-scroll-mouse">
            <div className="sv2-scroll-wheel" />
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="sv2-stats">
        <div className="sv2-container sv2-stats-grid">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="sv2-stat sv2-anim sv2-anim-up"
              style={{ "--delay": `${i * 100}ms` }}
            >
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICE SECTIONS ===== */}
      {services.map((svc, idx) => (
        <section
          key={svc.id}
          className={`sv2-service sv2-service-${svc.direction}`}
          id={svc.id}
        >
          <div className="sv2-container sv2-service-grid">
            {/* IMAGE COLUMN */}
            <div
              className={`sv2-service-media sv2-anim sv2-anim-${svc.direction}`}
            >
              <div
                className="sv2-service-img-glow"
                style={{ background: svc.accentGlow }}
              />
              <img
                src={svc.image}
                alt={svc.title}
                className="sv2-service-img"
              />
            </div>

            {/* CONTENT COLUMN */}
            <div className="sv2-service-content sv2-anim sv2-anim-up">
              <div className="sv2-service-icon" style={{ color: svc.accent }}>
                {svc.icon}
              </div>
              <span className="sv2-service-num" aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="sv2-service-tag" style={{ color: svc.accent }}>
                {svc.tagline}
              </p>
              <h2 className="sv2-service-title">{svc.title}</h2>
              <p className="sv2-service-desc">{svc.description}</p>

              <ul className="sv2-service-list">
                {svc.points.map((pt, pi) => (
                  <li
                    key={pt}
                    className="sv2-anim sv2-anim-up"
                    style={{ "--delay": `${pi * 80}ms` }}
                  >
                    <span
                      className="sv2-check"
                      style={{ background: svc.accent }}
                    >
                      <IconCheck />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* decorative divider */}
          {idx < services.length - 1 && (
            <div className="sv2-divider" aria-hidden="true">
              <span />
            </div>
          )}
        </section>
      ))}

      {/* ===== CTA ===== */}
      <section className="sv2-cta sv2-anim sv2-anim-up">
        <div className="sv2-container">
          <div className="sv2-cta-box">
            {/* animated background orbs */}
            <div className="sv2-cta-orb sv2-cta-orb-1" aria-hidden="true" />
            <div className="sv2-cta-orb sv2-cta-orb-2" aria-hidden="true" />
            <div className="sv2-cta-orb sv2-cta-orb-3" aria-hidden="true" />
            <div className="sv2-cta-grid" aria-hidden="true" />

            <div className="sv2-cta-content">
              <span className="sv2-badge sv2-badge-light">
                <span className="sv2-badge-dot" />
                Let's Get Started
              </span>
              <h2>
                Ready to Transform
                <span className="sv2-gradient-text"> Your Construction </span>
                Workflow?
              </h2>
              <p>
                We design a rollout plan based on your team size, process maturity,
                and project type — delivering solutions that scale with your ambitions.
              </p>
              <div className="sv2-cta-actions">
                <button className="sv2-btn sv2-btn-cta-primary">
                  Schedule a Service Call
                  <span className="sv2-btn-icon"><IconArrow /></span>
                </button>
                <button className="sv2-btn sv2-btn-cta-outline">
                  Talk to Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
