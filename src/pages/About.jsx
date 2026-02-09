import React, { useEffect } from "react";
import "./About.css";
import about from "../assets/about-civil.jpg";
import team from '../assets/team.mp4'
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
  }, []);

  return (
    <div className="about-page">

  
      <section className="about-hero">
        <div className="hero-text animate up">
          <h1>About <span>Smart</span> Build</h1>
          <img src="https://images.unsplash.com/photo-1482731215275-a1f151646268?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkZXJzfGVufDB8fDB8fHww" style={{width:"1000px", height:"500px", borderRadius:"99px", padding:"10px", marginLeft:"100px"}} alt="" />
          <p>
            Smart Build is a smart, cloud-based construction management software
            built exclusively for builders, architects, and contractors.
          </p>
        </div>
      </section>



      <section className="about-section animate up">
        <p>
         In construction, even small tracking mistakes can lead to huge financial losses.
Paperwork and Excel sheets fail to capture real-time site expenses, material usage,
labour costs, and project progress—resulting in profit leakage.
<span>smart</span> Build eliminates these <span>problems</span>  by digitizing and automating your entire
project workflow.

        </p>
        <p>
          From enquiry to final billing, Smart Build tracks every activity, every expense, and
every report—project wise. You always know where your <span style={{backgroundColor:"lightpink"}}>money</span> goes and how much
profit you make.

        </p>
      </section>
  {/* WHY */}
      <section className="why-section">
  <div className="why-wrapper">

    {/* IMAGE */}
    <div className="why-image">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Why choose us"
      />
    </div>

    {/* CONTENT */}
    <div className="why-content">
      <span className="why-tag">WHY CHOOSE US</span>

      <h2>
        WHY WE'RE THE <br />
        <span>PERFECT FIT</span> FOR YOU
      </h2>

      <div className="why-points">

  <div className="why-point">
    <div className="icon">✔</div>
    <p>Cloud-based & secure</p>
  </div>

  <div className="why-point">
    <div className="icon">✔</div>
    <p>Fully customizable as per your business needs</p>
  </div>

  <div className="why-point">
    <div className="icon">✔</div>
    <p>Eliminates profit loss</p>
  </div>

  <div className="why-point">
    <div className="icon">✔</div>
    <p>Improves efficiency & transparency</p>
  </div>

  <div className="why-point">
    <div className="icon">✔</div>
    <p>Scales with your business</p>
  </div>

  <div className="why-point">
    <div className="icon">✔</div>
    <p>Trusted by 5,000+ clients worldwide</p>
  </div>

  <div className="why-point">
    <div className="icon">✔</div>
    <p>9+ years of industry expertise</p>
  </div>

</div>

      <button className="why-btn">Contact Us</button>
    </div>

  </div>
</section>

      {/* PLATFORM */}
      <section className="cards-section">
        <div className="info-card animate left">
          <h3>Web Application</h3>
          <p>Powerful office management & reporting system.</p>
        </div>

        <div className="info-card animate up">
          <h3>Site Engineer App</h3>
          <p>Real-time updates on progress, materials & labour.</p>
        </div>

        <div className="info-card animate right">
          <h3>Client App</h3>
          <p>Transparent project status & financial visibility.</p>
        </div>
      </section>


      <section className="features">
        <h2 className="animate up">Smart Build – Key Features</h2>

        <div className="feature-grid">
          <div className="feature animate left">
            <h4>Complete Project Control</h4>
            <ul>
              <li>Enquiry Management</li>
              <li>Quotation & Work Orders</li>
              <li>Project Monitoring</li>
              <li>Invoice Generation</li>
            </ul>
          </div>

          <div className="feature animate right">
            <h4>Material & Labour Management</h4>
            <ul>
              <li>Stock & Inventory</li>
              <li>Supplier Credit Control</li>
              <li>Labour Attendance</li>
              <li>Payroll & HR</li>
            </ul>
          </div>

          <div className="feature animate left">
            <h4>Accounting & Reports</h4>
            <ul>
              <li>Project-wise Ledger</li>
              <li>Profit & Loss</li>
              <li>Balance Sheet</li>
              <li>One-Click Reports</li>
            </ul>
          </div>
        </div>
      </section>

    


    </div>
  );
};

export default About;
