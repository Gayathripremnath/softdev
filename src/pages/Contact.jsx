import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Send, X, ArrowUpRight, Globe, ShieldCheck } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const branches = [
    { id: "01", region: "India (Kerala)", name: "Genova Technologies Pvt Ltd", nums: ["+91 7559080005", "+91 8714359715"] },
    { id: "02", region: "UAE", name: "Genova Technologies LLC", nums: ["+971 50 829 1970", "+971 50 124 9940"] }
  ];

  return (
    <div className="modern-contact-root">
      {/* Dynamic Background */}
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
            <h1>Let’s build your <br/><span className="text-outline">Digital Infrastructure</span></h1>
            <p>Connect with our workflow specialists across borders. We help you scale from enquiry to balance sheet.</p>
          </motion.div>
        </section>

        <div className="interactive-grid">
          {/* Address Side */}
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

          {/* Integrated Modern Form */}
          <motion.div 
            className="main-enquiry-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="form-inner-box">
              <div className="form-header">
                <ShieldCheck size={32} color="#0066ff" />
                <h2>Contact us</h2>
                <p>Secure & encrypted communication</p>
              </div>
              <form className="modern-floating-form">
                <div className="input-box">
                  <input type="text" required />
                  <label>Full Name</label>
                </div>
                <div className="input-box">
                  <input type="email" required />
                  <label>Work Email</label>
                </div>
                <div className="input-box">
                  <select required>
                    <option value="" disabled selected>Select Module</option>
                    <option>Project Management</option>
                    <option>Accounts & Ledger</option>
                    <option>Workforce Control</option>
                  </select>
                </div>
                <button type="submit" className="glow-submit-btn">
                  Initialize Project <Send size={18} />
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
              <div className="mini-form">
                <input type="tel" placeholder="Phone Number with Country Code" />
                <button className="glow-submit-btn">Call Me Back</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;