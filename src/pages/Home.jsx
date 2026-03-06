import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import "aos/dist/aos.css";
import './Home.css';
import './chip-animation.css';
import emailjs from '@emailjs/browser';

import heroBg from "../assets/homepage.jpg";
import civilImg from "../assets/civil.jpg";
import aboutImg from "../assets/about-civil.jpg";
import enquiryImg from "../assets/enquiryimg.jpg";
import projectImg from "../assets/project-tracking.png";
import { Monitor, Smartphone, UserCheck, BarChart3, Settings, Headphones } from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', city: '' });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    emailjs.init('tX9cxueTJuOgEl9Sz');
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
    const trimmedData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      city: formData.city.trim()
    };
    const newErrors = { name: '', phone: '', city: '' };
    if (!trimmedData.name) newErrors.name = 'Please enter a valid value';
    if (!trimmedData.phone) newErrors.phone = 'Please enter a valid value';
    if (!trimmedData.city) newErrors.city = 'Please enter a valid value';
    setErrors(newErrors);
    if (!trimmedData.name || !trimmedData.phone || !trimmedData.city) return;

    setIsSubmitting(true);

    const templateParams = {
      name: trimmedData.name,
      from_name: trimmedData.name,
      email: 'no-email-provided@demo.com',
      from_email: 'no-email-provided@demo.com',
      phone: trimmedData.phone,
      city: trimmedData.city,
      request_type: 'Free Demo',
      to_name: 'Smart Build Admin'
    };

    const SERVICE_ID = 'service_gsd092p';
    const TEMPLATE_ID = 'template_zyusngf';
    const PUBLIC_KEY = 'tX9cxueTJuOgEl9Sz'; // Removed trailing hyphen as it's likely a separator

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage('Demo requested successfully! We will contact you soon.');
        setFormData({ name: '', phone: '', city: '' });
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error('EmailJS Error Detailed:', err);
        setMessage(`Oops! Something went wrong (${err.text || 'Error'}). Please try again.`);
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setMessage('');
  };

  const platformFeatures = [
    { title: "Office Management", desc: "Powerful Web Application for Office Administration", icon: Monitor },
    { title: "Site Engineers", desc: "Smart Mobile App for Real-time Site Updates", icon: Smartphone },
    { title: "Client Access", desc: "Dedicated Mobile App for Client Transparency", icon: UserCheck },
    { title: "Financial Reports", desc: "Real-Time Project Costing and Profit Tracking", icon: BarChart3 },
    { title: "Customizable", desc: "Fully Customizable Modules to fit your workflow", icon: Settings },
    { title: "Support", desc: "Dedicated Technical Support Team for your success", icon: Headphones }
  ];
  const showcaseData = [
    {
      id: "01",
      chip: "ENQUIRY",
      title: "Smart Enquiry Management (CRM)",
      desc: "Manage all your client enquiries in one place and never miss a potential project.",
      img: enquiryImg,
      points: ["Capture enquiries from multiple sources", "Maintain complete client communication history", "Assign enquiries to sales team members", "Track enquiry status (New, Follow-up, Quoted, Won, Lost)", "Set reminders for follow-ups and meetings", "Convert enquiries into projects instantly"],
      reverse: false
    },
    {
      id: "02",
      chip: "QUOTATION",
      title: "Smart Quotation Preparation",
      desc: "Prepare accurate and professional quotations quickly with Smart Build’s intelligent quotation system.",
      img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000",
      points: ["Create detailed quotations with materials, labour, and service costs", "Use pre-saved templates for faster quotation preparation", "Add taxes, discounts, and special terms easily", "Generate professional PDF quotations for clients", " Track quotation approval status", "Convert approved quotations  directly into project records"],
      reverse: true
    },
    {
      id: "03",
      chip: "PROJECT",
      title: "Smart Project Operations Management",
      desc: "Handle every stage of your construction project from planning to completion with full visibility.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      points: ["Track project-wise income and expenses", "Monitor material purchase and usage", "Manage labour work and site activities", "Record daily site updates and progress reports", "Track contractor payments and bills", "Generate project profitability and cost analysis reports"],
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
                  {errors.name && <p className="modern-field-error">{errors.name}</p>}
                </div>
                <div className="modern-input-wrapper">
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={errors.phone ? 'error' : ''} />
                  {errors.phone && <p className="modern-field-error">{errors.phone}</p>}
                </div>
                <div className="modern-input-wrapper">
                  <input type="text" name="city" placeholder="City Name" value={formData.city} onChange={handleChange} className={errors.city ? 'error' : ''} />
                  {errors.city && <p className="modern-field-error">{errors.city}</p>}
                </div>
                <button
                  type="submit"
                  className="modern-btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Get Demo Access'}
                </button>
                {message && <div className="modern-success-msg">{message}</div>}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="home-payroll-text-section modern-payroll-section">
        <div className="modern-max-container">
          <p className="home-payroll-reveal">
            <span className="payroll-line">
              {"Complete Construction Project Management Solution for Builders and Contractors to ".split(" ").map((word, i) => (
                <span key={`l1-${i}`} style={{ "--idx": i }}>{word}{" \u00A0"}</span>
              ))}
            </span>
            <span className="payroll-line">
              {"Track Projects, Manage Accounts, Materials, Labour, and Site Activities in Real Time".split(" ").map((word, i) => (
                <span key={`l2-${i}`} style={{ "--idx": i + 8 }}>{word}{" \u00A0"}</span>
              ))}
            </span>
          </p>
        </div>
      </section>

      <section className="modern-platform-impact">
        <div className="modern-max-container">


          <div className="modern-feature-points-grid">

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
                    <feat.icon size={24} strokeWidth={2} />
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
        <div className="modern-max-container">
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

              <div className="showcase-image-wrap">
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

      <section className="hm-manage-section">
        <div className="about-container">
          <div className="hm-manage-content animate left">
            <span className="section-label">OUR STRENGTH</span>
            <h2>Built for Long-Term Partnership and Continuous Improvement</h2>
            <p>
              At Smart Build Construction Management Application, we believe software should grow along with your business. Our goal is not just to deliver a product, but to build a long-term partnership that continuously improves your project management experience.
            </p>

            <h3 className="hm-benefits-title">Key Benefits</h3>

            <div className="hm-features-grid">
              <div className="hm-manage-feature">
                <div className="hm-manage-feature-icon">
                  <span className="hm-icon-badge">✓</span>
                </div>
                <div className="hm-manage-feature-text">
                  <h4>Ongoing Support</h4>
                  <p>Our dedicated support team is always ready to assist you whenever needed.</p>
                </div>
              </div>

              <div className="hm-manage-feature">
                <div className="hm-manage-feature-icon">
                  <span className="hm-icon-badge">✓</span>
                </div>
                <div className="hm-manage-feature-text">
                  <h4>Regular Updates</h4>
                  <p>Continuous improvements and feature updates to keep your system modern and efficient.</p>
                </div>
              </div>

              <div className="hm-manage-feature">
                <div className="hm-manage-feature-icon">
                  <span className="hm-icon-badge">✓</span>
                </div>
                <div className="hm-manage-feature-text">
                  <h4>Business-Focused Customization</h4>
                  <p>We adapt the software based on your workflow and business requirements.</p>
                </div>
              </div>

              <div className="hm-manage-feature">
                <div className="hm-manage-feature-icon">
                  <span className="hm-icon-badge">✓</span>
                </div>
                <div className="hm-manage-feature-text">
                  <h4>Performance Improvements</h4>
                  <p>Regular optimization to ensure smooth and reliable operations.</p>
                </div>
              </div>

              <div className="hm-manage-feature">
                <div className="hm-manage-feature-icon">
                  <span className="hm-icon-badge">✓</span>
                </div>
                <div className="hm-manage-feature-text">
                  <h4>Client-Driven Enhancements</h4>
                  <p>Your feedback helps us add new features that make the system even better.</p>
                </div>
              </div>

              <div className="hm-manage-feature">
                <div className="hm-manage-feature-icon">
                  <span className="hm-icon-badge">✓</span>
                </div>
                <div className="hm-manage-feature-text">
                  <h4>A Trusted Technology Partner</h4>
                  <p>We are committed to supporting your growth for the long term.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hm-manage-images animate right">
            <div className="hm-manage-img-1">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Financial Analysis" />
            </div>
            <div className="hm-manage-img-2">
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
