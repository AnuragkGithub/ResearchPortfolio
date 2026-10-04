const projects = [
  {
    title: "AgentOps-AI",
    url: "https://github.com/AnuragkGithub/AgentOps-AI",
    desc: "AI-powered ops workflows for intelligent automation and monitoring.",
  },
  {
    title: "dashboard",
    url: "https://github.com/AnuragkGithub/dashboard",
    desc: "Interactive analytics dashboard for business metrics and system insights.",
  },
  {
    title: "ESG-Data-Ingestion",
    url: "https://github.com/AnuragkGithub/ESG-Data-Ingestion",
    desc: "Data pipeline for ESG reporting, validation, and operational analytics.",
  },
  {
    title: "Scalable-Data-Processing-API",
    url: "https://github.com/AnuragkGithub/Scalable-Data-Processing-API",
    desc: "High-throughput API for data processing, integration, and real-time delivery.",
  },
  {
    title: "Expense-AI",
    url: "https://github.com/AnuragkGithub/Expense-AI",
    desc: "Expense intelligence assistant using AI to categorize and summarize spend.",
  },
  {
    title: "Data-AI-Assistant",
    url: "https://github.com/AnuragkGithub/Data-AI-Assistant",
    desc: "Conversational AI helper for data queries, reporting, and analytics workflows.",
  },
  {
    title: "Enterprise-Analytics-AI",
    url: "https://github.com/AnuragkGithub/Enterprise-Analytics-AI",
    desc: "Enterprise analytics platform with AI-driven business insights.",
  },
  {
    title: "AI-Job-Analytics-System",
    url: "https://github.com/AnuragkGithub/AI-Job-Analytics-System",
    desc: "Job market analytics and insight automation for recruiting and hiring.",
  },
  {
    title: "Job-Monitoring-Assistant",
    url: "https://github.com/AnuragkGithub/Job-Monitoring-Assistant",
    desc: "Automated job monitoring assistant for pipeline health and alerting.",
  },
  {
    title: "Food-Health-APP",
    url: "https://github.com/AnuragkGithub/Food-Health-APP",
    desc: "Nutrition and meal management app built for health-focused user workflows.",
  },
  {
    title: "MERN_WebChatApp",
    url: "https://github.com/AnuragkGithub/MERN_WebChatApp",
    desc: "Real-time MERN chat application with authentication and messaging.",
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="projectSection">
      <div className="projectHeader">
        <span>MY WORK</span>
        <h2>Open-source platforms, AI systems, and enterprise-grade applications.</h2>
        <p>Click any repo to open the source on GitHub.</p>
      </div>

      <div className="cardsGrid">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="projectCard"
          >
            <div className="projectTitle">{project.title}</div>
            <p>{project.desc}</p>
            <span className="projectLink">{project.url}</span>
          </a>
        ))}
      </div>

      <style jsx>{`
        .projectSection {
          min-height: 100vh;
          padding: 140px 8%;
          background: transparent;
          color: var(--text);
        }

        .projectHeader {
          max-width: 860px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .projectHeader span {
          display: inline-block;
          font-size: 0.85rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 18px;
        }

        .projectHeader h2 {
          font-size: clamp(2.8rem, 5vw, 4.6rem);
          line-height: 1.05;
          margin: 0;
          color: var(--text);
        }

        .projectHeader p {
          margin-top: 18px;
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .cardsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 26px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .projectCard {
          position: relative;
          display: block;
          overflow: hidden;
          padding: 28px;
          min-height: 220px;
          border-radius: 28px;
          background: var(--panel);
          border: 1px solid transparent;
          box-shadow: var(--shadow-soft);
          transition: transform 0.35s ease, background 0.35s ease, box-shadow 0.35s ease;
        }

        .projectCard::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 28px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(56,189,248,0.7), rgba(168,85,247,0.5), rgba(56,189,248,0.35));
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          animation: borderShift 6s linear infinite;
          opacity: 0.12;
        }

        .projectCard::after {
          /* keep the inner area transparent so text sits directly on panel/surface */
          content: "";
          position: absolute;
          inset: 0;
          margin: 1px;
          border-radius: 27px;
          background: transparent;
          pointer-events: none;
        }

        .projectCard:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.22);
        }

        .projectTitle {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--text);
        }

        .projectCard p {
          margin: 0 0 24px;
          color: var(--text);
          line-height: 1.8;
          min-height: 68px;
        }

        .projectLink {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--accent);
          font-size: 0.95rem;
          font-weight: 600;
          word-break: break-word;
        }

        @keyframes borderShift {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 880px) {
          .projectSection {
            padding: 100px 24px;
          }

          .projectHeader h2 {
            font-size: clamp(2.4rem, 5vw, 3.6rem);
          }
        }
      `}</style>
    </section>
  );
}
