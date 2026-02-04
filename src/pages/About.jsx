import "./About.css";
import heroImg from "../assets/about2.jpg";
import dashboardImg from "../assets/about-civil.jpg";
import mobileImg from "../assets/civil.jpg";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <h1>About Smart Build</h1>
          <p>Build Smarter. Track Better. Earn More.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text slide-left">
            <h2>Smart Construction Management</h2>
            <p>
              Smart Build is a cloud-based construction management software
              built for builders, architects, and contractors who want complete
              control over projects and profits.
            </p>
            <p>
              Manual tracking using paper and Excel leads to profit leakage.
              Smart Build digitizes your entire workflow — from enquiry to
              final billing.
            </p>
          </div>

          <div className="about-image slide-right">
            <img src={dashboardImg} alt="Dashboard" />
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="about-section light">
  <div className="about-container">
    <div className="about-image slide-left">
      <img src={mobileImg} alt="Mobile App" />
    </div>

    <div className="about-text slide-right">
      <h2>End-to-End Project Tracking</h2>
      <p>
        From enquiry to final billing, Smart Build tracks every activity,
        expense, and report project-wise.
      </p>
      <p>
        Know exactly where your money goes and how much profit you make.
      </p>
    </div>
  </div>
</section>

      {/* FEATURES */}
      <section className="features-section">
        <h2 className="center fade-in">Why Smart Build?</h2>

        <div className="features-grid">
          {[
            "Complete Project Control",
            "Material & Stock Tracking",
            "Labour & Payroll Management",
            "Accounting & Profit Analysis",
            "Mobile Apps for Engineers & Clients",
            "Fully Customizable System"
          ].map((item, i) => (
            <div className="feature-card hover-up" key={i}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="about-section highlight">
        <h2 className="center">Trusted Worldwide</h2>
        <p className="center max">
          With <strong>9+ years</strong> of industry experience and
          <strong> 5,000+ clients worldwide</strong>, Smart Build is a proven,
          reliable construction management solution.
        </p>
      </section>

    
{/* KEY FEATURES */}
<section className="key-features">
  <h2 className="center fade-in">Smart Build – Key Features</h2>

  <div className="features-wrapper">

    <div className="feature-block hover-up">
      <h3>Complete Project Control</h3>
      <ul>
        <li>Enquiry Management</li>
        <li>Sales Quotation</li>
        <li>Work Order Management</li>
        <li>Project Creation & Monitoring</li>
        <li>Invoice Generation</li>
      </ul>
    </div>

    <div className="feature-block hover-up">
      <h3>Material, Stock & Supplier Tracking</h3>
      <ul>
        <li>Material Management</li>
        <li>Supplier Credit Control</li>
        <li>Stock & Inventory Management</li>
      </ul>
    </div>

    <div className="feature-block hover-up">
      <h3>Labour & HR Management</h3>
      <ul>
        <li>Labour Attendance & Cost Tracking</li>
        <li>HR & Payroll Management</li>
        <li>Sub-Contractor Management</li>
      </ul>
    </div>

    <div className="feature-block hover-up">
      <h3>Assets & Operations</h3>
      <ul>
        <li>Tools Management</li>
        <li>Vehicle Management</li>
      </ul>
    </div>

    <div className="feature-block hover-up">
      <h3>Site Documentation</h3>
      <ul>
        <li>Document Management</li>
        <li>Site Photos with Date & Project Tracking</li>
      </ul>
    </div>

    <div className="feature-block hover-up">
      <h3>Powerful Accounting & Finance</h3>
      <ul>
        <li>Project-wise Ledger</li>
        <li>Trial Balance</li>
        <li>Balance Sheet</li>
        <li>Accurate Profit & Loss Tracking</li>
      </ul>
    </div>

    <div className="feature-block hover-up">
      <h3>Mobile Applications</h3>
      <ul>
        <li>
          <strong>Site Engineer Mobile App</strong>
          <span>Update progress, materials, labour, and site activities in real time</span>
        </li>
        <li>
          <strong>Client Mobile App</strong>
          <span>View reports, progress, and project status anytime, anywhere</span>
        </li>
      </ul>
    </div>

    <div className="feature-block highlight hover-up">
      <h3>One-Click Reports. Real-Time Decisions.</h3>
      <ul>
        <li>Every report available in a single click</li>
        <li>Live project status</li>
        <li>Accurate cost vs profit analysis</li>
        <li>Clear financial visibility across all projects</li>
      </ul>
    </div>

  </div>
</section>
  {/* CTA */}
      <section className="about-cta">
        <h2>Smart Build Protects Your Profit</h2>
        <button>Request a Demo</button>
      </section>
    </div>
    
  );
}
