import "./About.css";
import team from "../assets/team.mp4";

const About = () => {
  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-text">
          <span className="breadcrumb">Home / About</span>
          <h1>About Smart Build</h1>
          <p>
            Smart Build is a smart, cloud-based construction management software
            built exclusively for builders, architects, and contractors who want
            complete control over their projects and profits.
          </p>
        </div>

        <div className="about-hero-images">
          <video src={team} muted autoPlay/>
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" />
          <img src="https://images.unsplash.com/photo-1590650046871-92c887180603" />
        </div>
      </div>

      {/* ABOUT DESCRIPTION */}
      <div className="about-description">
        <p>
          In construction, even small tracking mistakes can lead to huge financial losses.
          Paperwork and Excel sheets fail to capture real-time site expenses, material usage,
          labour costs, and project progress—resulting in profit leakage.
        </p>

        <p>
          Smart Build eliminates these problems by digitizing and automating your entire
          project workflow. From enquiry to final billing, Smart Build tracks every activity,
          every expense, and every report—project wise.
        </p>

        <p>
          You always know where your money goes and how much profit you make.
        </p>
      </div>

      {/* PLATFORM */}
      <div className="platform-section">
        <h2>Designed for Everyone</h2>

        <ul>
          <li>Powerful web application for office management</li>
          <li>Mobile app for site engineers</li>
          <li>Client mobile app for transparent reporting</li>
        </ul>
      </div>

      {/* EXPERIENCE */}
      <div className="experience-section">
        <div>
          <h3>9+ Years</h3>
          <span>Industry Experience</span>
        </div>
        <div>
          <h3>5,000+</h3>
          <span>Satisfied Clients</span>
        </div>
      </div>

      {/* KEY FEATURES */}
      <div className="features-section">
        <h2>Smart Build – Key Features</h2>

        <div className="features-grid">
          <div>
            <h4>Complete Project Control</h4>
            <p>Enquiry, Quotation, Work Orders, Project Monitoring, Invoicing</p>
          </div>

          <div>
            <h4>Material & Stock Tracking</h4>
            <p>Material Management, Supplier Credit, Inventory Control</p>
          </div>

          <div>
            <h4>Labour & HR Management</h4>
            <p>Attendance, Payroll, Sub-Contractor Management</p>
          </div>

          <div>
            <h4>Accounting & Finance</h4>
            <p>Project-wise Ledger, P&L, Balance Sheet, Profit Tracking</p>
          </div>

          <div>
            <h4>Site Documentation</h4>
            <p>Documents, Site Photos with Date & Project Tracking</p>
          </div>

          <div>
            <h4>Mobile Applications</h4>
            <p>Site Engineer App & Client App with real-time updates</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Choose Smart Build?</h2>

        <ul>
          <li>Cloud-based & secure</li>
          <li>Fully customizable</li>
          <li>Eliminates profit loss</li>
          <li>Improves efficiency & transparency</li>
          <li>Scales with your business</li>
          <li>Trusted by 5,000+ clients worldwide</li>
        </ul>

        <h3 className="tagline">
          Build Smarter. Track Better. Earn More.
        </h3>
      </div>

    </section>
  );
};

export default About;
