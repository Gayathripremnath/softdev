import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import "aos/dist/aos.css";
import './Home.css';
import './chip-animation.css';

// Assets
import heroBg from "../assets/homepage.jpg";
import civilImg from "../assets/civil.jpg";
import aboutImg from "../assets/about-civil.jpg";
import enquiryImg from "../assets/enquiry.webp";
import projectImg from "../assets/project-tracking.png";

const Home = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', city: '' });
  const [message, setMessage] = useState('');

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true, offset: 50 });

    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Custom observer for the word reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-words');
        }
      });
    }, { threshold: 0.1 });

    const revealElement = document.querySelector('.home-payroll-reveal');
    if (revealElement) observer.observe(revealElement);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    document.getElementById('request-demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { name: '', phone: '', city: '' };
    if (!formData.name) newErrors.name = 'Required';
    if (!formData.phone) newErrors.phone = 'Required';
    if (!formData.city) newErrors.city = 'Required';
    setErrors(newErrors);
    if (!formData.name || !formData.phone || !formData.city) return;
    setMessage('Demo requested successfully!');
    setTimeout(() => setMessage(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setMessage('');
  };

  const platformFeatures = [
    { title: "Office Management", desc: "Powerful Web Application for Office Administration", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" },
    { title: "Site Engineers", desc: "Smart Mobile App for Real-time Site Updates", img: "https://images.unsplash.com/photo-1541888082425-eb1b8493cf4f?auto=format&fit=crop&q=80&w=800" },
    { title: "Client Access", desc: "Dedicated Mobile App for Client Transparency", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { title: "Financial Reports", desc: "Real-Time Project Costing and Profit Tracking", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" },
    { title: "Customizable", desc: "Fully Customizable Modules to fit your workflow", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
    { title: "Support", desc: "Dedicated Technical Support Team for your success", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" }
  ];



  return (
    <div className="modern-home-wrapper">

      {/* ── 1. MODERN SPLIT HERO ── */}
      <section className="modern-hero">
        <div className="modern-hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="modern-hero-gradient-overlay"></div>

        <div className="modern-hero-container">
          <motion.div
            className="modern-hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="modern-chip">
              {"The Complete Digital Solution".split("").map((letter, i) => (
                <span key={i} className="animated-chip-letter" style={{ "--delay": `${i * 0.05}s` }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
            <h1 className="modern-h1">
              Smart Build – The Complete Digital Solution for <span className="modern-text-gradient">Construction Management</span>
            </h1>
            <p className="modern-lead">
              A comprehensive platform giving Builders, Contractors, Architects, and Developers complete real-time control to scale operations instantly seamlessly.
            </p>
            <div className="modern-hero-buttons">
              <button className="modern-btn-primary" onClick={scrollToForm}>Explore Platform</button>
            </div>
          </motion.div>

          <motion.div
            id="request-demo-section"
            className="modern-hero-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="modern-glass-card form-card">
              <div className="form-header">
                <h2>Request Free Demo</h2>
                <p>Experience the power of Smart Build</p>
              </div>
              <form onSubmit={handleSubmit} className="modern-form">
                <div className="modern-input-wrapper">
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                </div>
                <div className="modern-input-wrapper">
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={errors.phone ? 'error' : ''} />
                </div>
                <div className="modern-input-wrapper">
                  <input type="text" name="city" placeholder="City Name" value={formData.city} onChange={handleChange} className={errors.city ? 'error' : ''} />
                </div>
                <button type="submit" className="modern-btn-submit">Get Demo Access</button>
                {message && <div className="modern-success-msg">{message}</div>}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. PAYROLL KINETIC TYPOGRAPHY ── */}
      <section className="home-payroll-text-section modern-payroll-section">
        <div className="modern-max-container">
          <p className="home-payroll-reveal">
            {"Smart build payroll is a cutting-edge, cloud based Human Resources Management Software designed to streamline.".split(" ").map((word, i) => (
              <span key={i} style={{ "--idx": i }}>{word}{" \u00A0"}</span>
            ))}
          </p>
        </div>
      </section>

      {/* ── 3. PLATFORM CAPABILITIES & IMPACT ── */}
      <section className="modern-platform-impact">
        <div className="modern-max-container">

          {/* Top Bar: Impact & Global Presence */}
          <motion.div
            className="modern-impact-bar"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="impact-stat">
              <div className="stat-circle">
                <span className="stat-num">10+</span>
                <span className="stat-unit">Years</span>
              </div>
              <div className="stat-text">
                <strong>Industry Experience</strong>
                <span>Serving global clients since 2014</span>
              </div>
            </div>

            <div className="impact-content">
              <div className="modern-chip">Global & Digital</div>
              <h2 className="impact-title">Transforming Traditional Workflows</h2>
              <p className="impact-desc">
                With over 10 years of successful industry experience and a strong presence serving clients worldwide, Smart Build transforms traditional construction workflows into a fully digital, paperless, and real-time management system.
              </p>
            </div>
          </motion.div>

          {/* Bottom Grid: Platform Features as Points */}
          <div className="modern-feature-points-grid">
            <div className="points-header">
              <span className="points-badge">PLATFORM FEATURES</span>
              <h3>Our platform includes</h3>
            </div>

            <div className="points-grid">
              {platformFeatures.map((feat, idx) => (
                <motion.div
                  key={idx}
                  className="point-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="point-icon-sm">
                    <img src={feat.img} alt="" />
                  </div>
                  <div className="point-info">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 3.C MODERN SHOWCASE SECTION ── */}
      <section className="modern-showcase-section">
        <div className="modern-max-container">
          <div className="showcase-row">
            <div className="showcase-image-wrap">
              <img src={enquiryImg} alt="Smart enquiry management" className="showcase-img" />
            </div>
            <div className="showcase-content">
              <div className="modern-chip">ENQUIRY</div>
              <h3 className="showcase-title">Smart enquiry management</h3>
              <p className="showcase-desc">Capture and manage customer enquiries efficiently with real-time tracking, follow-ups, and centralized communication.</p>
            </div>
          </div>
          <div className="showcase-row reverse">
            <div className="showcase-image-wrap">
              <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000" alt="Resolve issues faster" className="showcase-img" />
            </div>
            <div className="showcase-content">
              <div className="modern-chip">ISSUE MANAGEMENT</div>
              <h3 className="showcase-title">Resolve issues faster</h3>
              <p className="showcase-desc">Track, assign, and close issues seamlessly with transparent workflows and instant updates across teams.</p>
            </div>
          </div>
          <div className="showcase-row">
            <div className="showcase-image-wrap">
              <img src={projectImg} alt="Complete project control" className="showcase-img" />
            </div>
            <div className="showcase-content">
              <div className="modern-chip">PROJECT</div>
              <h3 className="showcase-title">Complete project control</h3>
              <p className="showcase-desc">Monitor progress, expenses, and timelines from one dashboard to ensure projects stay profitable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3.D HORIZONTAL CONVERSION BLADE ── */}
      <section className="modern-demo-section">
        <div className="modern-max-container">
          <div className="demo-grid-split">
            {/* Left: Headline & Context */}
            <motion.div
              className="demo-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="modern-chip">Get Started Today</div>
              <h2 className="demo-section-title">Ready to Experience <br /><span className="modern-text-gradient">Smart Build?</span></h2>
            </motion.div>

            {/* Right: Benefits & Active CTA */}
            <motion.div
              className="demo-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="demo-section-p">
                Join hundreds of construction firms worldwide that have transformed their project management. Request a free demo today.
              </p>

              <div className="demo-inline-features">
                <div className="demo-tick-marker"><span>✓</span> Walkthrough</div>
                <div className="demo-tick-marker"><span>✓</span> Full Access</div>
                <div className="demo-tick-marker"><span>✓</span> 24/7 Support</div>
              </div>

              <div className="demo-action-area">
                <button className="modern-btn-primary" onClick={scrollToForm}>Schedule Your Demo Today</button>
                <span className="demo-sub-text">Active Technical Support Team</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. MODERN FULL-BLEED CTA ── */}
      <section className="modern-cta-bleed">
        <div className="cta-bleed-image" style={{ backgroundImage: `url(${aboutImg})` }}></div>
        <div className="cta-bleed-gradient"></div>
        <div className="modern-max-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-bleed-card"
          >
            <h2>Anytime, Anywhere Access</h2>
            <p>
              From enquiry to project completion and final balance sheet, Smart Build manages everything in one integrated system — accessible anytime, anywhere through your browser.
            </p>
            <button className="modern-btn-dark" onClick={scrollToForm}>Start Your Digital Journey</button>
          </motion.div>
        </div>
      </section>

      {/* ── SCROLL TO TOP ── */}
      <motion.div
        className={`scroll-to-top-btn ${showScroll ? 'visible' : ''}`}
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScroll ? 1 : 0, scale: showScroll ? 1 : 0.5 }}
        whileHover={{ scale: 1.1, backgroundColor: '#0a79c5' }}
      >
        <span className="scroll-arrow">↑</span>
      </motion.div>

    </div>
  );
};

export default Home;
