import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const constructionIcons = useMemo(
    () => [
      { icon: "🏗️", x: "10%", y: "15%", speed: 1.2 },
      { icon: "🚧", x: "85%", y: "10%", speed: 0.8 },
      { icon: "🧱", x: "15%", y: "45%", speed: 1.5 },
      { icon: "🔨", x: "75%", y: "35%", speed: 1.0 },
      { icon: "🏢", x: "25%", y: "65%", speed: 0.7 },
      { icon: "👷", x: "80%", y: "75%", speed: 1.3 }
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <div className="about-blueprint-bg">
        <div className="blueprint-grid"></div>

        {constructionIcons.map((item, i) => (
          <motion.div
            key={i}
            className="parallax-icon"
            animate={{
              x: mousePos.x * item.speed,
              y: mousePos.y * item.speed
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            style={{
              position: "fixed",
              left: item.x,
              top: item.y,
              fontSize: "1.5rem",
              opacity: 0.12,
              pointerEvents: "none",
              zIndex: 0
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <section className="about-header-section animate fadeIn">
        <div className="header-image-container"></div>
      </section>

      <section className="main-about-section">
        <div className="about-container">
          <div className="about-images-grid animate left">
            <div className="small-images-wrapper">
              <div className="experience-badge">
                <div className="badge-number">10+</div>
                <div className="badge-label">Years of experience</div>
              </div>
              <div className="small-image small-1">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop"
                  alt="Site Engineer with Tablet"
                />
              </div>
            </div>
          </div>

          <div className="about-content-main animate right">
            <span className="section-label">
              {"ABOUT SMART BUILD".split("").map((letter, i) => (
                <span key={i} className="animated-letter" style={{ "--delay": `${i * 0.1}s` }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
            <h2 className="about-heading-main">Digital <span className="text-gradient"> Construction Management </span>Platform
            </h2>
            <p>
              Smart Build was launched 10 years ago with a clear vision: to simplify construction
              management using smart digital technology. We understood the common problems in
              the construction industry - scattered records, manual tracking, cost overruns, delayed
              reporting, and communication gaps between office and site.
            </p>
            <p>
              To solve these challenges, we developed a complete end-to-end construction management
              platform that centralizes operations, financial control, workforce management, and reporting
              into a single system. Over the years, we have continuously upgraded our software based on
              real user feedback and evolving industry needs. Today, Smart Build is trusted by builders,
              contractors, and architects across multiple regions.
            </p>

            <ul className="features-checklist">
              <li><span className="check-icon">+</span> Reduce paperwork and manual dependency</li>
              <li><span className="check-icon">+</span> Improve financial transparency</li>
              <li><span className="check-icon">+</span> Enable faster decision-making</li>
              <li><span className="check-icon">+</span> Increase project profitability</li>
              <li><span className="check-icon">+</span> Digitize construction operations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="team-section animate up">
        <div className="who-modern-grid">
          <div className="who-modern-intro">
            <span className="section-label who-modern-label">WHO WE ARE</span>
            <h2>Smart Build Construction Management Application</h2>
            <p className="team-who-text">
              Smart Build Construction Management Application is a dedicated construction
              management solution developed to simplify and digitalize project operations for the
              construction industry.
            </p>
            <p className="team-who-text">
              We are a team focused on delivering smart technology that helps builders,
              contractors, architects, and construction companies manage their projects
              efficiently. With more than 10 years of industry experience, we understand the real
              challenges faced in construction project management.
            </p>
            <p className="team-who-text">
              Our platform is designed to provide complete control over project operations,
              including enquiry management, quotation preparation, project execution, and project-wise
              income and expense tracking.
            </p>
            <p className="team-who-text">
              What makes us different is our commitment to customization, continuous
              improvement, and long-term client relationships. We work closely with our clients to
              adapt the system according to their business processes, ensuring that the software
              truly supports their daily operations.
            </p>
            <p className="team-who-text">
              Our goal is to help construction companies save time, reduce operational
              complexity, and improve project profitability through a reliable and easy-to-use
              digital solution.
            </p>
          </div>

          <div className="who-modern-strength">
            <h3 className="team-strength-title">Why Choose Us</h3>
            <p className="team-who-text">
              Choosing Smart Build Construction Management Application means choosing a
              reliable technology partner that understands the construction industry and its
              challenges.
            </p>
            <ul className="team-strength-list">
              <li>
                <span className="strength-index">01</span>
                <span className="strength-text">Industry-Focused Solutions</span>
              </li>
              <li>
                <span className="strength-index">02</span>
                <span className="strength-text">Complete Project Management</span>
              </li>
              <li>
                <span className="strength-index">03</span>
                <span className="strength-text">10+ Years of Experience</span>
              </li>
              <li>
                <span className="strength-index">04</span>
                <span className="strength-text">Fully Customizable System</span>
              </li>
              <li>
                <span className="strength-index">05</span>
                <span className="strength-text">Real-Time Reports & Insights</span>
              </li>
              <li>
                <span className="strength-index">06</span>
                <span className="strength-text">Dedicated Support</span>
              </li>
              <li>
                <span className="strength-index">07</span>
                <span className="strength-text">Continuous Updates & Improvements</span>
              </li>
            </ul>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
