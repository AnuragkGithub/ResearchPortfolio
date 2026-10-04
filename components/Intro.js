export default function Intro() {
  return (
    <section className="intro">
      <div className="introCard">
        <h2>Not just a Developer. Engineer of realistic systems, enterprise workflows, and high-impact digital products.</h2>
        <div className="aboutBody">
          <p>
            I build production-ready solutions at the intersection of cloud automation, data pipelines, and enterprise user experiences. My work is grounded in scalable architecture, rigorous validation, and a strong focus on delivering measurable business outcomes.
          </p>
          <p>
            From ServiceNow workflow engineering to AI-enhanced data systems and full-stack Next.js products, I create polished digital experiences that work reliably in real operational environments.
          </p>
        </div>
      </div>

      <style jsx>{`
        .intro {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 8%;
          background: transparent;
        }

        .introCard {
          max-width: 760px;
          width: 100%;
          padding: 52px;
          border-radius: 32px;
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-soft);
          backdrop-filter: blur(18px);
          transform: translateZ(0);
        }

        h2 {
          margin: 0;
          font-size: clamp(2.8rem, 5vw, 4.4rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--text);
        }

        p {
          margin: 24px 0 0;
          font-size: 1.05rem;
          line-height: 1.9;
          color: var(--text-muted);
        }

        .aboutBody {
          margin-top: 32px;
          display: grid;
          gap: 18px;
        }

        .aboutBody p {
          max-width: 720px;
          font-size: 1.05rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .intro {
            padding: 100px 24px;
          }

          .introCard {
            padding: 36px;
          }
        }
      `}</style>
    </section>
  );
}
