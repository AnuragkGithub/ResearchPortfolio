
import { useEffect, useState } from "react";

const timeZones = [
  { label: "Asia/Kolkata", value: "Asia/Kolkata" },
  { label: "Europe/London", value: "Europe/London" },
  { label: "America/New_York", value: "America/New_York" },
  { label: "Asia/Singapore", value: "Asia/Singapore" },
  { label: "Your device", value: "local" },
];

export default function AcademicLayout({ children }) {
  const [now, setNow] = useState(null);
  const [zone, setZone] = useState("Asia/Kolkata");
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  const activeZone =
    zone === "local"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : zone;

  const clock = now
    ? new Intl.DateTimeFormat("en-GB", {
        timeZone: activeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      }).format(now)
    : "--:--:--";

  const links = [
    ["Subjects Taught", "/subjects-taught"],
    ["Notes", "/notes"],
    ["Exploration", "/exploration"],
  ];

  return (
    <div className="sharedAcademicLayout">
      <header className="sharedNavbar">
        <div className="navStatus">
          <div className="clockControl">
            <span className="liveDot" />
            <strong>{clock}</strong>
            <select
              aria-label="Select timezone"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
            >
              {timeZones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          <div className="reach">
            <span>PORTFOLIO REACH</span>
            <strong>AK</strong>
          </div>
        </div>

        <nav className="mainLinks">
          <a href="/#home">Overview</a>
          <a href="/#projects">Research</a>
          <a href="/#experience">Experience</a>
          <a href="/#tech">Methods</a>
          <a href="/#contact">Contact</a>

          <details className="academicDropdown">
            <summary>Academic +</summary>
            <div className="academicMenu">
              <a
                href="https://scholar.google.com/citations?user=XKO3qUEAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
              <a
                href="https://www.researchgate.net/profile/Anurag-Karmakar"
                target="_blank"
                rel="noreferrer"
              >
                ResearchGate
              </a>
              <a
                href="https://adamas.academia.edu/ANURAGKarmakar"
                target="_blank"
                rel="noreferrer"
              >
                Academia.edu
              </a>
              <div className="menuDivider" />
              {links.map(([label, href]) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
            </div>
          </details>

          <label className="appearance">
            <span>Appearance</span>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="light">Field Notes</option>
              <option value="dark">Night Lab</option>
              <option value="cyber">Signal</option>
            </select>
          </label>
        </nav>
      </header>

      <div className="academicPageContent">{children}</div>

      <style jsx>{`
        .sharedAcademicLayout {
          min-height: 100vh;
          color: var(--text, #edf1e9);
          background: var(--bg-gradient, #101c19);
        }

        .sharedNavbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: min(96%, 1240px);
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 10px 14px;
          border: 1px solid var(--border, #2b3b35);
          border-radius: 12px;
          background: var(--panel, rgba(16, 28, 25, 0.94));
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(20px);
        }

        .navStatus,
        .clockControl,
        .mainLinks,
        .reach,
        .appearance {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .navStatus {
          min-width: 0;
        }

        .clockControl {
          flex-wrap: wrap;
        }

        .liveDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #7bc9a5;
          box-shadow: 0 0 9px #7bc9a566;
        }

        .clockControl strong {
          color: var(--accent, #7bc9a5);
          font-size: 13px;
          font-variant-numeric: tabular-nums;
        }

        .clockControl select,
        .appearance select {
          max-width: 145px;
          min-width: 0;
          border: 0;
          outline: none;
          background: transparent;
          color: var(--text, #edf1e9);
          font-size: 10px;
          cursor: pointer;
        }

        .clockControl option,
        .appearance option {
          background: #14221d;
          color: #edf1e9;
        }

        .reach {
          gap: 8px;
          white-space: nowrap;
        }

        .reach span,
        .appearance span {
          color: var(--text-muted, #a6b5ad);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .reach strong {
          font-family: Georgia, serif;
          font-size: 17px;
        }

        .mainLinks {
          gap: 17px;
        }

        .mainLinks > a,
        .academicDropdown summary {
          color: var(--text-muted, #a6b5ad);
          font-size: 11px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
        }

        .mainLinks > a:hover,
        .academicDropdown summary:hover {
          color: var(--accent, #7bc9a5);
        }

        .academicDropdown {
          position: relative;
        }

        .academicDropdown summary {
          list-style: none;
        }

        .academicDropdown summary::-webkit-details-marker {
          display: none;
        }

        .academicMenu {
          position: absolute;
          top: 28px;
          right: 0;
          width: 190px;
          padding: 10px;
          border: 1px solid var(--border, #2b3b35);
          border-radius: 10px;
          background: #14221d;
          box-shadow: 0 12px 35px #0004;
        }

        .academicMenu a {
          display: block;
          padding: 10px;
          color: #dce8df;
          font-size: 12px;
          text-decoration: none;
          border-radius: 5px;
        }

        .academicMenu a:hover {
          color: #7bc9a5;
          background: #ffffff09;
        }

        .menuDivider {
          margin: 5px 0;
          border-top: 1px solid #34463d;
        }

        .appearance {
          gap: 7px;
          white-space: nowrap;
        }

        .appearance select {
          max-width: 105px;
          padding: 9px;
          border: 1px solid var(--border, #2b3b35);
          border-radius: 6px;
        }

        .academicPageContent {
          min-height: 100vh;
          padding-top: 100px;
        }

        @media (max-width: 1050px) {
          .sharedNavbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .mainLinks {
            width: 100%;
            flex-wrap: wrap;
          }

          .academicPageContent {
            padding-top: 145px;
          }
        }

        @media (max-width: 600px) {
          .sharedNavbar {
            top: 8px;
            padding: 12px;
          }

          .navStatus {
            width: 100%;
            justify-content: space-between;
          }

          .mainLinks {
            gap: 13px;
          }

          .mainLinks > a,
          .academicDropdown summary {
            font-size: 10px;
          }

          .appearance {
            width: 100%;
            justify-content: space-between;
          }

          .academicPageContent {
            padding-top: 185px;
          }
        }
      `}</style>
    </div>
  );
}
