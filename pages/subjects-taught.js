import AcademicLayout from "../components/AcademicLayout";
const courses = [
  {
    number: "01",
    title: "Data Structures and Algorithms",
    short: "DSA",
    description:
      "Understanding data organization, algorithm design, and efficient problem-solving through fundamental data structures and algorithms.",
    topics: [
      "Arrays",
      "Linked Lists",
      "Stacks & Queues",
      "Searching & Sorting",
      "Trees",
      "Algorithm Analysis",
    ],
  },
  {
    number: "02",
    title: "Introduction to Python Programming",
    short: "PYTHON",
    description:
      "Building programming foundations through practical examples, structured coding exercises, and logical problem-solving.",
    topics: [
      "Variables & Data Types",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Lists",
    ],
  },
  {
    number: "03",
    title: "Software Engineering",
    short: "SOFTWARE",
    description:
      "Exploring systematic software development, requirements engineering, software design, testing, and project management.",
    topics: [
      "Process Models",
      "Requirements Engineering",
      "SRS",
      "System Modelling",
      "Agile & Scrum",
      "Risk Management",
    ],
  },
];

const responsibilities = [
  {
    number: "01",
    title: "Academic Coordination",
    description:
      "Serving as coordinator for a second-year undergraduate section, supporting academic coordination and student-related activities.",
  },
  {
    number: "02",
    title: "GUVI-HCL Coordination",
    description:
      "Coordinating academic activities and associated student learning initiatives.",
  },
  {
    number: "03",
    title: "Interdisciplinary Project",
    description:
      "Guiding a second-year undergraduate IDP team through interdisciplinary project development.",
  },
  {
    number: "04",
    title: "Minor Project Mentoring",
    description:
      "Guiding a fourth-year undergraduate Minor Project team through project implementation.",
  },
  {
    number: "05",
    title: "Technical Mentoring",
    description:
      "Mentoring students in software development, machine learning, project implementation, and research-oriented problem-solving.",
  },
];

export default function SubjectsTaught() {
  return (
    <AcademicLayout>
    <main className="academicPage">
      <div className="academicShell">
        <header className="academicNav">
          <a href="/" className="academicBrand">
            AK <span>/ RESEARCH PORTFOLIO</span>
          </a>
          <a href="/" className="academicBack">
            Back to portfolio ↗
          </a>
        </header>

        <section className="academicHero">
          <div className="academicEyebrow">
            <span>TEACHING</span>
            <span>FIELD NOTE 01</span>
          </div>

          <h1>Subjects Taught</h1>

          <p>
            Teaching computer science through conceptual clarity,
            practical programming, and structured problem-solving.
          </p>

          <div className="academicMeta">
            <span>03 CURRENT COURSES</span>
            <span>ACADEMICS / MENTORING</span>
          </div>
        </section>

        <section className="academicSection">
          <div className="academicSectionHeading">
            <span>01 / COURSES</span>
            <h2>Teaching & Learning</h2>
          </div>

          <div className="courseGrid">
            {courses.map((course) => (
              <article className="courseCard" key={course.number}>
                <div className="courseMeta">
                  <span>{course.number} / COURSE</span>
                  <span>{course.short}</span>
                </div>

                <h3>{course.title}</h3>
                <p>{course.description}</p>

                <div className="topicList">
                  {course.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>

                <div className="courseFooter">
                  <span>UNDERGRADUATE TEACHING</span>
                  <span>↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="academicSection responsibilitiesSection">
          <div className="academicSectionHeading">
            <span>02 / BEYOND THE CLASSROOM</span>
            <h2>Academic Responsibilities</h2>
            <p>
              Supporting student development through coordination,
              project guidance, and technical mentoring.
            </p>
          </div>

          <div className="responsibilityList">
            {responsibilities.map((item) => (
              <article className="responsibilityItem" key={item.number}>
                <span className="responsibilityNumber">
                  {item.number}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="responsibilityArrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <footer className="academicFooter">
          <span>ANURAG KARMAKAR</span>
          <span>RESEARCH / TEACHING / EXPLORATION</span>
        </footer>
      </div>
      

      <style jsx>{`
        .academicPage {
          min-height: 100vh;
          padding: 0 24px;
          color: var(--text, #edf1e9);
          background: var(--bg-gradient, #101c19);
        }

        .academicShell {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .academicNav,
        .academicEyebrow,
        .academicMeta,
        .courseMeta,
        .courseFooter,
        .academicFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .academicNav {
          min-height: 76px;
          border-bottom: 1px solid var(--border, #2b3b35);
        }

        .academicBrand,
        .academicBack {
          color: inherit;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
        }

        .academicBrand span {
          margin-left: 8px;
          color: var(--text-muted, #a6b5ad);
          font-size: 10px;
          letter-spacing: 1px;
        }

        .academicBack {
          color: var(--accent, #7bc9a5);
        }

        .academicHero {
          max-width: 860px;
          margin: 110px auto 100px;
        }

        .academicEyebrow,
        .academicMeta,
        .courseMeta,
        .courseFooter,
        .academicSectionHeading > span,
        .academicFooter {
          color: var(--text-muted, #a6b5ad);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .academicEyebrow span:first-child {
          color: var(--accent, #7bc9a5);
        }

        .academicHero h1 {
          margin: 30px 0 22px;
          font-family: Georgia, serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 500;
          letter-spacing: -0.055em;
          line-height: 1.05;
        }

        .academicHero > p,
        .academicSectionHeading > p {
          max-width: 680px;
          color: var(--text-muted, #a6b5ad);
          font-size: 16px;
          line-height: 1.9;
        }

        .academicMeta {
          justify-content: flex-start;
          flex-wrap: wrap;
          margin-top: 38px;
          padding-top: 20px;
          border-top: 1px solid var(--border, #2b3b35);
        }

        .academicSection {
          margin: 0 auto 110px;
        }

        .academicSectionHeading {
          margin-bottom: 32px;
        }

        .academicSectionHeading > span {
          color: var(--accent, #7bc9a5);
        }

        .academicSectionHeading h2 {
          margin: 14px 0;
          font-family: Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .courseGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .courseCard {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 26px;
          border: 1px solid var(--border, #2b3b35);
          border-radius: 18px;
          background: var(--panel, rgba(255, 255, 255, 0.025));
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .courseCard:hover {
          transform: translateY(-5px);
          border-color: var(--accent, #7bc9a5);
        }

        .courseMeta {
          font-size: 9px;
          letter-spacing: 1px;
        }

        .courseMeta span:last-child {
          color: var(--accent, #7bc9a5);
        }

        .courseCard h3 {
          margin: 28px 0 14px;
          font-size: 23px;
          line-height: 1.3;
          letter-spacing: -0.6px;
        }

        .courseCard > p,
        .responsibilityItem p {
          color: var(--text-muted, #a6b5ad);
          font-size: 13px;
          line-height: 1.85;
        }

        .courseCard > p {
          margin: 0 0 24px;
        }

        .topicList {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          padding-top: 10px;
        }

        .topicList span {
          padding: 7px 9px;
          border: 1px solid var(--border, #2b3b35);
          border-radius: 6px;
          color: var(--text-muted, #a6b5ad);
          font-size: 10px;
        }

        .courseFooter {
          margin-top: 28px;
          padding-top: 18px;
          border-top: 1px solid var(--border, #2b3b35);
          font-size: 9px;
        }

        .courseFooter span:last-child,
        .responsibilityArrow {
          color: var(--accent, #7bc9a5);
        }

        .responsibilitiesSection {
          max-width: 920px;
        }

        .responsibilityList {
          border-top: 1px solid var(--border, #2b3b35);
        }

        .responsibilityItem {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr) 20px;
          align-items: start;
          gap: 18px;
          padding: 24px 4px;
          border-bottom: 1px solid var(--border, #2b3b35);
        }

        .responsibilityNumber {
          padding-top: 4px;
          color: var(--accent, #7bc9a5);
          font-size: 11px;
        }

        .responsibilityItem h3 {
          margin: 0 0 8px;
          font-size: 17px;
          font-weight: 600;
        }

        .responsibilityItem p {
          max-width: 700px;
          margin: 0;
        }

        .responsibilityArrow {
          padding-top: 2px;
        }

        .academicFooter {
          min-height: 85px;
          border-top: 1px solid var(--border, #2b3b35);
          font-size: 9px;
        }

        @media (max-width: 900px) {
          .courseGrid {
            grid-template-columns: 1fr;
          }

          .courseCard {
            padding: 24px;
          }

          .academicHero {
            margin: 85px auto;
          }
        }

        @media (max-width: 560px) {
          .academicPage {
            padding: 0 18px;
          }

          .academicNav {
            min-height: 68px;
          }

          .academicBrand span {
            display: block;
            margin: 5px 0 0;
            font-size: 8px;
          }

          .academicBack {
            font-size: 10px;
          }

          .academicHero {
            margin: 72px auto;
          }

          .academicEyebrow,
          .academicMeta {
            font-size: 9px;
          }

          .academicSection {
            margin-bottom: 75px;
          }

          .responsibilityItem {
            grid-template-columns: 28px minmax(0, 1fr) 14px;
            gap: 10px;
          }

          .academicFooter {
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 8px;
            padding: 20px 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .courseCard {
            transition: none;
          }
        }
      `}</style>
    </main>
    </AcademicLayout>
  );
}
