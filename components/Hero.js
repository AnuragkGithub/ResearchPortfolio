export default function Hero() {
  const name = "ANURAG KARMAKAR";

  return (
    <>
      <section id="home" className="hero">
        {/* Sleek background glow effect */}
        <div className="glow-container">
          <div className="glow-sphere sphere-1" />
          <div className="glow-sphere sphere-2" />
        </div>

        <div className="heroContent">
          <div className="badge">
            <span className="badge-dot"></span>
            SOFTWARE ENGINEER • SERVICENOW • FULL STACK
          </div>

          <h1 className="name-container">
            {name.split("").map((char, index) => {
              if (char === " ") {
                return (
                  <span key={index} className="space">
                    &nbsp;
                  </span>
                );
              }
              return (
                <span
                  key={index}
                  className="letter"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  {char}
                </span>
              );
            })}
          </h1>

          <div className="heroAbout">
            <h2>About Me</h2>
            <p>
              I design enterprise systems, AI-enabled workflows, and resilient digital products that move teams from prototype to production with confidence.
            </p>
          </div>

          <div className="recruiter-points">
            <div className="bullet-point">
              <span className="bullet-icon">🚀</span>
              <p><strong>ServiceNow Certified System Administrator (CSA)</strong> with enterprise-grade workflow engineering and production support experience.</p>
            </div>
            <div className="bullet-point">
              <span className="bullet-icon">💡</span>
              <p><strong>Enterprise & AI-Enabled Systems:</strong> Built FastAPI + Gemini AI pipelines, Django REST ingestion platforms, and SaaS-ready Next.js products.</p>
            </div>
            <div className="bullet-point">
              <span className="bullet-icon">📈</span>
              <p><strong>Delivery Focused:</strong> Resolved critical production issues, improved validation workflows, and applied root-cause analysis to reduce recurring support tickets.</p>
            </div>
          </div>

          <div className="buttons">
            <a href="#projects" className="primary-btn">
              See My Work
            </a>
            <a
              href="mailto:anuragkar2503@gmail.com"
              className="secondary-btn"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 140px 8% 80px 8%;
          background: var(--bg-gradient);
        }

        .glow-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }

        .glow-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.14;
          animation: pulseGlow 8s infinite alternate ease-in-out;
        }

        .sphere-1 {
          width: 420px;
          height: 420px;
          background: rgba(56, 189, 248, 0.26);
          top: 10%;
          left: 8%;
        }

        .sphere-2 {
          width: 360px;
          height: 360px;
          background: rgba(192, 132, 252, 0.2);
          bottom: 12%;
          right: 10%;
          animation-delay: -3s;
        }

        .heroContent {
          max-width: 950px;
          text-align: center;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--panel);
          color: var(--text);
          border: 1px solid var(--border);
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 28px;
          text-transform: uppercase;
          backdrop-filter: blur(12px);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent);
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.45);
        }

        .name-container {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: clamp(3rem, 7.5vw, 6.2rem);
          font-weight: 900;
          line-height: 1.04;
          margin: 0 0 36px 0;
          letter-spacing: -0.04em;
          background: linear-gradient(90deg, var(--accent), var(--accent-strong), var(--accent-soft));
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rgbShift 7s ease infinite;
          display: inline-flex;
          white-space: nowrap;
          justify-content: center;
        }

        @keyframes rgbShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .letter {
          display: inline-block;
          animation: waveBounce 3.5s ease-in-out infinite;
          transition: transform 0.2s ease;
        }

        .letter:hover {
          animation-play-state: paused;
          transform: translateY(-14px) scale(1.12) rotate(1deg);
          text-shadow: 0 16px 28px rgba(56, 189, 248, 0.4);
        }

        .space { display: inline-block; }

        @keyframes waveBounce {
          0%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(0); }
        }

        .recruiter-points {
          display: grid;
          gap: 18px;
          max-width: 720px;
          text-align: left;
          background: var(--panel);
          padding: 28px;
          border-radius: 28px;
          border: 1px solid var(--border);
          backdrop-filter: blur(22px);
          margin-bottom: 40px;
          box-shadow: var(--shadow-soft);
        }

        .bullet-point {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .bullet-icon {
          font-size: 1.3rem;
          line-height: 1.4;
        }

        .bullet-point p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin: 0;
        }

        .bullet-point p strong {
          color: var(--text);
        }

        .buttons {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 26px;
          border-radius: 999px;
          border: 1px solid var(--border);
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .primary-btn {
          background: linear-gradient(135deg, var(--accent), var(--accent-soft));
          color: #070a13;
          font-weight: 700;
        }

        .secondary-btn {
          background: var(--panel);
          color: var(--text);
        }

        .primary-btn:hover,
        .secondary-btn:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
        }

        @media (max-width: 900px) {
          .hero {
            padding: 120px 6% 60px 6%;
          }

          .badge {
            padding: 8px 14px;
          }

          .buttons {
            justify-content: center;
          }
        }

        .primary-btn {
          background: linear-gradient(135deg, var(--accent), var(--accent-soft));
          color: #070a13;
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 24px rgba(56, 189, 248, 0.22);
          border: 1px solid transparent;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(56, 189, 248, 0.24);
        }

        .secondary-btn {
          background: var(--panel);
          color: var(--text);
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 14px;
          text-decoration: none;
          border: 1px solid var(--border);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .secondary-btn:hover {
          transform: translateY(-3px);
          background: var(--panel-strong);
          border-color: var(--accent);
        }

        .heroAbout {
          max-width: 720px;
          margin: 0 auto 34px;
          padding: 24px 28px;
          border-radius: 28px;
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-soft);
          backdrop-filter: blur(20px);
          text-align: left;
        }

        .heroAbout h2 {
          margin: 0 0 12px;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          color: var(--text);
          line-height: 1.08;
        }

        .heroAbout p {
          margin: 0;
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 5% 60px 5%;
          }

          .name-container {
            font-size: 2.8rem;
            letter-spacing: -1.5px;
            margin-bottom: 24px;
          }

          .recruiter-points {
            padding: 18px;
            margin-bottom: 30px;
          }

          .bullet-point p {
            font-size: 0.92rem;
          }

          .primary-btn, .secondary-btn {
            padding: 14px 28px;
            font-size: 14px;
            width: 100%;
          }

          .buttons {
            gap: 12px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}