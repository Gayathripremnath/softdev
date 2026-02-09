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
  return (
    <>
      <div className="hero-section">
        <div className="hero-cont">
          <div className="hero-left">
            <h1 className="hero-headline">
              Supercharge Your Construction Projects with Our <span style={{color:"white", background:"rgba(22, 65, 66, 0.9)", borderRadius:"900px", padding:"5px"}}>All-in-One ERP Solution</span>
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



  <section id="planing">
      <div className="planing-head">
        <h1>From Planning to Execution Everything on One App</h1>
      </div>

      <div className="timeline">


        <div className="timeline-item left">
          <div className="timeline-card">
            <h3>Enquiry</h3>

            <p>
            Streamline enquiries with smart tracking and real-time updates.
            </p>
          <video src={enq} muted autoPlay loop playsInline preload="auto" style={{width:"320px", borderRadius:"40px"}}></video>
            <div className="tech-used">
              <span>Resource allocation</span>
              <span>Timeline planning</span>
              <span>Budget control</span>
             
            </div>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-card">
            <h3>Construction Material Management</h3>

            <p>
              Get real-time visibility of material stock on site & fasten the procurement proces
            </p>
          <video src={team} muted autoPlay loop playsInline preload="auto" style={{width:"320px", borderRadius:"40px"}}  ></video>
            <div className="tech-used">
              <span> 
Procure and allocate materials faster</span>
              <span>Avoid Material loss or theft</span>
              <span>Generate instant POs and GRNs</span>
            </div>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-card">
            <h3>Project</h3>

            <p>
              Manage your projects on mobile, get real-time updates, enhance collaboration, & increase efficiency
            </p>
            <img src={img1} style={{borderRadius:"40px"}} alt="" />

            <div className="tech-used">
              <span>Track project progress at a glance</span>
              <span>Avoid delays by getting quick insights</span>
              <span>Generate detailed daily progress 
reports</span>
              <span>Data Reporting</span>
            </div>
          </div>
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