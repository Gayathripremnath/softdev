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
useEffect(() => {
  const charts = document.querySelectorAll(".chart");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 } // 30% visible aayal trigger
  );

  charts.forEach((chart) => observer.observe(chart));

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  items.forEach(el => observer.observe(el));
}, []);

  return (
    <>
      <div className="hero-section">
        <div className="hero-cont">
          <div className="hero-left">
            <h1 className="hero-headline">
              Supercharge Your Construction Projects with Our <span style={{color:"white", background:"rgba(22, 65, 66, 0.9)", borderRadius:"900px", padding:"5px"}}>All-in-One ERP Solution</span>
            </h1>

       
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

      <section className='payroll'>
        <p>Smart build payroll is a cutting-edge, cloud
based Human Resources Management
Software designed to streamline.</p>
      </section>
    



<section className="integration-section reveal">
  <div className="integration-wrapper">

    {/* LEFT – Circle integrations */}
    <div className="integration-visual">
      <div className="circle">
        <span className="center-text">
          <h2>100+</h2>
          <p>Tool Integrations</p>
        </span>

       <img src="https://techwave.golothemes.com/payroll/wp-content/uploads/sites/33/2024/06/icon-images-min.png" alt="" />
      </div>
    </div>

    {/* RIGHT – Content */}
    <div className="integration-content">
      <span className="tag">INTEGRATION</span>
      <h2>
        Scale your team <br /> up-and-down
      </h2>
      <p>
        Solutions for startup and SMBs, helping them establish
        efficient HR operations, manage growing teams.
      </p>

      <button className="primary-btn">
        Start 14-day free trial
      </button>
    </div>

  </div>
</section>

   <section className="client-flow">

  <div className="flow-line">
    {[
      "https://www.genovatechnologies.com/images/clients/miart.jpg",
      "https://www.genovatechnologies.com/images/clients/micc_calicut.jpg",
      "https://www.genovatechnologies.com/images/clients/gateway.jpg",
      "https://www.genovatechnologies.com/images/clients/majestic.jpg",
      "https://www.genovatechnologies.com/images/clients/better_half.jpg",
      "https://www.genovatechnologies.com/images/clients/pure_solutions.jpg",
      "https://www.genovatechnologies.com/images/clients/meque.jpg",
      "https://www.genovatechnologies.com/images/clients/eric.jpg",
    ].map((logo, index) => (
      <div className="flow-item" key={index}>
        <img src={logo} alt="client logo" />
      </div>
    ))}
  </div>
</section>


    </>

  );
};

export default Home;