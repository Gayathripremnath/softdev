import React, { useEffect, useState, useMemo } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import "./About.css";

const About = () => {
  // Mouse tracking for parallax effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40, // Range -20 to 20
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const constructionIcons = useMemo(() => [
    { icon: "🏗️", x: "10%", y: "15%", speed: 1.2 },
    { icon: "🔨", x: "85%", y: "10%", speed: 0.8 },
    { icon: "📏", x: "15%", y: "45%", speed: 1.5 },
    { icon: "🔧", x: "75%", y: "35%", speed: 1.0 },
    { icon: "🦺", x: "25%", y: "65%", speed: 0.7 },
    { icon: "🚜", x: "80%", y: "75%", speed: 1.3 },
    { icon: "🧱", x: "10%", y: "85%", speed: 0.9 },
    { icon: "🪜", x: "50%", y: "25%", speed: 1.1 },
    { icon: "🏗️", x: "60%", y: "60%", speed: 0.6 },
    { icon: "🛠️", x: "40%", y: "80%", speed: 1.4 },
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".animate").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Interactive Blueprint Construction Background */}
      <div className="about-blueprint-bg">
        <div className="blueprint-grid"></div>

        {constructionIcons.map((item, i) => (
          <motion.div
            key={i}
            className="parallax-icon"
            animate={{
              x: mousePos.x * item.speed,
              y: mousePos.y * item.speed,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            style={{
              position: "fixed",
              left: item.x,
              top: item.y,
              fontSize: "2rem",
              opacity: 0.15,
              pointerEvents: "none",
              zIndex: 0
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* LARGE HEADER IMAGE SECTION */}
      <section className="about-header-section animate fadeIn">
        <div className="header-image-container">
        </div>
      </section>

      {/* MAIN ABOUT CONTENT SECTION */}
      <section className="main-about-section">
        <div className="about-container">
          {/* Left: Overlapping Images */}
          <div className="about-images-grid animate left">

            <div className="small-images-wrapper">
              <div className="experience-badge">
                <div className="badge-number">9+</div>
                <div className="badge-label">Years of experience</div>
              </div>
              <div className="small-image small-1">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop" alt="Site Engineer with Tablet" />
              </div>
            </div>
          </div>

          {/* Right: Content Text */}
          <div className="about-content-main animate right">
            <span className="section-label">ABOUT SMART BUILD</span>
            <h2>Smart Construction Management Solution</h2>
            <p>
              Smart Build is a smart, cloud-based construction management software built
              exclusively for builders, architects, and contractors who want complete control over
              their projects and profits.
            </p>
            <p>
              In construction, even small tracking mistakes can lead to huge financial losses.
              Paperwork and Excel sheets fail to capture real-time site expenses, material usage,
              labour costs, and project progress—resulting in profit leakage.
              Smart Build eliminates these problems by digitizing and automating your entire
              project workflow
            </p>

            <ul className="features-checklist">
              <li><span className="check-icon">✓</span> Powerful Web App for Office</li>
              <li><span className="check-icon">✓</span> Dedicated Site Engineer App</li>
              <li><span className="check-icon">✓</span> Transparent Client Reporting App</li>
            </ul>

            <div className="contact-signature-row">
              <div className="contact-box-mini">
                <div className="call-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                  </svg>
                </div>
                <div className="call-text">
                  <span>Call us anytime</span>
                  <strong>5,000+ Happy Clients</strong>
                </div>
              </div>
              <div className="signature-box">
                <span className="signature-text" style={{ fontFamily: 'auto', fontWeight: 'bold', fontSize: '1.2rem' }}>Smart Build Admin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES CATEGORIES (Grid Styling) */}
      <section className="team-section animate up">
        <span className="section-label text-center d-block">KEY FEATURES</span>
        <h2 className="text-center">How We Help You Grow</h2>

        <div className='wrapper  animate up'>
          <div className="box-area  animate up">
            <div className='box'>
              <img src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uc3RydWN0aW9uJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <div className="overlay">
                <h3> Project Control</h3>
                <p>• Enquiry Management <br />
                  • Sales Quotation <br />
                  • Work Order Management <br />
                  • Project Creation & Monitoring <br />• Invoice Generation
                </p>
              </div>
            </div>
            <div className="box">
              <img src="https://media.istockphoto.com/id/1352130137/photo/delivery-and-logistics-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=lxX7oElKDaw2N9jxp2JERL7UINpGWxv8a4BygNeZw2o=" alt="" />
              <div className="overlay">
                <h3>Material, Stock </h3>
                <p>• Material Management <br />
                  • Supplier Credit Control <br />
                  • Stock & Inventory Management</p>

              </div>
            </div>
            <div className="box">
              <img src="https://plus.unsplash.com/premium_photo-1661326247701-df5ad0c5d244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhyJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <div className="overlay">
                <h3>HR Management</h3>
                <p>• Labour Attendance & Cost Tracking  <br />
                  • HR & Payroll Management  <br />
                  • Sub-Contractor Management</p>

              </div>
            </div>
            <div className="box">
              <img src="https://plus.unsplash.com/premium_photo-1661335223463-70e23e50791f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXNzZXRzJTIwYW5kJTIwb3BlcmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <div className="overlay">
                <h3>Assets & Operations</h3>
                <p>• Tools Management <br />
                  • Vehicle Management</p>

              </div>
            </div>
            <div className="box">
              <img src="https://media.istockphoto.com/id/838476004/photo/silhouette-of-engineer-and-construction-team-working-safely-work-load-concrete-on-scaffolding.webp?a=1&b=1&s=612x612&w=0&k=20&c=xXLKeqSFDdox0mTueiK01FcN-GEQmycwYpIYhis0nBg=" alt="" />
              <div className="overlay">
                <h3>Site Documentation</h3>
                <p>• Document Management <br />
                  • Site Photos with Date & Project Tracking</p>

              </div>
            </div>
            <div className="box">
              <img src="https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <div className="overlay">
                <h3>Powerful Accounting & Finance</h3>
                <p>• Project-wise Ledger <br />
                  • Trial Balance <br />
                  • Balance Sheet <br />
                  • Accurate Profit & Loss Tracking</p>

              </div>
            </div>
            <div className="box">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D" alt="" />
              <div className="overlay">
                <h3>Mobile Applications
                </h3>
                <p>• Update progress,materials,labour,and site activities in real time <br />
                  • Client Mobile App 
                  View reports,progress,and project status anytime,anywhere</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONE CLICK REPORTS SECTION */}
      <section className="global-manage-section">
        <div className="about-container">
          <div className="manage-content animate left">
            <span className="section-label">REAL-TIME DECISIONS</span>
            <h2>One-Click Reports & Accurate Analytics</h2>
            <p>Every report is available in a single click, providing live project status and cost vs profit analysis.</p>

            <div className="manage-feature">
              <div className="manage-feature-icon">
                <span className="icon-badge">📊</span>
              </div>
              <div className="manage-feature-text">
                <h4>Financial Visibility</h4>
                <p>Clear tracking of where your money goes across all projects.</p>
              </div>
            </div>

            <div className="manage-feature">
              <div className="manage-feature-icon">
                <span className="icon-badge">📈</span>
              </div>
              <div className="manage-feature-text">
                <h4>Site Documentation</h4>
                <p>Document management with site photos and project tracking.</p>
              </div>
            </div>
          </div>

          <div className="manage-images animate right">
            <div className="manage-img-1">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Financial Analysis" />
            </div>
            <div className="manage-img-2">
              <img src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D" alt="Data Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION (Final Highlights) */}
      <section className="why-highlight-section animate up" style={{ padding: '100px 20px', backgroundColor: '#1a1f26', color: 'white' }}>
        <div className="about-container" style={{ flexDirection: 'column', textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#3b82f6' }}>WHY CHOOSE US</span>
          <h2 style={{ color: 'white' }}>Build Smarter. Track Better. Earn More.</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 40px', color: '#cbd5e1' }}>
            Trusted by 5,000+ clients worldwide with 9+ years of industry expertise.
            We customize the software to match your business process perfectly.
          </p>
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', width: '100%' }}>
            <div className="why-item-mini" style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              <strong>Secure</strong>
              <p style={{ fontSize: '0.8rem' }}>Cloud-based protection</p>
            </div>
            <div className="why-item-mini" style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              <strong>Customizable</strong>
              <p style={{ fontSize: '0.8rem' }}>Tailored to your needs</p>
            </div>
            <div className="why-item-mini" style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              <strong>Efficient</strong>
              <p style={{ fontSize: '0.8rem' }}>Eliminates profit leakage</p>
            </div>
            <div className="why-item-mini" style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              <strong>Scalable</strong>
              <p style={{ fontSize: '0.8rem' }}>Grows with your business</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
