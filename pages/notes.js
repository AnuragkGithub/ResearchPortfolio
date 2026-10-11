
const collections = [
  {
    number: "01",
    title: "Data Structures and Algorithms",
    description: "Concepts, algorithms, lab programs, and practice exercises.",
    resources: [
      "Conceptual Notes",
      "Algorithms and Code Examples",
      "DSA Lab Programs",
      "Practice Questions",
    ],
  },
  {
    number: "02",
    title: "Introduction to Python Programming",
    description: "Beginner-friendly programming notes and coding exercises.",
    resources: [
      "Programming Fundamentals",
      "Conditional Statements and Loops",
      "Functions and Collections",
      "Coding Exercises",
    ],
  },
  {
    number: "03",
    title: "Software Engineering",
    description: "Course notes, models, case studies, and project documentation.",
    resources: [
      "Software Process Models",
      "Requirements Engineering and SRS",
      "UML and System Modelling",
      "Agile, Scrum, and Risk Management",
    ],
  },
];

export default function Notes() {
  return (
    <main className="notesPage">
      <div className="notesShell">
        <header className="notesNav">
          <a href="/">AK / RESEARCH PORTFOLIO</a>
          <a href="/">Back to portfolio ↗</a>
        </header>

        <section className="notesHero">
          <span>KNOWLEDGE / 02</span>
          <h1>Notes & Resources</h1>
          <p>
            A growing collection of teaching notes, programming examples,
            course concepts, and exercises for undergraduate learning.
          </p>
        </section>

        <section className="notesList">
          {collections.map((collection) => (
            <article className="notesCard" key={collection.number}>
              <div className="notesNumber">{collection.number}</div>

              <div className="notesContent">
                <h2>{collection.title}</h2>
                <p>{collection.description}</p>

                <div className="notesResources">
                  {collection.resources.map((resource) => (
                    <div className="resourceRow" key={resource}>
                      <span>{resource}</span>
                      <span className="resourceStatus">
                        In preparation
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <footer className="notesFooter">
          <span>ANURAG KARMAKAR</span>
          <span>TEACHING / LEARNING / SHARING</span>
        </footer>
      </div>

      <style jsx>{`
        .notesPage {
          min-height: 100vh;
          padding: 0 24px;
          color: var(--text, #edf1e9);
          background: var(--bg-gradient, #101c19);
        }

        .notesShell {
          width: min(1000px, 100%);
          margin: auto;
        }

        .notesNav,
        .notesFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 76px;
          border-bottom: 1px solid var(--border, #2b3b35);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .notesNav a {
          color: inherit;
          text-decoration: none;
        }

        .notesNav a:last-child {
          color: var(--accent, #7bc9a5);
        }

        .notesHero {
          max-width: 780px;
          margin: 100px auto 70px;
        }

        .notesHero > span,
        .notesNumber {
          color: var(--accent, #7bc9a5);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .notesHero h1 {
          margin: 24px 0 18px;
          font-family: Georgia, serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 500;
          letter-spacing: -0.055em;
          line-height: 1.05;
        }

        .notesHero p,
        .notesContent > p {
          color: var(--text-muted, #a6b5ad);
          font-size: 14px;
          line-height: 1.9;
        }

        .notesList {
          display: grid;
          gap: 18px;
          margin-bottom: 90px;
        }

        .notesCard {
          display: grid;
          grid-template-columns: 55px minmax(0, 1fr);
          gap: 20px;
          padding: 28px;
          border: 1px solid var(--border, #2b3b35);
          border-radius: 16px;
          background: var(--panel, rgba(255, 255, 255, 0.025));
        }

        .notesNumber {
          padding-top: 6px;
        }

        .notesContent h2 {
          margin: 0;
          font-size: clamp(19px, 3vw, 25px);
          line-height: 1.4;
        }

        .notesContent > p {
          margin: 8px 0 22px;
        }

        .notesResources {
          border-top: 1px solid var(--border, #2b3b35);
        }

        .resourceRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border, #2b3b35);
          font-size: 13px;
        }

        .resourceStatus {
          color: var(--text-muted, #a6b5ad);
          font-size: 10px;
          white-space: nowrap;
        }

        .notesFooter {
          min-height: 80px;
          color: var(--text-muted, #a6b5ad);
          border-top: 1px solid var(--border, #2b3b35);
          border-bottom: 0;
          font-size: 9px;
        }

        @media (max-width: 560px) {
          .notesPage {
            padding: 0 18px;
          }

          .notesHero {
            margin: 75px auto 55px;
          }

          .notesCard {
            grid-template-columns: 28px minmax(0, 1fr);
            gap: 12px;
            padding: 20px 15px;
          }

          .resourceRow {
            align-items: flex-start;
            flex-direction: column;
            gap: 6px;
          }

          .notesFooter {
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 8px;
            padding: 20px 0;
          }
        }
      `}</style>
    </main>
  );
}
