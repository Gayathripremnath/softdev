import React, { useEffect } from "react";
import "./About.css";

const About = () => {
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

        <div className="team-grid">
          <div className="team-card">
            <div className="team-img-wrapper" style={{ height: '250px' }}>
              <img src="https://images.unsplash.com/photo-1507537297325-592bc793c10f?q=80&w=400" alt="Project Control" />
            </div>
            <h4>Project Control</h4>
            <p>Enquiry, Quotation & Invoicing</p>
          </div>
          <div className="team-card">
            <div className="team-img-wrapper" style={{ height: '250px' }}>
              <img src="https://images.unsplash.com/photo-1586528116311-ad86d525fc9e?q=80&w=400" alt="Material Tracking" />
            </div>
            <h4>Materials & Stock</h4>
            <p>Supplier & Inventory Tracking</p>
          </div>
          <div className="team-card">
            <div className="team-img-wrapper" style={{ height: '250px' }}>
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400" alt="Labour HR" />
            </div>
            <h4>Labour & HR</h4>
            <p>Attendance & Payroll Management</p>
          </div>
          <div className="team-card">
            <div className="team-img-wrapper" style={{ height: '250px' }}>
              <img src="https://images.unsplash.com/photo-1454165833267-035f29910e53?q=80&w=400" alt="Accounting" />
            </div>
            <h4>Accounting</h4>
            <p>Balance Sheet & Profit/Loss</p>
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
              <img src="https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop" alt="Data Dashboard" />
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
