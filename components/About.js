import { useState } from "react";

export default function About() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <section id="about" className="about section-padding">
        <div className="container">
          <div className="left">
            <p className="tag">ABOUT ME</p>

            <h2>
              <span className="gradient-text">Master of Engineering in Computer Science, Thapar Institute of Engineering and Technology, Patiala</span>
            </h2>

            <p className="description">
              I am a Software Engineer focused on workflow automation, scalable full-stack applications, and enterprise-grade system design. Passionate about ServiceNow integrations, AI/ML enablement, and building reliable production systems. Open to new opportunities and collaborations.
            </p>
          </div>

          <div className="right">
            {/* Education Bento 1 */}
            <div className="card glass-panel interactive-card">
              <span className="card-label">EDUCATION • MASTER OF ENGINEERING</span>
              <h3>Thapar Institute of Engineering and Technology, Patiala</h3>
              <p className="detail">Punjab, India | 2024 – 2026</p>
              <div className="highlight">CGPA: 8.34 / 10</div>
            </div>

            {/* Education Bento 2 */}
            <div className="card glass-panel interactive-card">
              <span className="card-label">EDUCATION • B.TECH IT</span>
              <h3>CHRIST (Deemed to be University), Bangalore</h3>
              <p className="detail">Bangalore, India | 2019 – 2023</p>
              <div className="highlight">CGPA: 8.94 / 10</div>
            </div>

            {/* Core Domain Bento Card with Dropdown */}
            <div className="card glass-panel core-focus-card">
              <span className="card-label">CORE FOCUS</span>
              <h3>Full Stack Development, AI / ML and Enterprise Application</h3>
              <p className="summary-text">
                Specialized in building ServiceNow SPM workflows, automated validation frameworks,
                restful APIs, and secure database designs (PostgreSQL, MongoDB).
              </p>
              
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="dropdown-toggle"
                aria-expanded={showDetails}
              >
                {showDetails ? "Hide Capabilities ▲" : "View Detailed Capabilities ▼"}
              </button>

              <div className={`dropdown-content ${showDetails ? "open" : ""}`}>
                <ul>
                  <li><strong>ServiceNow Enterprise Workflows:</strong> Development and configuration of SPM modules (DTIT, Capacity Planning, PMMS, QMT) using Jelly scripting, client scripts, UI policies, and custom business rules.</li>
                  <li><strong>Automated Validation Suites:</strong> Python testing frameworks to analyze system behavior, identify process vulnerabilities, and ensure robustness.</li>
                  <li><strong>Full-Stack APIs:</strong> Modular backends built with FastAPI and Django REST, connected securely to PostgreSQL and MongoDB databases.</li>
                  <li><strong>AI-Powered Applications:</strong> prompt engineering, LLM reasoning engines (Gemini API), and meal analytics workflows.</li>
                </ul>
              </div>
            </div>

            {/* Strategy Bento */}
            <div className="card glass-panel interactive-card">
              <span className="card-label">ENGINEERING CULTURE</span>
              <h3>High Agency & System Reliability</h3>
              <p>
                Dedicated to conducting root-cause analysis, optimizing inference pipelines,
                and streamlining development processes to eliminate process gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about {
          background: var(--bg);
          transition: background-color 0.5s;
          position: relative;
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .tag {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--tag-text);
          background: var(--tag-bg);
          border: 1px solid var(--border-color);
          width: fit-content;
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 24px;
        }

        h2 {
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          line-height: 1.15;
          margin-bottom: 30px;
          font-weight: 800;
          letter-spacing: -1.5px;
        }

        .description {
          line-height: 1.8;
          color: var(--text-secondary);
          font-size: 1.05rem;
        }

        .description strong {
          color: var(--text-primary);
        }

        .right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: var(--panel);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border);
          border-radius: 24px;
          transition: border-color 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .interactive-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px var(--accent-glow);
        }

        .core-focus-card {
          grid-column: span 2;
          justify-content: flex-start;
        }

        .card:nth-child(1),
        .card:nth-child(2) {
          grid-column: span 1;
        }

        .card:nth-child(4) {
          grid-column: span 2;
        }

        .card-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--accent-secondary);
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .card h3 {
          margin-bottom: 8px;
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.3;
          color: var(--text-primary);
        }

        .card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .card .detail {
          font-size: 0.85rem;
          margin-bottom: 12px;
        }

        .highlight {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: var(--tag-text);
          background: var(--tag-bg);
          padding: 4px 10px;
          border-radius: 8px;
          width: fit-content;
          border: 1px solid var(--border-color);
        }

        /* Dropdown CSS Styling */
        .dropdown-toggle {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--tag-text);
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          margin-top: 14px;
          width: fit-content;
          transition: all 0.3s ease;
        }

        .dropdown-toggle:hover {
          background: var(--tag-bg);
          border-color: var(--border-hover);
          color: var(--text-primary);
        }

        .dropdown-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          opacity: 0;
        }

        .dropdown-content.open {
          max-height: 500px;
          opacity: 1;
          margin-top: 20px;
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
        }

        .dropdown-content ul {
          padding-left: 20px;
          margin: 0;
        }

        .dropdown-content li {
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 10px;
          color: var(--text-secondary);
          list-style-type: square;
        }

        .dropdown-content li strong {
          color: var(--text-primary);
        }

        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .right {
            grid-template-columns: 1fr;
          }
          
          .card:nth-child(1),
          .card:nth-child(2),
          .card:nth-child(3),
          .card:nth-child(4) {
            grid-column: span 1;
          }
        }
      `}</style>
    </>
  );
}