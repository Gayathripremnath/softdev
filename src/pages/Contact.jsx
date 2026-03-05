import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Send, X, ArrowUpRight, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    emailjs.init('tX9cxueTJuOgEl9Sz');
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "" });
  const [popupPhone, setPopupPhone] = useState("");

  const branches = [
    { id: "01", region: "India (Kerala)", name: "Genova Technologies Pvt Ltd", nums: ["+91 7559080005", "+91 8714359715"] },
    { id: "02", region: "UAE", name: "Genova Technologies LLC", nums: ["+971 50 829 1970", "+971 50 124 9940"] }
  ];

  const handleMainSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      phone: formData.phone,
      city: formData.city,
      request_type: 'General Enquiry',
      to_name: 'Smart Build Admin'
    };

    // NOTE: Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_gsd092p';
    const TEMPLATE_ID = 'template_z4rxf5q';
    const PUBLIC_KEY = 'tX9cxueTJuOgEl9Sz';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", city: "" });
        setIsSubmitting(false);
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert(`Failed to send message: ${err.text || 'Unknown Error'}. Please check your credentials.`);
        setIsSubmitting(false);
      });
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    if (!popupPhone) return;
    setIsSubmitting(true);

    const templateParams = {
      name: 'Fast Track Lead',
      from_name: 'Fast Track Lead',
      email: 'fasttrack@callback.com',
      from_email: 'fasttrack@callback.com',
      phone: popupPhone,
      city: 'Instant Callback',
      request_type: 'Callback Request',
      to_name: 'Smart Build Admin'
    };

    const SERVICE_ID = 'service_gsd092p';
    const TEMPLATE_ID = 'template_z4rxf5q';
    const PUBLIC_KEY = 'tX9cxueTJuOgEl9Sz';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('POPUP SUCCESS!', response.status, response.text);
        setPopupPhone("");
        setIsSubmitting(false);
        setIsPopupOpen(false);
        alert('Request sent! We will call you soon.');
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert('Oops! Request failed. Please check network.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="modern-contact-root">
      <div className="mesh-gradient"></div>
      <div className="grid-layer"></div>

      <div className="contact-wrapper">
        <section className="contact-header-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="header-content"
          >
            <div className="status-tag"><div className="pulse"></div> Global Operations Active</div>
            <h1>Let’s build your <br /><span className="text-outline">Digital Infrastructure</span></h1>
            <p>Connect with our workflow specialists across borders. We help you scale from enquiry to balance sheet.</p>
          </motion.div>
        </section>

        <div className="interactive-grid">
          <div className="address-stack">
            {branches.map((branch, idx) => (
              <motion.div
                key={idx}
                className="location-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="card-top">
                  <span className="id-badge">{branch.id}</span>
                  <Globe size={18} className="icon-fade" />
                </div>
                <h3>{branch.region}</h3>
                <p className="comp-name">{branch.name}</p>
                <div className="phone-group">
                  {branch.nums.map((n, i) => (
                    <a href={`tel:${n}`} key={i} className="phone-pill">
                      <Phone size={12} /> {n}
                    </a>
                  ))}
                </div>
                <ArrowUpRight className="card-arrow" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="main-enquiry-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="form-inner-box">
              <div className="form-header">
                {success ? (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="success-badge">
                    <CheckCircle2 size={32} color="#00c853" />
                  </motion.div>
                ) : (
                  <ShieldCheck size={32} color="#0066ff" />
                )}
              </div>
              <form className="modern-floating-form" onSubmit={handleMainSubmit}>
                <div className="input-box">
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  <label>Full Name</label>
                </div>
                <div className="input-box">
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  <label> Email</label>
                </div>
                <div className="input-box">
                  <input type="number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  <label>Phone Number</label>
                </div>
                <div className="input-box">
                  <input type="text" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                  <label>City</label>
                </div>
                <button type="submit" className="glow-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Initialize Project'} <Send size={18} />
                </button>
              </form>
              <button className="quick-trigger" onClick={() => setIsPopupOpen(true)}>
                Need a quick callback? <span>Click here</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup Overlay */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="popup-overlay">
            <motion.div className="overlay-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPopupOpen(false)} />
            <motion.div className="popup-modal" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
              <button className="close-x" onClick={() => setIsPopupOpen(false)}><X /></button>
              <h3>Fast Track Enquiry</h3>
              <form className="mini-form" onSubmit={handlePopupSubmit}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={popupPhone}
                  onChange={(e) => setPopupPhone(e.target.value)}
                />
                <button type="submit" className="glow-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Call Me Back'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
