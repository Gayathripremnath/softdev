import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import "aos/dist/aos.css";
import './Home.css';
import './chip-animation.css';

import heroBg from "../assets/homepage.jpg";
import civilImg from "../assets/civil.jpg";
import aboutImg from "../assets/about-civil.jpg";
import enquiryImg from "../assets/enquiry.webp";
import projectImg from "../assets/project-tracking.png";
import { title } from 'framer-motion/client';

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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-words');
        }
      });
    }, { threshold: 0.1 });

    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElement = document.querySelector('.home-payroll-reveal');
    if (revealElement) observer.observe(revealElement);
    
    document.querySelectorAll(".animate").forEach((el) => animateObserver.observe(el));

    return () => {
      observer.disconnect();
      animateObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    document.getElementById('request-demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPhoneNumbers = () => {
    document.querySelector('.top-banner')?.scrollIntoView({ behavior: 'smooth' });
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
const showcaseData = [
    {
      id: "01",
      chip: "ENQUIRY",
      title: "Enquiry Management",
      desc: "Capture and manage customer enquiries efficiently with real-time tracking, follow-ups, and centralized communication.",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000", 
      points: ["Real-time enquiry tracking", "Automated follow-up reminders", "Centralized communication hub", "Lead conversion analytics"],
      reverse: false
    },
    {
      id: "02",
      chip: "ISSUE MANAGEMENT",
      title: "Resolve issues faster",
      desc: "Track, assign, and close issues seamlessly with transparent workflows and instant updates across teams.",
      img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000",
      points: ["Issue tracking & assignment", "Transparent workflow management", "Instant team notifications", "Resolution time analytics"],
      reverse: true 
    },
    {
      id: "03",
      chip: "PROJECT",
     title: "project control",
      desc: "Monitor progress, expenses, and timelines from one dashboard to ensure projects stay profitable.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      points: ["Real-time progress monitoring", "Expense tracking & control", "Timeline management", "Profitability analytics"],
      reverse: false
    }
  ];


  return (
    <div className="modern-home-wrapper">

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

      <section className="home-payroll-text-section modern-payroll-section">
        <div className="modern-max-container">
          <p className="home-payroll-reveal">
            {"Smart build payroll is a cutting-edge, cloud based Human Resources Management Software designed to streamline.".split(" ").map((word, i) => (
              <span key={i} style={{ "--idx": i }}>{word}{" \u00A0"}</span>
            ))}
          </p>
        </div>
      </section>

      <section className="modern-platform-impact">
        <div className="modern-max-container">


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

      <section className="modern-showcase-section">
      <div className="modern-max-containers">
        {showcaseData.map((item, index) => (
          <motion.div 
            key={index}
            className={`showcase-row ${item.reverse ? 'reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-step-number">{item.id}</span>

=            <div className="showcase-image-wrap">
              <img src={item.img} alt={item.title} className="showcase-img" />
            </div>

            <div className="showcase-content">
              <div className="modern-chip">{item.chip}</div>
              <h3 className="showcase-title">{item.title}</h3>
              <p className="showcase-desc">{item.desc}</p>
              
              <ul className="showcase-points-list">
                {item.points.map((point, pIdx) => (
                  <motion.li 
                    key={pIdx}
                    className="showcase-point-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.2 + (pIdx * 0.15), 
                      duration: 0.5 
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="blue-check-circle">✓</span>
                    <span className="point-text">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
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
