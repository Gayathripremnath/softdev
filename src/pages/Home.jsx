import React, { useEffect, useState } from 'react';
import './Home.css';
import '../styles/mac-mockup.css';
import img1 from "../assets/img1.png";
import enq from "../assets/enq.mp4";
import team from "../assets/team.mp4";
import project from "../assets/project.mp4";
import logo from "../assets/logo.jpg";
import { useRef } from 'react';


const Home = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', city: '' });
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxMessage, setCheckboxMessage] = useState('Unchecked ❌');

  const [activeFeature, setActiveFeature] = useState(0);
  const featureRefs = useRef([]);

  useEffect(() => {
    featureRefs.current = featureRefs.current.slice(0, 3); // Keep only first 3 refs
    const observers = [];

    featureRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveFeature(index);
            }
          },
          { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToForm = () => {
    document.querySelector('.demo-form-card').scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    setCheckboxMessage(checked ? 'Checked ✅' : 'Unchecked ❌');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { name: '', phone: '', city: '' };

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.city) newErrors.city = 'City is required';

    setErrors(newErrors);

    if (!formData.name || !formData.phone || !formData.city) {
      return;
    }

    setMessage('Form submitted successfully!');
    console.log('Form Data:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setMessage('');
  };

  useEffect(() => {
    const checkIcons = document.querySelectorAll('.check-icon');

    checkIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.transform = 'scale(1.2)';
        setTimeout(() => {
          icon.style.transform = 'scale(1)';
        }, 200);
      }, index * 300);
    });
  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="hero-cont">
          <div className="hero-left">
            <h1 className="hero-headline">
              Supercharge Your Construction Projects with Our All-in-One ERP Solution
            </h1>

            <p className="hero-description">
              Transform your construction business with our comprehensive ERP solution.
              Improve efficiency, enable real-time project management, and leverage
              cloud-based technology to streamline operations and boost productivity.
            </p>

            <button className="demo-button" onClick={scrollToForm}>
              Book a Free Demo
            </button>

            <div className="features-checklist">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Streamlined Project Management</span>

              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Real-Time Collaboration</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Resource Allocation Optimization</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Integrated Budget & Cost Control</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Customizable Dashboards</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Cloud-Based Platform</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="demo-form-card">
              <h3 className="form-title">Request a Free Demo</h3>

              <form className="demo-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="field-error">{errors.name}</div>}
                </div>

                <div className="form-field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="field-error">{errors.phone}</div>}
                </div>

                <div className="form-field">
                  <input
                    type="text"
                    name="city"
                    placeholder="City Name"
                    className="form-input"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <div className="field-error">{errors.city}</div>}
                </div>

                {message && <div className="form-message">{message}</div>}

                <button type="submit" className="send-button">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className='chart-page'>
          <div className='chart'>
            <div className='chart-image'>
              <img
                src="https://www.nwayerp.com/wp-content/uploads/2024/09/add-slid-2.webp"
                alt="Mac"
              />
            </div>
            <div className='chart-cont'>
              <h6>Our Modules</h6>
              <h4>Integrated Modules into a Single and Centralized Platform</h4>
              <p>
                Experience seamless collaboration across departments with our fully integrated construction project management ERP software on a single and centralized platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div><h1 style={{ textAlign: "center", fontSize: "3rem", fontWeight: "800", marginTop: "30px", color: "#0f1e46", padding:"10px", fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>From Planning to Execution Everything on One App</h1></div>
      <section className="info-section reverse enquiry-section" >
        <div className="enquiry-video-wrapper">
          <div className="info-container">
            <div className="info-image">
              <video src={enq} autoPlay muted loop playsInline></video>
            </div>
            <div className="info-content">
              <h2>Enquiry</h2>
              <p>Streamline your project planning with comprehensive tools and real-time insights.</p>
              <ul>
                <li>Resource allocation</li>
                <li>Timeline management</li>
                <li>Budget planning</li>
              </ul>
              <button className="cta-button">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section " style={{background:"#d1dbea"}}>
        <div className="enquiry-video-wrapper">
          <div className="info-container">
            <div className="info-image">
              <video src={team} autoPlay muted loop playsInline></video>
            </div>
            <div className="info-content">
              <h2>Team Collaboration</h2>
              <p>EReal-time Site-to-Office Sync: Instantly share site photos and progress reports with the design team.

                Centralized Document Vault: Access the latest blueprints, BOQs, and permits from any device, anywhere.

                Smart Task Management: Assign roles and track deadlines with automated notifications to prevent bottlenecks..</p>
              <ul>
                <li>Real-time messaging</li>
                <li>Document sharing</li>
                <li>Task assignments</li>
              </ul>
              <button className="cta-button">Discover Features</button>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section" >
        <div className="info-container">
          <div className="info-content">
            <h2>Project</h2>
            <p>Monitor project progress with advanced analytics and reporting tools.</p>
            <ul>
              <li>Live progress updates</li>
              <li>Performance metrics</li>
              <li>Custom reports</li>
            </ul>
            <button className="cta-button">View Demo</button>
          </div>
          <div className="info-image">
            <video src={project} autoPlay muted loop playsInline></video>
          </div>
        </div>
      </section>

      {/* -----footer----- */}
      
     <footer className="site-footer" >
  <div className="footer-container">

    <div className="footer-col footer-brand">
       <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
      <p>
        Our all-in-one ERP solution helps construction companies plan, manage,
        and execute projects efficiently with real-time insights.
      </p>
    </div>

    <div className="footer-col">
      <h3>Quick Links</h3>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Modules</li>
        <li>Contact</li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Contact</h3>
      <p>📞 +91 98765 43210</p>
      <p>📧 info@yourerp.com</p>
      <p>📍 Kerala, India</p>
    </div>

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Your ERP Solution. All Rights Reserved.
  </div>
</footer>

    </>

  );
};

export default Home;