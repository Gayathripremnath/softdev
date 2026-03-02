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
            <h2>Smart Build: Digital Construction Management Platform</h2>
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

            <div className="contact-signature-row">
              <div className="contact-box-mini">
                <div className="call-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                  </svg>
                </div>
                <div className="call-text">
                  <span>Our approach</span>
                  <strong>Technology that adapts to your business</strong>
                </div>
              </div>
              <div className="signature-box">
                <span className="signature-text" style={{ fontFamily: "auto", fontWeight: "bold", fontSize: "1.2rem" }}>
                  Smart Build Admin
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section animate up">
        <div className="who-modern-grid">
          <div className="who-modern-intro">
            <span className="section-label who-modern-label">WHO WE ARE</span>
            <h2>Software Professionals + Construction Workflow Specialists</h2>
            <p className="team-who-text">
              We are a dedicated team of software professionals and construction workflow specialists
              who understand both technology and field-level operations.
            </p>
          </div>

          <div className="who-modern-strength">
            <h3 className="team-strength-title">Our Strength Lies in Combining</h3>
            <ul className="team-strength-list">
              <li>
                <span className="strength-index">01</span>
                <span className="strength-text">Practical construction knowledge</span>
              </li>
              <li>
                <span className="strength-index">02</span>
                <span className="strength-text">Strong accounting and financial systems</span>
              </li>
              <li>
                <span className="strength-index">03</span>
                <span className="strength-text">Advanced web and mobile technology</span>
              </li>
              <li>
                <span className="strength-index">04</span>
                <span className="strength-text">Custom development expertise</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="global-manage-section">
        <div className="about-container">
          <div className="manage-content animate left">
            <span className="section-label">OUR STRENGTH</span>
            <h2>Built for Long-Term Partnership and Continuous Improvement</h2>
            <p>
              We do not just sell software - we provide a long-term technology partnership.
              Any modification or new module requirement can be developed as per your company's process.
            </p>

            <div className="manage-feature">
              <div className="manage-feature-icon">
                <span className="icon-badge">+</span>
              </div>
              <div className="manage-feature-text">
                <h4>Dedicated Support Team</h4>
                <p>Responsive support for implementation, adoption, and ongoing operations.</p>
              </div>
            </div>

            <div className="manage-feature">
              <div className="manage-feature-icon">
                <span className="icon-badge">+</span>
              </div>
              <div className="manage-feature-text">
                <h4>Continuous Software Improvements</h4>
                <p>Regular updates driven by evolving industry needs and real user feedback.</p>
              </div>
            </div>
          </div>

          <div className="manage-images animate right">
            <div className="manage-img-1">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Financial Analysis" />
            </div>
            <div className="manage-img-2">
              <img src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=600&auto=format&fit=crop&q=60" alt="Data Dashboard" />
            </div>
          </div>
        </div>
      </section>

      <section className="compact-differentiators-section animate up">
        <div className="about-container">
          <div className="compact-header">
            <div className="modern-chip">WHAT MAKES US DIFFERENT</div>
            <h2>Trusted, Customizable, and <span className="gradient-text">Fast to Implement</span></h2>
            <p>Smart Build is fully customizable to match your workflow and designed to improve profitability, transparency, and decision-making speed.</p>
          </div>
         
            </div>
             <div className="moving-points">
            <div className="moving-text">
              {"10+ Years industry experience • Global Client Base trusted across regions • Fully Customizable software platform • Fast Implementation for quick deployment • Dedicated Support for ongoing success • Continuous Updates based on real feedback • ".split(" ").map((word, i) => (
                <span key={i} className="moving-word">{word} </span>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
