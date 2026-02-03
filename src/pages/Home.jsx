import React, { useEffect, useState } from 'react';
import './Home.css';
import '../styles/mac-mockup.css';
import logo from "../assets/mac.jpg";

const Home = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', city: '' });
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxMessage, setCheckboxMessage] = useState('Unchecked ❌');

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
          src="https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hY3xlbnwwfHwwfHx8MA%3D%3D" 
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

     <section className="features-section">
  <div className="features-container">
    <h2 className="features-heading">From Planning to Execution – Everything on One App</h2>
    
    <div className="features-vertical-list">
      
      <div className="feature-step">
        <div className="step-number">1</div>
        <div className="feature-content">
          <h3 className="card-title">Enquiry</h3>
          <p className="card-description">Streamline your project planning with comprehensive tools and real-time insights.</p>
          <ul className="card-bullets">
            <li>Resource allocation</li>
            <li>Timeline management</li>
            <li>Budget planning</li>
          </ul>
          <a href="#" className="card-link">know more &gt;</a>
        </div>
      </div>

      <div className="feature-step">
        <div className="step-number">2</div>
        <div className="feature-content">
          <h3 className="card-title">Team Collaboration</h3>
          <p className="card-description">Enable seamless communication and collaboration across all project teams.</p>
          <ul className="card-bullets">
            <li>Real-time messaging</li>
            <li>Document sharing</li>
            <li>Task assignments</li>
          </ul>
          <a href="#" className="card-link">know more &gt;</a>
        </div>
      </div>

      <div className="feature-step">
        <div className="step-number">3</div>
        <div className="feature-content">
          <h3 className="card-title">Project</h3>
          <p className="card-description">Monitor project progress with advanced analytics and reporting tools.</p>
          <ul className="card-bullets">
            <li>Live progress updates</li>
            <li>Performance metrics</li>
            <li>Custom reports</li>
          </ul>
          <a href="#" className="card-link">know more &gt;</a>
        </div>
      </div>

    </div>
  </div>
</section>
<div className="hero-container">
     
      <div className="bg-shape"></div>

      <div className="hero-content">
     
        <div className="hero-left">
          {/* <h6 className="main-title">SMART BUILD
          <h6>APPLICATIONS</h6></h6> */}
        </div>
    <div className='ph-mac'>
        <img src="https://www.nwayerp.com/wp-content/uploads/2024/10/all-media-screen-img.webp" alt="" />
    </div>
        </div>
      </div>
    </>
  );
};

export default Home;