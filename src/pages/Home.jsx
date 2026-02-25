import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
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

  // Mouse tracking for parallax effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    });

    AOS.refresh();   // IMPORTANT
  }, []);


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);



  useEffect(() => {
    featureRefs.current = featureRefs.current.slice(0, 3);
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
    const el = document.querySelector(".payroll");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach(el => observer.observe(el));
  }, []);



  return (
    <div className="home-page">


      <div className="hero-section">
        <div className="hero-cont">
          <div className="hero-left">
            <h1 className="hero-headline" data-aos="flip-left">
              Supercharge Your Construction Projects with Our <span style={{ color: "white", background: "rgba(22, 65, 66, 0.9)", borderRadius: "900px", padding: "5px" }}>All-in-One ERP</span> <span style={{ color: "white", background: "rgba(22, 65, 66, 0.9)", borderRadius: "900px", padding: "5px" }}>Solution</span>
            </h1>

            <div className="features-checklist" data-aos="zoom-in">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Streamlined Project Management</span>

              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Real-Time Seamless Collaboration </span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Resource Allocation Optimization</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Integrated Budget & Cost Control</span>
              </div>
            </div>
          </div>

          <div className="hero-right" data-aos="fade-left">
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

      <section className="payroll">
        <p className="reveal-text">
          {"Smart build payroll is a cutting-edge, cloud based Human Resources Management Software designed to streamline.".split(" ").map((word, i) => (
            <span key={i} style={{ "--i": i }}>
              {word}{" \u00A0"}
            </span>
          ))}
        </p>
      </section>

      <section className="workflow-section row" >

        {/* ENQUIRY */}
        <div className="workflow-row reveal col-md-6 " >
          <div className="workflow-image card-float" >
            <img src="https://marketingradar.com/wp-content/uploads/2023/03/shutterstock_1275409879-Leads-2048x1365.jpg.webp" alt="Enquiry" />
          </div>

          <div className="workflow-content">
            <span className="tag" >ENQUIRY</span>
            <h2>Smart  enquiry management</h2>
            <p>
              Capture and manage customer enquiries efficiently with <span>real-time tracking,</span>
              follow-ups, and centralized communication. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias provident voluptatibus velit veniam, laborum doloremque ullam ipsa blanditiis consequatur officia nesciunt in adipisci pariatur! Laborum aliquam amet repellat quam quaerat.
            </p>
          </div>
        </div>

        {/* ISSUE MANAGEMENT */}
        <div className="workflow-row reverse reveal col-md-6">
          <div className="workflow-image card-float">
            <img src="https://img.freepik.com/free-photo/confident-businesspeople-discussing-analytics-data-successful-experienced-managers-office-suits-meeting-conference-room-planning-strategy-teamwork-business-management-concept_74855-6866.jpg?semt=ais_hybrid&w=740&q=80" alt="Issue Management" />
          </div>

          <div className="workflow-content">
            <span className="tag">ISSUE MANAGEMENT</span>
            <h2>Resolve  issues faster</h2>
            <p>
              Track, assign, and close issues seamlessly with <span>transparent workflows</span>  and
              instant <span>updates </span> across teams. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quo sequi eius voluptatem error odit ad, numquam dolorem! Ea nesciunt molestias, sed id quos temporibus unde amet odio ducimus. Nobis.
            </p>
          </div>
        </div>

        {/* PROJECT */}
        <div className="workflow-row reveal">
          <div className="workflow-image card-float">
            <img src={img1} alt="Project" />
          </div>

          <div className="workflow-content">
            <span className="tag">PROJECT</span>
            <h2>Complete  project  control</h2>
            <p>
              Monitor progress, expenses, and timelines from <span> one dashboard</span> to ensure
              projects stay <span> profitable.</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sunt tenetur, mollitia maxime corporis harum ducimus in nesciunt voluptatibus reiciendis aut. Perferendis nesciunt enim natus accusamus expedita alias numquam cum?
            </p>
          </div>
        </div>

      </section>

      <section className="integration-section reveal" >
        <div className="integration-wrapper">

          {/* LEFT – Circle integrations */}
          <div className="integration-visual" >
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
      <div className='client-head'>
        <h1>Prestigious Clients</h1>
      </div>
      <section className="client-flow">

        <div className="flow-track">

          {[...Array(2)].map((_, loopIndex) =>
            [
              "https://www.genovatechnologies.com/images/clients/miart.jpg",
              "https://www.genovatechnologies.com/images/clients/micc_calicut.jpg",
              "https://www.genovatechnologies.com/images/clients/gateway.jpg",
              "https://www.genovatechnologies.com/images/clients/majestic.jpg",
              "https://www.genovatechnologies.com/images/clients/better_half.jpg",
              "https://www.genovatechnologies.com/images/clients/pure_solutions.jpg",
              "https://www.genovatechnologies.com/images/clients/meque.jpg",
              "https://www.genovatechnologies.com/images/clients/eric.jpg",
            ].map((logo, index) => (
              <div className="flow-item" key={`${loopIndex}-${index}`}>
                <img src={logo} alt="client logo" />
              </div>
            ))
          )}
        </div>

        <div className="flow-track2">

          {[...Array(2)].map((_, loopIndex) =>
            [
              "https://www.genovatechnologies.com/images/clients/miart.jpg",
              "https://www.genovatechnologies.com/images/clients/micc_calicut.jpg",
              "https://www.genovatechnologies.com/images/clients/gateway.jpg",
              "https://www.genovatechnologies.com/images/clients/majestic.jpg",
              "https://www.genovatechnologies.com/images/clients/better_half.jpg",
              "https://www.genovatechnologies.com/images/clients/pure_solutions.jpg",
              "https://www.genovatechnologies.com/images/clients/meque.jpg",
              "https://www.genovatechnologies.com/images/clients/eric.jpg",
            ].map((logo, index) => (
              <div className="flow-item" key={`${loopIndex}-${index}`}>
                <img src={logo} alt="client logo" />
              </div>
            ))
          )}
        </div>
      </section>



    </div>

  );
};

export default Home;