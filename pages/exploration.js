
const explorations = [
  {
    number: "01",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Machine Learning",
    description:
      "Exploring machine learning methods, data-driven modelling, clustering, and evaluation techniques.",
    tags: ["Machine Learning", "Clustering", "Model Evaluation"],
  },
  {
    number: "02",
    category: "COMPUTER VISION",
    title: "Image Understanding",
    description:
      "Investigating image classification, image segmentation, and approaches to visual data analysis.",
    tags: ["Image Classification", "Segmentation", "Deep Learning"],
  },
  {
    number: "03",
    category: "REMOTE SENSING",
    title: "Multispectral Data Analysis",
    description:
      "Exploring satellite observations, spectral indices, land-surface features, and unsupervised analysis.",
    tags: ["Satellite Data", "NDVI", "NDMI", "Clustering"],
  },
  {
    number: "04",
    category: "ENGINEERING",
    title: "Software & Research Projects",
    description:
      "Documenting implementation approaches, technical experiments, research questions, and software prototypes.",
    tags: ["Prototyping", "Implementation", "Research"],
  },
];

export default function Exploration() {
  return (
    <main className="explorationPage">
      <div className="explorationShell">
        <header className="explorationNav">
          <a href="/">AK / RESEARCH PORTFOLIO</a>
          <a href="/">Back to portfolio ↗</a>
        </header>

        <section className="explorationHero">
          <div className="explorationEyebrow">
            <span>OPEN QUESTIONS</span>
            <span>FIELD NOTE 03</span>
          </div>

          <h1>Exploration</h1>

          <p>
            Research directions, technical investigations, and ideas
            explored through experimentation and implementation.
          </p>
        </section>

        <section className="explorationGrid">
          {explorations.map((item) => (
            <article className="explorationCard" key={item.number}>
              <div className="explorationCardMeta">
                <span>{item.number} / EXPLORATION</span>
                <span>↗</span>
              </div>

              <span className="explorationCategory">
                {item.category}
              </span>

              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <div className="explorationTags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="explorationNote">
          <span>RESEARCH NOTE</span>
          <p>
            This space will document specific questions, experimental
            methods, implementation details, and findings as the work
            develops. Individual results will be added when they are
            available and verified.
          </p>
        </section>

        <footer className="explorationFooter">
          <span>ANURAG KARMAKAR</span>
          <span>RESEARCH / TEACHING / EXPLORATION</span>
        </footer>
      </div>

      <style jsx>{`
        .explorationPage {
          min-height: 100vh;
          padding: 0 24px;
          color: var(--text, #edf1e9);
          background: var(--bg-gradient, #101c19);
        }

        .explorationShell {
          width: min(1080px, 100%);
          margin: auto;
        }

        .explorationNav,
        .explorationEyebrow,
        .explorationCardMeta,
        .explorationFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .explorationNav {
          min-height: 76px;
          border-bottom: 1px solid var(--border, #2b3b35);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .explorationNav a {
          color: inherit;
          text-decoration: none;
        }

        .explorationNav a:last-child {
          color: var(--accent, #7bc9a5);
        }

        .explorationHero {
          max-width: 830px;
          margin: 105px auto 75px;
        }

        .explorationEyebrow,
        .explorationCardMeta,
        .explorationNote > span,
        .explorationFooter {
          color: var(--text-muted, #a6b5ad);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.6px;
        }

        .explorationEyebrow span:first-child,
        .explorationCategory,
        .explorationNote > span {
          color: var(--accent, #7bc9a5);
        }

        .explorationHero h1 {
          margin: 28px 0 20px;
          font-family: Georgia, serif;
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 500;
          letter-spacing: -0.06em;
          line-height: 1.05;
        }

        .explorationHero > p,
        .explorationCard > p,
        .explorationNote > p {
          color: var(--text-muted, #a6b5ad);
          font-size: 14px;
          line-height: 1.9;
        }

        .explorationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .explorationCard {
          display: flex;
          flex-direction: column;
          min-height: 290px;
          padding: 28px;
          border: 1px solid var(--border, #2b3b35);
          border-radius: 17px;
          background: var(--panel, rgba(255, 255, 255, 0.025));
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .explorationCard:hover {
          transform: translateY(-4px);
          border-color: var(--accent, #7bc9a5);
        }

        .explorationCardMeta {
          margin-bottom: 34px;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .explorationCardMeta span:last-child {
          color: var(--accent, #7bc9a5);
        }

        .explorationCategory {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .explorationCard h2 {
          margin: 12px 0 8px;
          font-size: 23px;
          letter-spacing: -0.5px;
        }

        .explorationCard > p {
          margin: 0 0 24px;
        }

        .explorationTags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .explorationTags span {
          padding: 7px 9px;
          border: 1px solid var(--border, #2b3b35);
          border-radius: 6px;
          color: var(--text-muted, #a6b5ad);
          font-size: 10px;
        }

        .explorationNote {
          max-width: 760px;
          margin: 85px auto;
          padding: 28px;
          border-left: 2px solid var(--accent, #7bc9a5);
          background: var(--panel, rgba(255, 255, 255, 0.025));
        }

        .explorationNote > p {
          margin-bottom: 0;
        }

        .explorationFooter {
          min-height: 80px;
          border-top: 1px solid var(--border, #2b3b35);
          font-size: 9px;
        }

        @media (max-width: 700px) {
          .explorationGrid {
            grid-template-columns: 1fr;
          }

          .explorationHero {
            margin: 75px auto 55px;
          }

          .explorationCard {
            min-height: 260px;
            padding: 23px;
          }
        }

        @media (max-width: 560px) {
          .explorationPage {
            padding: 0 18px;
          }

          .explorationFooter {
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 8px;
            padding: 20px 0;
          }

          .explorationNote {
            margin: 60px auto;
            padding: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .explorationCard {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
