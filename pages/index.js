// Consolidated portfolio page generated from Portfolio-AK project.
// Place this file at pages/index.js. Keep package.json and Next.js configuration.
// Required packages from the existing project: react, gsap, lenis, next.

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";
import ResearchScene from "../components/ResearchScene";


// ================= CustomCursor.js =================
function CustomCursor() {
  const cursorRef = useRef();

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />

      <style jsx>{`
        .cursor {
          width: 24px;
          height: 24px;
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          backdrop-filter: blur(4px);
          transition: transform 0.08s linear;
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          background: transparent;
        }
      `}</style>
    </>
  );
}


// ================= About.js =================
function About() {
  const technicalAreas = [
    {
      title: "FULL STACK",
      items: "Next.js, React, Node.js, FastAPI, Django REST, PostgreSQL, MongoDB",
    },
    {
      title: "AI / ML",
      items: "Machine Learning, Computer Vision, AI integrations, LLM workflows, Gemini API",
    },
    {
      title: "AI-ASSISTED DEVELOPMENT",
      items: "Vibe coding, prompt-driven development, rapid prototyping, AI-assisted engineering",
    },
  ];

  return (
    <>
      <section id="about" className="about section-padding">
        <div className="aboutContainer">
          <header className="aboutHeader">
            <span className="aboutTag">ABOUT ME</span>
            <h2>A research-minded approach to building useful systems.</h2>
            <p>
              Computer science graduate working across applied AI, data engineering,
              and cybersecurity research.
            </p>
          </header>

          <div className="educationGrid">
            <article className="aboutCard educationCard interactive-card">
              <span className="cardLabel">EDUCATION • M.E.</span>
              <h3>Master of Engineering in Computer Science</h3>
              <p className="institution">
                Thapar Institute of Engineering and Technology, Patiala
              </p>
              <div className="cardMeta">
                <span>Aug 2024 – Aug 2026</span>
                <span className="highlight">CGPA 8.73 / 10</span>
              </div>
            </article>

            <article className="aboutCard educationCard interactive-card">
              <span className="cardLabel">EDUCATION • B.TECH</span>
              <h3>B.Tech Information Technology — Honors (Cyber Security)</h3>
              <p className="institution">
                CHRIST (Deemed to be University), Bangalore
              </p>
              <div className="cardMeta">
                <span>Jun 2019 – Jun 2023</span>
                <span className="highlight">CGPA 8.94 / 10</span>
              </div>
              <div className="rankBadge">🏅 Rank Holder — 2023 Batch</div>
            </article>
          </div>

          <section className="aboutCard technicalCard">
            <div className="sectionEyebrow">CORE TECHNICAL KNOWLEDGE</div>
            <h3 className="sectionTitle">
              Full Stack Development, AI / ML &amp; AI-Assisted Development
            </h3>

            <div className="technicalGrid">
              {technicalAreas.map((area) => (
                <article className="technicalItem" key={area.title}>
                  <span className="technicalLabel">{area.title}</span>
                  <p>{area.items}</p>
                  <span className="hoverHint">Hover to expand</span>
                </article>
              ))}
            </div>
          </section>

          <section className="aboutCard leadershipCard interactive-card">
            <div>
              <div className="sectionEyebrow">LEADERSHIP &amp; COMMUNITY</div>
              <h3 className="sectionTitle">Treasurer — Computer Society of India (CSI)</h3>
              <p>
                Served as Treasurer of the Computer Society of India during my
                undergraduate journey, taking responsibility for student-community
                coordination, organizational activities, and leadership responsibilities
                at the B.Tech level.
              </p>
            </div>
            <div className="leadershipMeta">
              <span>Undergraduate Leadership</span>
              <span>1 Year Experience</span>
            </div>
          </section>
        </div>
      </section>

      <style jsx>{`
        .about {
          min-height: 100vh;
          background: transparent;
          color: var(--text);
        }

        .aboutContainer {
          width: min(1180px, 92vw);
          margin: 0 auto;
        }

        .aboutHeader {
          max-width: 900px;
          margin: 0 auto 58px;
          text-align: center;
        }

        .aboutTag,
        .sectionEyebrow,
        .cardLabel {
          display: inline-block;
          color: var(--text-muted);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.4px;
          text-transform: uppercase;
        }

        .aboutTag {
          padding: 7px 14px;
          margin-bottom: 22px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--panel);
        }

        .aboutHeader h2 {
          margin: 0;
          font-size: clamp(2.7rem, 5.2vw, 5.1rem);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 900;
        }

        .aboutHeader p {
          max-width: 720px;
          margin: 22px auto 0;
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.8;
        }

        .educationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .aboutCard {
          position: relative;
          overflow: hidden;
          padding: 30px;
          border: 1px solid var(--border);
          border-radius: 26px;
          background: var(--panel);
          backdrop-filter: blur(18px);
          box-shadow: var(--shadow-soft);
        }

        .interactive-card {
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .interactive-card:hover {
          transform: translateY(-7px);
          border-color: var(--accent);
          box-shadow:
            0 22px 60px rgba(0, 0, 0, 0.22),
            0 0 0 1px rgba(56, 189, 248, 0.12);
        }

        .cardLabel {
          margin-bottom: 16px;
        }

        .educationCard h3 {
          margin: 0;
          max-width: 520px;
          font-size: clamp(1.35rem, 2vw, 1.8rem);
          line-height: 1.18;
          letter-spacing: -0.025em;
        }

        .institution {
          margin: 16px 0 24px;
          color: var(--text-muted);
          font-size: 0.96rem;
          line-height: 1.65;
        }

        .cardMeta,
        .leadershipMeta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
          color: var(--text-muted);
          font-size: 0.84rem;
        }

        .highlight,
        .rankBadge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 6px 10px;
          border: 1px solid var(--border);
          border-radius: 9px;
          background: var(--tag-bg);
          color: var(--text);
          font-weight: 700;
        }

        .rankBadge {
          margin-top: 15px;
          color: var(--accent);
          font-size: 0.78rem;
        }

        .technicalCard {
          margin-bottom: 20px;
        }

        .sectionTitle {
          margin: 10px 0 24px;
          font-size: clamp(1.45rem, 2.4vw, 2.15rem);
          line-height: 1.18;
          letter-spacing: -0.03em;
        }

        .technicalGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .technicalItem {
          min-height: 150px;
          padding: 22px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: var(--surface-soft);
          transition:
            transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
          cursor: default;
        }

        .technicalLabel {
          display: block;
          color: var(--accent);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
        }

        .technicalItem p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.65;
          transition: font-size 0.3s ease, color 0.3s ease;
        }

        .hoverHint {
          display: block;
          margin-top: 14px;
          color: var(--text-muted);
          opacity: 0.45;
          font-size: 9px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          transition: opacity 0.3s ease;
        }

        .technicalItem:hover {
          transform: translateY(-8px) scale(1.025);
          background: var(--panel-strong);
          border-color: var(--accent);
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.2);
        }

        .technicalItem:hover p {
          font-size: 1rem;
          color: var(--text);
        }

        .technicalItem:hover .hoverHint {
          opacity: 0;
        }

        .leadershipCard {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
        }

        .leadershipCard p {
          max-width: 850px;
          margin: 0;
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.75;
        }

        .leadershipMeta {
          flex: 0 0 auto;
          align-self: flex-end;
          justify-content: flex-end;
          text-align: right;
        }

        @media (max-width: 900px) {
          .aboutContainer {
            width: min(94vw, 760px);
          }

          .educationGrid,
          .technicalGrid {
            grid-template-columns: 1fr;
          }

          .leadershipCard {
            display: block;
          }

          .leadershipMeta {
            margin-top: 22px;
            justify-content: flex-start;
            text-align: left;
          }
        }

        @media (max-width: 560px) {
          .about {
            padding-top: 76px;
            padding-bottom: 76px;
          }

          .aboutHeader {
            margin-bottom: 38px;
          }

          .aboutHeader h2 {
            font-size: clamp(2.35rem, 11vw, 3.5rem);
          }

          .aboutCard {
            padding: 22px;
            border-radius: 20px;
          }

          .technicalItem:hover {
            transform: translateY(-5px);
          }

          .technicalItem:hover p {
            font-size: 0.96rem;
          }
        }
      `}</style>
    </>
  );
}


// ================= Navbar.js =================
function Navbar({ mode, setMode }) {
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [now, setNow] = useState(null);

  const timezones = [
    { id: "Asia/Kolkata", label: "India", short: "IST" },
    { id: "Europe/London", label: "London", short: "GMT / BST" },
    { id: "America/New_York", label: "New York", short: "ET" },
    { id: "America/Los_Angeles", label: "Los Angeles", short: "PT" },
    { id: "Asia/Tokyo", label: "Tokyo", short: "JST" },
    { id: "Asia/Dubai", label: "Dubai", short: "GST" },
    { id: "Australia/Sydney", label: "Sydney", short: "AEDT / AEST" },
  ];

  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const formattedTime = now
    ? new Intl.DateTimeFormat("en-GB", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      }).format(now)
    : "--:--:--";

  const currentZone = timezones.find((zone) => zone.id === timezone) || timezones[0];

  const navigateTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    window.history.pushState(null, "", `#${id}`);

    if (window.__lenis) {
      window.__lenis.scrollTo(target, {
        offset: -95,
        duration: 1.1,
      });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <div className="clockWrap">
        <button
          type="button"
          className="clockButton"
          aria-label="Current time and timezone selector"
        >
          <span className="clockDot" />
          <strong>{formattedTime}</strong>
          <span className="zoneName">{currentZone.id}</span>
          <span className="clockChevron">⌄</span>
        </button>

        <div className="timezoneMenu">
          <div className="timezoneTitle">SELECT TIMEZONE</div>
          {timezones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              className={`timezoneOption ${zone.id === timezone ? "selected" : ""}`}
              onClick={() => setTimezone(zone.id)}
            >
              <span>{zone.label}</span>
              <small>{zone.short}</small>
            </button>
          ))}
        </div>
      </div>

      <PortfolioViews />

      <div className="links">
        <button type="button" onClick={() => navigateTo("home")}>Overview</button>
        <button type="button" onClick={() => navigateTo("projects")}>Research</button>
        <button type="button" onClick={() => navigateTo("experience")}>Experience</button>
        <button type="button" onClick={() => navigateTo("tech")}>Methods</button>
        <button type="button" onClick={() => navigateTo("contact")}>Contact</button>
        <details className="academicLinks">
          <summary>Academic</summary>
          <div className="academicMenu">
            <span className="academicMenuLabel">RESEARCH PROFILES</span>
            <a href="https://scholar.google.com/citations?user=XKO3qUEAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="https://www.researchgate.net/profile/Anurag-Karmakar" target="_blank" rel="noreferrer">ResearchGate</a>
            <a href="https://adamas.academia.edu/ANURAGKarmakar" target="_blank" rel="noreferrer">Academia.edu</a>
            <span className="academicMenuLabel academicMenuDivider">MORE</span>
            <a href="/subjects-taught">Subjects Taught</a>
            <a href="/notes">Notes</a>
            <a href="/exploration">Exploration</a>
          </div>
        </details>
      </div>

      <label className="modeControl">
        <span>Appearance</span>
        <select
          aria-label="Choose appearance"
          value={mode}
          onChange={(event) => setMode(event.target.value)}
        >
          <option value="light">Field Notes</option>
          <option value="dark">Night Lab</option>
          <option value="cyber">Signal</option>
        </select>
      </label>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: min(92%, 1100px);
          z-index: 999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          padding: 10px 14px;
          border-radius: 28px;
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-soft);
          backdrop-filter: blur(20px);
        }

        .clockWrap {
          position: relative;
          flex: 0 0 auto;
        }

        .clockButton {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 38px;
          padding: 7px 10px;
          border-radius: 13px;
          border: 1px solid var(--border);
          background: var(--panel);
          color: var(--text);
          cursor: default;
        }

        .clockDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.8);
        }

        .clockButton strong {
          color: var(--accent);
          font-size: 1rem;
          letter-spacing: 1px;
          font-variant-numeric: tabular-nums;
        }

        .zoneName {
          color: var(--text-muted);
          font-size: 0.67rem;
          white-space: nowrap;
        }

        .clockChevron {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1;
        }

        .timezoneMenu {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          width: 230px;
          padding: 10px;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--panel-strong);
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.38);
          backdrop-filter: blur(20px);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-6px);
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
        }

        .clockWrap:hover .timezoneMenu,
        .clockWrap:focus-within .timezoneMenu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }

        .timezoneTitle {
          padding: 6px 9px 8px;
          color: var(--text-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .timezoneOption {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 9px 10px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          color: var(--text);
          cursor: pointer;
          text-align: left;
          font-size: 0.82rem;
        }

        .timezoneOption:hover,
        .timezoneOption.selected {
          background: var(--panel-strong);
          color: var(--accent);
        }

        .timezoneOption small {
          color: var(--text-muted);
          font-size: 0.67rem;
        }

        .links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .links button {
          border: 0;
          background: transparent;
          color: var(--text);
          padding: 6px 0;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          opacity: 0.86;
          transition: color 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
        }

        .links button:hover {
          opacity: 1;
          color: var(--accent);
          transform: translateY(-1px);
        }

        .academicLinks {
          position: relative;
          flex: 0 0 auto;
        }

        .academicLinks summary {
          padding: 6px 0;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          list-style: none;
          white-space: nowrap;
        }

        .academicLinks summary::-webkit-details-marker { display: none; }
        .academicLinks summary::after { content: " +"; color: var(--accent); }
        .academicLinks[open] summary::after { content: " -"; }

        .academicMenu {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          z-index: 1001;
          display: grid;
          width: 220px;
          padding: 12px;
          border: 1px solid var(--border);
          border-radius: 5px;
          background: var(--panel-strong);
          box-shadow: var(--shadow-soft);
        }

        .academicMenuLabel {
          padding: 7px 8px 5px;
          color: var(--accent);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.2px;
        }

        .academicMenu a {
          padding: 8px;
          border-radius: 3px;
          color: var(--text);
          font-size: 12px;
          text-decoration: none;
        }

        .academicMenu a:hover {
          background: var(--surface-soft);
          color: var(--accent);
        }

        .academicMenuDivider {
          margin-top: 5px;
          border-top: 1px solid var(--border);
          padding-top: 11px;
        }

        .modeControl {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-size: 10px;
        }

        .modeControl select {
          max-width: 124px;
          padding: 8px 25px 8px 9px;
          border: 1px solid var(--border);
          border-radius: 4px;
          background: var(--panel-strong);
          color: var(--text);
          cursor: pointer;
          font: inherit;
          font-size: 11px;
        }

        @media (max-width: 850px) {
          .navbar {
            width: calc(100% - 24px);
          }

          .zoneName {
            display: none;
          }

          .links {
            gap: 10px;
          }

          .links button {
            font-size: 0.76rem;
          }

          .academicLinks summary {
            font-size: 0.76rem;
          }
        }

        @media (max-width: 650px) {
          .navbar {
            top: 10px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            padding: 9px 10px;
            border-radius: 18px;
          }

          .links {
            grid-column: 1 / -1;
            justify-content: space-between;
            gap: 8px;
          }

          .links button {
            font-size: 0.65rem;
          }


          .academicLinks summary { font-size: 0.65rem; }
          .clockButton {
            min-height: 34px;
            padding: 6px 8px;
          }

          .clockButton strong {
            font-size: 0.88rem;
          }

          .modeControl span {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            clip-path: inset(50%);
          }

          .modeControl select {
            max-width: 112px;
            padding: 7px 22px 7px 7px;
            font-size: 10px;
          }

          .timezoneMenu {
            width: 210px;
          }
        }
      `}</style>
    </nav>
  );
}


// ================= Experience.js =================
gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".expCard");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section id="experience" className="experience" ref={sectionRef}>
        {/* Centered experience introduction — kept separate from the job cards */}
        <header className="experienceHeader">
          <p className="tag">RESEARCH &amp; EXPERIENCE</p>
          <h2>Questions explored. Systems put to work.</h2>
          <p className="desc">
            Building scalable workflows, ServiceNow automation, CI/CD operations,
            and enterprise platforms through hands-on software engineering,
            security research, and application development experience.
          </p>
        </header>

        {/* Experience cards remain in their own full-width area */}
        <div className="rightPanel">
          <div className="expCard">
            <div className="jobMeta">
              <span className="company">STMicroelectronics</span>
              <span className="period">July 2025 – June 2026</span>
            </div>
            <h3>Software Engineer</h3>
            <p className="location">Greater Noida, India</p>
            <div className="line" />
            <ul>
              <li>
                Built and maintained <strong>enterprise-scale internal web applications</strong> using
                <strong> TypeScript, Vue.js, and Java (Spring Boot)</strong> with focus on clean architecture
                and maintainability.
              </li>
              <li>
                Designed and implemented <strong>TypeScript-based automation tests</strong> to validate
                <strong> end-to-end application workflows and edge cases</strong>, reducing manual regression effort.
              </li>
              <li>
                Authored <strong>functional, edge-case, and regression</strong> scenarios alongside development
                to ensure business logics.
              </li>
              <li>
                Integrated front-end components with <strong>REST APIs and databases</strong>, contributing to
                performance and reliability improvements.
              </li>
              <li>
                Worked extensively on <strong>ServiceNow Strategic Portfolio Management (SPM)</strong> including
                Resource Assignment, Project Workspace, and Resource Workspace configurations.
              </li>
              <li>
                Actively contributing to the development of a new <strong>ServiceNow Workspace</strong>,
                collaborating with <strong>stakeholders and senior developers</strong>.
              </li>
            </ul>
          </div>

          <div className="expCard">
            <div className="jobMeta">
              <span className="company">Tata Elxsi</span>
              <span className="period">August 2022 – November 2022</span>
            </div>
            <h3>Cyber Security Developer and Researcher</h3>
            <p className="location">Bengaluru, India</p>
            <div className="line" />
            <ul>
              <li>
                Developed a <strong>fuzzing framework</strong> to check for <strong>malicious codes</strong> to
                provide service to around <strong>100+ viewers</strong>.
              </li>
              <li>
                Worked with the team, obtained <strong>security updates</strong> and <strong>vulnerabilities</strong>
                using <strong>Hack The Box software</strong>.
              </li>
              <li>
                Addressed the <strong>security issues</strong> that have affected Netflix over the past three years.
              </li>
            </ul>
          </div>

          <div className="expCard">
            <div className="jobMeta">
              <span className="company">Infelearn</span>
              <span className="period">May 2021 – June 2021</span>
            </div>
            <h3>Software Developer</h3>
            <p className="location">Bengaluru, India</p>
            <div className="line" />
            <ul>
              <li>
                Established a <strong>Web chatbot</strong> using <strong>Jquery</strong> and <strong>Rivescript</strong>
                to <strong>manipulate the conversation</strong> responsibly.
              </li>
              <li>
                Refined and performed a <strong>Donation portal</strong> to help the <strong>20 new users</strong>
                to make the <strong>payments more reliable</strong>.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <style jsx>{`
        .experience {
          min-height: 100vh;
          background: transparent;
          color: var(--text);
          padding: 140px 7%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* The section title now behaves like the redesigned About Me header:
           one centered heading, with no artificial left/right split. */
        .experienceHeader {
          width: min(100%, 1050px);
          margin: 0 auto 70px;
          text-align: center;
        }

        .tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
          opacity: 0.62;
          margin: 0 0 22px;
          padding: 7px 14px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--panel);
        }

        .experienceHeader h2 {
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
          text-align: center;
          font-size: clamp(3rem, 6vw, 6.2rem);
          line-height: 1.02;
          font-weight: 850;
          letter-spacing: -0.055em;
        }

        .desc {
          max-width: 820px;
          margin: 24px auto 0;
          font-size: 1rem;
          line-height: 1.85;
          color: var(--text-muted);
        }

        /* Cards are now below the centered heading, so changing the heading
           alignment does not squeeze or disturb the experience content. */
        .rightPanel {
          width: min(100%, 1080px);
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin: 0 auto;
        }

        .expCard {
          border-radius: 28px;
          padding: 36px;
          background: var(--panel);
          border: 1px solid var(--border);
          backdrop-filter: blur(18px);
          box-shadow: var(--shadow-soft);
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .expCard:hover {
          transform: translateY(-6px);
          border-color: rgba(44, 180, 255, 0.38);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }

        .jobMeta {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }

        .company {
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0.65;
          font-weight: 700;
        }

        .period {
          font-size: 0.95rem;
          opacity: 0.72;
          white-space: nowrap;
        }

        .expCard h3 {
          font-size: clamp(1.45rem, 2.2vw, 2rem);
          line-height: 1.2;
          font-weight: 800;
          margin: 0 0 8px;
        }

        .location {
          opacity: 0.72;
          margin: 0 0 24px;
        }

        .line {
          height: 1px;
          background: var(--border);
          margin-bottom: 22px;
        }

        .expCard ul {
          padding-left: 20px;
          margin: 0;
          line-height: 1.8;
          opacity: 0.88;
        }

        .expCard li {
          margin-bottom: 12px;
        }

        .expCard li:last-child {
          margin-bottom: 0;
        }

        .expCard strong {
          color: var(--text);
          font-weight: 700;
        }

        @media (max-width: 1000px) {
          .experience {
            padding: 100px 6%;
          }

          .experienceHeader {
            margin-bottom: 55px;
          }
        }

        @media (max-width: 600px) {
          .experience {
            min-height: auto;
            padding: 76px 16px;
          }

          .experienceHeader {
            margin-bottom: 42px;
          }

          .experienceHeader h2 {
            max-width: 100%;
            font-size: clamp(2.5rem, 12vw, 4.1rem);
            line-height: 1.03;
            letter-spacing: -0.045em;
          }

          .desc {
            font-size: 0.94rem;
            line-height: 1.75;
          }

          .expCard {
            padding: 24px;
            border-radius: 20px;
          }

          .jobMeta {
            display: block;
          }

          .period {
            display: block;
            margin-top: 7px;
            white-space: normal;
          }

          .expCard h3 {
            font-size: 1.45rem;
          }

          .expCard ul {
            line-height: 1.7;
          }
        }
      `}</style>
    </>
  );
}


// ================= FeaturedCaseStudy.js =================
// components/FeaturedCaseStudy.js
function DailyThought() {
  const thoughts = [
    "Good research does not rush to an answer; it makes the next question clearer.",
    "A useful model is not the most complex one. It is the one whose assumptions we can explain.",
    "The strongest systems make uncertainty visible, then give us a way to test it.",
    "Measure what changed, not only what shipped.",
    "Curiosity starts the work; reproducibility lets others trust it.",
    "A prototype is a question made tangible.",
    "Scientific thinking pairs imagination with evidence.",
  ];
  const dayNumber = Math.floor(Date.now() / 86400000);
  const thought = thoughts[dayNumber % thoughts.length];
  const date = new Date(dayNumber * 86400000).toISOString().slice(0, 10);
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(dayNumber * 86400000));

  return (
    <section className="dailyThought section-padding" aria-labelledby="daily-thought-title">
      <div className="dailyThoughtInner">
        <div className="dailyThoughtMeta">
          <span id="daily-thought-title">TODAY'S FIELD NOTE</span>
          <time dateTime={date}>{formattedDate}</time>
        </div>
        <blockquote>{thought}</blockquote>
        <span className="dailyThoughtByline">A note on inquiry, evidence, and making.</span>
      </div>
    </section>
  );
}


function PortfolioViews() {
  const [count, setCount] = useState(null);
  const [status, setStatus] = useState("loading");
  const requestStarted = useRef(false);

  useEffect(() => {
    if (requestStarted.current) return;
    requestStarted.current = true;

    fetch("/api/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{}",
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("Viewer counter request failed");
        const result = await response.json();
        if (!Number.isSafeInteger(result.count) || result.count < 0) {
          throw new Error("Viewer counter returned an invalid count");
        }
        setCount(result.count);
        setStatus("ready");
      })
      .catch(() => setStatus("unavailable"));
  }, []);

  return (
    <div className="portfolioViews" role="group" aria-label="Portfolio reach">
      <div className="portfolioViewsInner">
        <span className="portfolioViewsLabel">PORTFOLIO REACH</span>
        <strong className="portfolioViewsCount" aria-live="polite">
          {count === null
            ? status === "unavailable" ? "Not set up" : "..."
            : count.toLocaleString()}
        </strong>
        <span className="portfolioViewsCaption">
          {status === "unavailable" ? "connect Supabase to track page views" : "total page views"}
        </span>
        <span className="visuallyHidden" aria-live="polite">
          {status === "unavailable" ? "Page-view count is unavailable." : ""}
        </span>
      </div>
    </div>
  );
}


// ================= Contact.js =================
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contactCard">
        <div className="label">Contact</div>

        <h2>
          Have a question worth investigating?
        </h2>

        <p>
          I welcome conversations about applied research, thoughtful collaboration,
          and the ideas that become useful tools.
        </p>

        <div className="contactList">
          <a href="tel:+918073497325" aria-label="Call +91 80734 97325">Phone</a>
          <a href="mailto:anuragkar2503@gmail.com" aria-label="Email anuragkar2503@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/anurag-karmakar-a23b8918a/" target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
            LinkedIn
          </a>
          <a href="https://github.com/AnuragkGithub" target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
            GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        .contact {
          min-height: 100vh;
          background: transparent;
          padding: 120px 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text);
        }

        .contactCard {
          max-width: 760px;
          width: 100%;
          padding: clamp(22px, 6vw, 60px);
          border-radius: 32px;
          background: var(--panel);
          border: 1px solid var(--border);
          backdrop-filter: blur(22px);
          box-shadow: var(--shadow-soft);
        }

        .label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          opacity: 0.72;
          margin-bottom: 24px;
          color: var(--text-muted);
        }

        h2 {
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 1.02;
          margin-bottom: 28px;
          letter-spacing: -1px;
          color: var(--text);
        }

        p {
          font-size: 1.05rem;
          line-height: 1.8;
          opacity: 0.85;
          max-width: 620px;
          margin-bottom: 42px;
          color: var(--text-muted);
        }

        .contactList {
          display: grid;
          gap: 18px;
        }

        .contactList a {
          display: inline-flex;
          align-items: center;
          padding: 16px 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border);
          color: var(--text);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .contactList a:hover {
          transform: translateY(-2px);
          background: rgba(56, 189, 248, 0.14);
        }

        @media (max-width: 900px) {
          .contact {
            min-height: auto;
            padding: 80px clamp(20px, 5vw, 40px);
          }
        }

        @media (max-width: 560px) {
          .contact {
            padding: 76px 16px;
          }

          h2 {
            font-size: clamp(2rem, 9vw, 3.2rem);
            line-height: 1.1;
          }

          p {
            margin-bottom: 30px;
            font-size: 0.98rem;
          }

          .contactList {
            gap: 12px;
          }

          .contactList a {
            min-height: 48px;
            padding: 13px 16px;
          }
        }
      `}</style>
    </section>
  );
}


// ================= Hero.js (custom split-screen landing) =================
function Hero({ mode, onSceneReady, playing }) {
  const name = "ANURAG KARMAKAR";

  return (
    <>
      <section
        id="home"
        className="heroSplitStage"
      >
        <div className="heroSplitPin">
          <div className="heroGridTexture" aria-hidden="true" />

          <div className="heroSplitLayout">
            <div className="heroSplitCopy">
              <div className="heroSplitInner">
                <div className="badge">
                  <span className="badge-dot" />
                  APPLIED AI • CYBERSECURITY • DATA SYSTEMS
                </div>

                <h1 className="name-container" aria-label={name}>
                  <span className="name-word">ANURAG</span>
                  <span className="name-word name-surname">KARMAKAR</span>
                </h1>

                <div className="heroAbout">
                  <h2>Research interests</h2>
                  <p>
                    I work across applied AI, cybersecurity, and data systems,
                    turning open-ended questions into tools people can test and use.
                  </p>
                  <p className="heroAboutExtra">
                    My approach combines careful investigation with hands-on
                    engineering, from security research to production-ready prototypes.
                  </p>
                </div>

                <div className="buttons heroSplitButtons">
                  <button type="button" className="primary-btn" onClick={() => {
                    const target = document.getElementById("projects");
                    if (target) {
                      window.history.pushState(null, "", "#projects");
                      if (window.__lenis) {
                        window.__lenis.scrollTo(target, { offset: -95, duration: 1.1 });
                      } else {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }
                  }}>Explore selected work</button>
                  <button type="button" className="secondary-btn" onClick={() => {
                    const target = document.getElementById("contact");
                    if (target) {
                      window.history.pushState(null, "", "#contact");
                      if (window.__lenis) {
                        window.__lenis.scrollTo(target, { offset: -95, duration: 1.1 });
                      } else {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }
                  }}>Start a conversation</button>
                </div>
              </div>
            </div>

            <aside className="heroResearchVisual" aria-label="Research visualization">
              <ResearchScene mode={mode} onReady={onSceneReady} playing={playing} />
            </aside>
          </div>

          <div className="heroScrollCue">
            <span className="scrollCueLine" />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>

      <style jsx>{`
        .heroSplitStage {
          position: relative;
          height: 200vh;
          background: var(--bg-gradient);
          color: var(--text);
          isolation: isolate;
        }

        .heroSplitPin {
          position: sticky;
          top: 0;
          height: 100svh;
          min-height: 680px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 115px 5vw 70px;
          box-sizing: border-box;
          background: var(--bg-gradient);
        }

        .heroGridTexture {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.22;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to right, #000, transparent 82%);
        }

        .heroSplitLayout {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3vw;
          position: relative;
          z-index: 2;
        }

        /* Centered end-state: all hero content moves and resizes as one unit. */
        .heroSplitStage.is-centered .heroSplitLayout {
          justify-content: center;
          gap: 0;
        }

        .heroSplitStage.is-centered .heroSplitCopy {
          flex-basis: 100% !important;
          width: 100%;
          transform: translateX(0) !important;
        }

        .heroSplitStage.is-centered .heroSplitInner {
          max-width: 1220px;
          width: min(100%, 1220px);
          align-items: center;
          text-align: center;
        }

        .heroSplitStage.is-centered .badge {
          margin-left: auto;
          margin-right: auto;
        }

        .heroSplitStage.is-centered .name-container {
          justify-content: center;
          text-align: center;
          width: 100%;
          max-width: 100%;
          font-size: clamp(2.25rem, 4.8vw, 5.1rem);
          line-height: 1.05;
          letter-spacing: -0.055em;
          white-space: nowrap;
          flex-wrap: nowrap;
          gap: 0.16em;
          margin-bottom: 28px;
        }

        .heroSplitStage.is-centered .heroAbout,
        .heroSplitStage.is-centered .heroSplitButtons {
          width: 100%;
          justify-content: center;
          gap: 18px;
        }

        .heroSplitStage.is-centered .heroSplitButtons button {
          min-width: 160px;
          min-height: 52px;
          padding: 15px 30px;
          font-size: 15px;
        }

        .heroSplitStage.is-centered .heroResearchVisual {
          flex-basis: 0 !important;
          width: 0;
          opacity: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .heroSplitCopy {
          min-width: 0;
          flex-shrink: 0;
          transition: flex-basis 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: flex-basis, transform;
        }

        .heroSplitInner {
          width: 100%;
          max-width: 790px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--panel);
          color: var(--text);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 22px;
          backdrop-filter: blur(14px);
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 7px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 12px var(--accent);
        }

        .name-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          margin: 0 0 25px;
          font-family: var(--font-sans);
          font-size: 74px;
          line-height: 1.02;
          font-weight: 900;
          letter-spacing: 0;
          color: var(--text);
        }

        .name-word {
          display: block;
          max-width: 100%;
          white-space: nowrap;
        }

        .name-surname { color: var(--accent); }

        .heroAbout {
          width: 100%;
          box-sizing: border-box;
          padding: 22px 24px;
          margin-bottom: 18px;
          border: 1px solid var(--border);
          border-radius: 14px;
          border-left: 2px solid var(--accent);
          background: var(--panel);
          box-shadow: var(--shadow-soft);
          backdrop-filter: blur(18px);
          transition: transform 350ms ease, border-color 350ms ease,
            box-shadow 350ms ease, background 350ms ease;
        }

        .heroAbout:hover {
          transform: translateY(-6px);
          border-color: var(--accent);
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.24),
            0 0 0 1px color-mix(in srgb, var(--accent) 30%, transparent);
          background: var(--panel-strong);
        }

        .heroAbout h2 {
          margin: 0 0 10px;
          font-size: clamp(1.5rem, 2vw, 2rem);
          color: var(--text);
        }

        .heroAbout p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.96rem;
          line-height: 1.7;
        }

        .heroAbout .heroAboutExtra { margin-top: 9px; }

        .recruiter-points {
          display: grid;
          width: 100%;
          box-sizing: border-box;
          gap: 13px;
          padding: 20px 22px;
          margin-bottom: 22px;
          border: 1px solid var(--border);
          border-radius: 22px;
          background: var(--panel);
          box-shadow: var(--shadow-soft);
          backdrop-filter: blur(18px);
        }

        .bullet-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .bullet-icon { flex-shrink: 0; font-size: 1.1rem; line-height: 1.5; }

        .bullet-point p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.6;
        }

        .bullet-point strong { color: var(--text); }

        .heroSplitButtons {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary-btn, .secondary-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 48px;
          padding: 13px 25px;
          border-radius: 13px;
          border: 1px solid var(--border);
          text-decoration: none;
          font-size: 14px;
          cursor: pointer;
          font-weight: 700;
          transition: transform 250ms ease, box-shadow 250ms ease,
            background 250ms ease, border-color 250ms ease;
        }

        .primary-btn {
          color: #07111d;
          background: linear-gradient(135deg, var(--accent), var(--accent-soft));
          border-color: transparent;
          box-shadow: 0 10px 28px rgba(56, 189, 248, 0.2);
        }

        .secondary-btn { color: var(--text); background: var(--panel); }
        .primary-btn:hover, .secondary-btn:hover { transform: translateY(-3px); }
        .secondary-btn:hover { border-color: var(--accent); background: var(--panel-strong); }

        .heroResearchVisual {
          min-width: 0;
          flex-shrink: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: flex-basis 700ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 600ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: flex-basis, opacity, transform;
        }

        .heroScrollCue {
          position: absolute;
          bottom: 25px;
          left: 50%;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          white-space: nowrap;
          transform: translateX(-50%);
          opacity: 0.75;
          transition: opacity 300ms ease;
        }

        .heroScrollCueHidden { opacity: 0; }
        .scrollCueLine {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: var(--accent);
          animation: scrollCuePulse 1.6s ease-in-out infinite;
        }

        @keyframes scrollCuePulse {
          0%, 100% { transform: scaleX(0.55); opacity: 0.45; }
          50% { transform: scaleX(1); opacity: 1; }
        }

        @keyframes heroGlowDrift {
          from { transform: translate3d(-4%, -3%, 0) scale(0.92); }
          to { transform: translate3d(6%, 5%, 0) scale(1.08); }
        }

        @media (max-width: 1100px) {
          .heroSplitPin { padding-left: 4vw; padding-right: 4vw; }
          .heroSplitLayout { gap: 2vw; }
          .heroSplitCopy { flex-basis: 58% !important; }
          .heroResearchVisual { flex-basis: 42% !important; }
          .name-container { font-size: 56px; }
          .heroAbout { padding: 18px 20px; }
          .recruiter-points { padding: 17px 19px; gap: 10px; }
          .bullet-point p { font-size: 0.82rem; }
        }

        @media (max-width: 1100px) {
          .heroSplitStage.is-centered .name-container {
            font-size: 56px;
          }
          .heroSplitStage.is-centered .heroSplitInner {
            max-width: 800px;
          }
        }

        @media (max-width: 760px) {
          .heroSplitStage { height: auto; min-height: 100svh; }
          .heroSplitPin {
            position: relative;
            height: auto;
            min-height: 100svh;
            padding: 115px 5% 60px;
            overflow: hidden;
          }
          .heroSplitLayout { display: flex; flex-direction: column; gap: 38px; }
          .heroSplitCopy, .heroResearchVisual {
            flex-basis: auto !important;
            width: 100%;
            transform: none !important;
            opacity: 1 !important;
          }
          .heroSplitStage.is-centered .heroResearchVisual {
            flex-basis: auto !important;
            width: 100%;
            opacity: 1;
            pointer-events: auto;
            overflow: visible;
          }
          .heroSplitStage.is-centered .heroSplitInner {
            align-items: flex-start;
            text-align: left;
          }
          .heroSplitStage.is-centered .name-container {
            justify-content: flex-start;
            text-align: left;
            font-size: 48px;
            white-space: normal;
            flex-wrap: wrap;
          }
          .heroSplitStage.is-centered .heroSplitButtons {
            justify-content: flex-start;
          }
          .heroSplitStage.is-centered .heroAbout,
          .heroSplitStage.is-centered .recruiter-points {
            max-width: 100%;
          }
          .heroSplitInner { max-width: 620px; }
          .name-container { font-size: 48px; }
          .heroResearchVisual { max-width: 600px; }
          .heroScrollCue { display: none; }
        }

        @media (max-width: 480px) {
          .heroSplitPin { padding-top: 105px; }
          .badge { font-size: 8px; letter-spacing: 0.9px; padding: 8px 10px; }
          .heroAbout { padding: 17px; }
          .heroAbout p { font-size: 0.9rem; }
          .recruiter-points { padding: 16px; }
          .bullet-point p { font-size: 0.8rem; }
          .heroSplitButtons { width: 100%; }
          .heroSplitButtons button { flex: 1 1 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .heroSplitCopy, .heroResearchVisual,
          .heroScrollCue, .scrollCueLine {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}


// ================= TechStack.js =================
gsap.registerPlugin(ScrollTrigger);
function TechStack() {
  const sectionRef = useRef();

  useEffect(() => {
    const cards = gsap.utils.toArray(".skillGroup");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const skillGroups = [
    {
      title: "Languages & Web",
      description: "Core languages and standards used to build for the web.",
      skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      description: "Frameworks for component-driven interfaces and applications.",
      skills: ["React", "Next.js", "AngularJS", "Vue.js"],
    },
    {
      title: "Backend & APIs",
      description: "Application services, integrations, and API development.",
      skills: ["Node.js", "FastAPI", "Django REST", "Spring Boot", "REST APIs"],
    },
    {
      title: "Data & Cloud",
      description: "Relational and document data stores with cloud foundations.",
      skills: ["MongoDB", "PostgreSQL", "AWS"],
    },
    {
      title: "AI & Machine Learning",
      description: "Applied AI capabilities across product and engineering workflows.",
      skills: ["Machine Learning", "Computer Vision", "LLM Workflows", "Gemini API"],
    },
    {
      title: "Enterprise & Delivery",
      description: "Enterprise workflow platforms and collaborative delivery tools.",
      skills: ["ServiceNow", "CI/CD", "Git/GitHub"],
    },
  ];

  return (
    <section id="tech" className="tech-section" ref={sectionRef}>
      <div className="top">
        <p className="label">Tech Stack</p>
        <h2>I build systems with modern tools.</h2>
        <p className="sub">
          Engineering scalable products, enterprise workflows, and premium
          digital experiences.
        </p>
      </div>

      <div className="grid">
        {skillGroups.map((group) => (
          <article className="skillGroup" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <style jsx>{`
        .tech-section {
          min-height: 100vh;
          background: transparent;
          color: var(--text);
          padding: 140px clamp(24px, 6vw, 80px);
        }

        .top {
          max-width: 900px;
          margin-bottom: 70px;
        }

        .label {
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          opacity: 0.6;
          margin-bottom: 16px;
        }

        h2 {
          font-size: clamp(3rem, 6vw, 6rem);
          line-height: 1;
          margin-bottom: 24px;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .sub {
          font-size: 1.1rem;
          opacity: 0.75;
          max-width: 700px;
          line-height: 1.8;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: 16px;
        }

        .skillGroup {
          min-height: 210px;
          padding: 24px;
          border-radius: 8px;
          background: var(--panel);
          border: 1px solid var(--border);
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .skillGroup:hover {
          transform: translateY(-3px);
          background: var(--panel-strong);
          border-color: var(--accent);
        }

        .skillGroup h3 {
          margin: 0 0 8px;
          color: var(--text);
          font-size: 1.08rem;
        }

        .skillGroup p {
          margin: 0 0 18px;
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.6;
        }

        .skillGroup ul {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .skillGroup li {
          padding: 6px 9px;
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text);
          font-size: 0.78rem;
          line-height: 1.2;
        }

        @media (max-width: 900px) {
          .tech-section {
            min-height: auto;
            padding: 100px clamp(20px, 5vw, 40px);
          }
        }

        @media (max-width: 560px) {
          .tech-section {
            padding: 76px 16px;
          }

          h2 {
            font-size: clamp(2.1rem, 9vw, 3.3rem);
            line-height: 1.08;
            letter-spacing: 0;
          }

          .top {
            margin-bottom: 36px;
          }

          .grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .skillGroup {
            min-height: 0;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}


// ================= ProjectShowcase.js =================
const projects = [
  {
    title: "AgentOps-AI",
    category: "AI & Data",
    url: "https://github.com/AnuragkGithub/AgentOps-AI",
    desc: "AI-powered ops workflows for intelligent automation and monitoring.",
  },
  {
    title: "Dashboard",
    category: "Analytics",
    url: "https://github.com/AnuragkGithub/dashboard",
    desc: "Interactive analytics dashboard for business metrics and system insights.",
  },
  {
    title: "ESG-Data-Ingestion",
    category: "Analytics",
    url: "https://github.com/AnuragkGithub/ESG-Data-Ingestion",
    desc: "Data pipeline for ESG reporting, validation, and operational analytics.",
  },
  {
    title: "Scalable-Data-Processing-API",
    category: "Platforms",
    url: "https://github.com/AnuragkGithub/Scalable-Data-Processing-API",
    desc: "High-throughput API for data processing, integration, and real-time delivery.",
  },
  {
    title: "Expense-AI",
    category: "AI & Data",
    url: "https://github.com/AnuragkGithub/Expense-AI",
    desc: "Expense intelligence assistant using AI to categorize and summarize spend.",
  },
  {
    title: "Data-AI-Assistant",
    category: "AI & Data",
    url: "https://github.com/AnuragkGithub/Data-AI-Assistant",
    desc: "Conversational AI helper for data queries, reporting, and analytics workflows.",
  },
  {
    title: "Enterprise-Analytics-AI",
    category: "AI & Data",
    url: "https://github.com/AnuragkGithub/Enterprise-Analytics-AI",
    desc: "Enterprise analytics platform with AI-driven business insights.",
  },
  {
    title: "AI-Job-Analytics-System",
    category: "AI & Data",
    url: "https://github.com/AnuragkGithub/AI-Job-Analytics-System",
    desc: "Job market analytics and insight automation for recruiting and hiring.",
  },
  {
    title: "Job-Monitoring-Assistant",
    category: "Automation",
    url: "https://github.com/AnuragkGithub/Job-Monitoring-Assistant",
    desc: "Automated job monitoring assistant for pipeline health and alerting.",
  },
  {
    title: "Food-Health-APP",
    category: "Web apps",
    url: "https://github.com/AnuragkGithub/Food-Health-APP",
    desc: "Nutrition and meal management app built for health-focused user workflows.",
  },
  {
    title: "MERN_WebChatApp",
    category: "Web apps",
    url: "https://github.com/AnuragkGithub/MERN_WebChatApp",
    desc: "Real-time MERN chat application with authentication and messaging.",
  },
];

function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "AI & Data", "Analytics", "Automation", "Platforms", "Web apps"];
  const visibleProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="projectSection">
      <div className="projectHeader">
        <span>RESEARCH &amp; PROJECTS</span>
        <h1 className="my-work-title">
  <span>Experiments, data systems,</span>
  <span>and applied AI in practice.</span>
</h1>
        <p>A working archive of projects exploring AI, analytics, automation, and useful software.</p>
      </div>

      <div className="projectBrowse">
        <div className="projectFilters" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "categoryButton active" : "categoryButton"}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="projectCount" aria-live="polite">
          {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <div className="cardsGrid">
        {visibleProjects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="projectCard"
          >
            <span className="projectCategory">{project.category}</span>
            <div className="projectTitle">{project.title}</div>
            <p>{project.desc}</p>
            <span className="projectLink">View source on GitHub <span aria-hidden="true">↗</span></span>
          </a>
        ))}
      </div>

      <style jsx>{`
       .projectSection {
  min-height: 100vh;
  padding: 110px 8% 80px;
  background: transparent;
  color: var(--text);
  box-sizing: border-box;
  scroll-margin-top: 90px;
}

        .projectHeader {
  max-width: 1200px;
  margin: 0 auto 48px;
  text-align: center;
}

/* Only the MY WORK label */
.projectHeader > span {
  display: inline-block;
  font-size: 0.95rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 18px;
}

/* Main heading */
.my-work-title {
  font-size: 4.6rem;
  line-height: 1.02;
  letter-spacing: 0;
  font-weight: 800;
  text-align: center;
  color: var(--text);
  max-width: 1100px;
  margin: 24px auto 22px;
}

/* Force exactly TWO lines */
.my-work-title span {
  display: block;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
  text-transform: none;
  color: inherit;
  margin: 0;
}

.projectHeader p {
  margin-top: 18px;
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.8;
}
        .cardsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: 26px;
          max-width: 1280px;
          margin: 0 auto;
          counter-reset: project;
        }

        .projectBrowse {
          margin: 0 auto 30px;
          text-align: center;
        }

        .projectFilters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }

        .categoryButton {
          min-height: 40px;
          padding: 8px 14px;
          border: 1px solid var(--border);
          border-radius: 6px;
          background: var(--panel);
          color: var(--text-muted);
          font-size: 0.84rem;
          font-weight: 650;
          cursor: pointer;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .categoryButton:hover,
        .categoryButton.active {
          border-color: var(--accent);
          background: var(--panel-strong);
          color: var(--accent);
        }

        .projectCount {
          margin: 12px 0 0;
          color: var(--text-muted);
          font-size: 0.82rem;
        }
       .my-work-title {
  font-size: 4.6rem;
  line-height: 1.02;
  letter-spacing: 0;
  font-weight: 800;
  text-align: center;
  max-width: 1100px;
  margin: 24px auto 22px;
}

.my-work-title span {
  display: block;
}
        .projectCard {
          position: relative;
          display: block;
          overflow: hidden;
          padding: 28px;
          min-height: 220px;
          border-radius: 8px;
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-soft);
          counter-increment: project;
          transition: transform 0.35s ease, background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .projectCard::before {
          content: counter(project, decimal-leading-zero);
          position: absolute;
          top: 25px;
          right: 26px;
          color: var(--accent);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 1px;
          pointer-events: none;
        }

        .projectCard:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          background: var(--panel-strong);
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.22);
        }

        .projectTitle {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--text);
        }

        .projectCategory {
          display: inline-block;
          margin: 0 44px 16px 0;
          color: var(--accent);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
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

        @media (max-width: 880px) {
          .projectSection {
            min-height: auto;
            padding: 100px clamp(20px, 5vw, 40px);
          }

          .projectHeader h2 {
            font-size: clamp(2.4rem, 5vw, 3.6rem);
          }
        }

       @media (max-width: 880px) {
  .projectSection {
    min-height: auto;
    padding: 100px clamp(20px, 5vw, 40px) 70px;
    scroll-margin-top: 75px;
  }

  .projectHeader h2 {
    font-size: clamp(2.4rem, 5vw, 3.6rem);
  }

  .my-work-title {
    font-size: 3.2rem;
  }
}

@media (max-width: 560px) {
  .projectSection {
    padding: 80px 16px 60px;
    scroll-margin-top: 65px;
  }

  .projectHeader {
    margin-bottom: 32px;
  }

  .projectHeader h2 {
    font-size: clamp(2rem, 9vw, 3rem);
    line-height: 1.1;
  }

  .my-work-title {
    font-size: 2.3rem;
    line-height: 1.08;
  }

  .projectBrowse {
    margin-bottom: 22px;
  }

  .categoryButton {
    min-height: 38px;
    padding: 7px 10px;
    font-size: 0.76rem;
  }

  .cardsGrid {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }

  .projectCard {
    min-height: auto;
    padding: 22px;
    border-radius: 8px;
  }

  .projectCard p {
    min-height: 0;
  }

  .projectLink {
    font-size: 0.82rem;
    overflow-wrap: anywhere;
  }
        }
      `}</style>
    </section>
  );
}


// ================= hooks/useSmoothScroll.js =================
function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
      anchors: true,
    });

    // Make the Lenis instance accessible to navigation buttons
    window.__lenis = lenis;

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);

      lenis.destroy();

      delete window.__lenis;
    };
  }, []);
}


// ================= hooks/useAnimations.js =================
gsap.registerPlugin(ScrollTrigger);

function useAnimations() {
  useEffect(() => {
    // HERO
    gsap.from(".hero-text", {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        scrub: true,
      },
    });

    // SECTIONS
    gsap.utils.toArray(".section").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          scrub: true,
        },
      });
    });

    // HORIZONTAL SCROLL
    const panels = gsap.utils.toArray(".panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal",
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () =>
  "+=" + document.querySelector(".horizontal-container").offsetWidth,
      },
    });

    // 🔥 CENTER FOCUS EFFECT
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "center center",
        end: "center center",
        onEnter: () => {
          gsap.to(panel, { scale: 1.2, opacity: 1, duration: 0.4 });
        },
        onLeave: () => {
          gsap.to(panel, { scale: 0.8, opacity: 0.3, duration: 0.4 });
        },
        onEnterBack: () => {
          gsap.to(panel, { scale: 1.2, opacity: 1, duration: 0.4 });
        },
        onLeaveBack: () => {
          gsap.to(panel, { scale: 0.8, opacity: 0.3, duration: 0.4 });
        },
      });
    });
  }, []);
}


function ResearchPreloader({ sceneReady, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [paintReady, setPaintReady] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const [minimumElapsed, setMinimumElapsed] = useState(false);
  const [fallbackReady, setFallbackReady] = useState(false);
  const progressRef = useRef(0);

  useEffect(() => {
    let active = true;
    let firstFrame = 0;
    let secondFrame = 0;
    const minimumTimer = window.setTimeout(() => setMinimumElapsed(true), 2100);
    const fallbackTimer = window.setTimeout(() => {
      setFallbackReady(true);
      setPaintReady(true);
      setFontsReady(true);
    }, 5000);

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        if (active) setPaintReady(true);
      });
    });

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (active) setFontsReady(true);
      }).catch(() => {
        if (active) setFontsReady(true);
      });
    } else {
      setFontsReady(true);
    }

    return () => {
      active = false;
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(minimumTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  const target = !paintReady
    ? 14
    : !fontsReady && !fallbackReady
      ? 38
      : !sceneReady && !fallbackReady
        ? 72
        : !minimumElapsed
          ? 96
          : 100;
  useEffect(() => {
    let timer = 0;
    const advance = () => {
      const current = progressRef.current;
      const next = Math.min(target, current + 1);
      progressRef.current = next;
      setProgress(next);
      if (next >= target) window.clearInterval(timer);
    };

    if (progressRef.current < target) timer = window.setInterval(advance, 30);
    return () => window.clearInterval(timer);
  }, [target]);

  useEffect(() => {
    if (progress < 100) return undefined;
    const timer = window.setTimeout(onComplete, 380);
    return () => window.clearTimeout(timer);
  }, [progress, onComplete]);

  const stage = progress < 18
    ? "WAKING THE LAB"
    : progress < 42
      ? "ALIGNING FIELD NOTES"
      : progress < 78
        ? "BUILDING THE RESEARCH SCENE"
        : progress < 98
          ? "CHECKING SIGNALS"
          : "READY TO EXPLORE";

  return (
    <div className="researchLoader" aria-busy={progress < 100}>
      <div className="researchLoaderFrame">
        <header className="researchLoaderHeader">
          <span>AK <i>/</i> RESEARCH PORTFOLIO</span>
          <span>INITIALIZATION / 01</span>
        </header>

        <main className="researchLoaderMain">
          <div className="loaderInstrument" aria-hidden="true">
            <span className="loaderOrbit loaderOrbitOne" />
            <span className="loaderOrbit loaderOrbitTwo" />
            <span className="loaderAxis loaderAxisHorizontal" />
            <span className="loaderAxis loaderAxisVertical" />
            <span className="loaderInstrumentCore">AK</span>
            <i className="loaderSignal loaderSignalOne" />
            <i className="loaderSignal loaderSignalTwo" />
            <i className="loaderSignal loaderSignalThree" />
          </div>

          <p className="researchLoaderEyebrow">A FIELD IN MOTION</p>
          <h1>Entering the<br />research field.</h1>
          <p className="researchLoaderDescription">
            Preparing the models, evidence, and ideas behind the work.
          </p>

          <div className="researchLoaderReadout">
            <span aria-live="polite">{stage}</span>
            <span
              className="researchLoaderPercent"
              role="progressbar"
              aria-label="Portfolio loading progress"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={Math.floor(progress)}
            >
              {Math.floor(progress).toString().padStart(2, "0")}%
            </span>
          </div>
          <div className="researchLoaderTrack" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
        </main>

        <footer className="researchLoaderFooter">
          <span>APPLIED AI / CYBERSECURITY / DATA SYSTEMS</span>
          <span>ESTABLISHING CONNECTION</span>
        </footer>
      </div>
    </div>
  );
}


export default function Home({ mode = "light", setMode = () => {} }) {
  const [sceneReady, setSceneReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const onSceneReady = useCallback(() => setSceneReady(true), []);
  const onLoadingComplete = useCallback(() => setLoading(false), []);

  useEffect(() => {
    if (!loading) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [loading]);

  useEffect(() => {
    // Always open a fresh reload at Home rather than restoring an old hash.
    const hash = window.location.hash;
    if (hash !== "#home") {
      window.history.replaceState(null, "", "#home");
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`app ${mode}`}>
      <style jsx global>{":root {\n  --bg: #050509;\n  --bg-gradient: linear-gradient(135deg, #020206 0%, #090a12 100%);\n  --panel: rgba(255, 255, 255, 0.06);\n  --panel-strong: rgba(255, 255, 255, 0.12);\n  --surface: rgba(255, 255, 255, 0.06);\n  --surface-soft: rgba(255, 255, 255, 0.03);\n  --glass: rgba(255, 255, 255, 0.08);\n  --border: rgba(255, 255, 255, 0.1);\n  --border-strong: rgba(255, 255, 255, 0.16);\n  --text: #eef2ff;\n  --text-muted: rgba(238, 242, 255, 0.72);\n  --accent: #38bdf8;\n  --accent-strong: #a855f7;\n  --accent-soft: #83c5fd;\n  --shadow: 0 35px 100px rgba(0, 0, 0, 0.45);\n  --shadow-soft: 0 16px 40px rgba(0, 0, 0, 0.18);\n  --stroke: rgba(255, 255, 255, 0.06);\n  --card-bg: rgba(255, 255, 255, 0.04);\n  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  --bg-primary: var(--bg);\n  --text-primary: var(--text);\n  --text-secondary: var(--text-muted);\n  --border-color: var(--border);\n  --border-hover: rgba(56, 189, 248, 0.18);\n  --accent-glow: 0 12px 30px rgba(56, 189, 248, 0.16);\n  --accent-secondary: var(--text-muted);\n  --tag-bg: rgba(255, 255, 255, 0.08);\n  --tag-text: var(--text-muted);\n}\n\nhtml {\n  scroll-behavior: smooth;\n  width: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  width: 100%;\n  overflow-x: clip;\n  min-height: 100vh;\n  font-family: var(--font-sans);\n  color: var(--text);\n  background: var(--bg);\n  transition: background 0.35s ease, color 0.35s ease;\n}\n\nbody.app {\n  background: var(--bg);\n  color: var(--text);\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton {\n  font: inherit;\n}\n\nimg,\nvideo {\n  max-width: 100%;\n  display: block;\n}\n\n#__next {\n  min-height: 100vh;\n  overflow-x: clip;\n}\n\n.section-padding {\n  padding: clamp(4rem, 9vw, 8rem) clamp(1rem, 6vw, 5rem);\n}\n\n@media (max-width: 640px) {\n  .section-padding {\n    padding: 4.5rem 1rem;\n  }\n}\n\nbody.app.cyber {\n  --bg: #050509;\n  --bg-gradient: linear-gradient(135deg, #020206 0%, #0f1222 100%);\n  --panel: rgba(255, 255, 255, 0.05);\n  --panel-strong: rgba(255, 255, 255, 0.12);\n  --text: #f3f4ff;\n  --text-muted: rgba(243, 244, 255, 0.72);\n  --border: rgba(56, 189, 248, 0.28);\n  --accent: #38bdf8;\n  --accent-strong: #c084fc;\n  --accent-soft: #0ea5e9;\n  --shadow: 0 40px 120px rgba(0, 0, 0, 0.6);\n  --card-bg: rgba(255, 255, 255, 0.05);\n  --bg-primary: var(--bg);\n  --text-primary: var(--text);\n  --text-secondary: var(--text-muted);\n  --border-color: var(--border);\n  --border-hover: rgba(56, 189, 248, 0.28);\n  --accent-glow: 0 12px 30px rgba(56, 189, 248, 0.18);\n  --accent-secondary: rgba(243, 244, 255, 0.72);\n  --tag-bg: rgba(255, 255, 255, 0.06);\n  --tag-text: rgba(243, 244, 255, 0.72);\n}\n\nbody.app.dark {\n  --bg: #05060e;\n  --bg-gradient: linear-gradient(135deg, #05060e 0%, #0d1322 100%);\n  --panel: rgba(15, 23, 42, 0.78);\n  --panel-strong: rgba(255, 255, 255, 0.08);\n  --surface: rgba(15, 23, 42, 0.62);\n  --surface-soft: rgba(15, 23, 42, 0.35);\n  --glass: rgba(255, 255, 255, 0.06);\n  --border: rgba(255, 255, 255, 0.12);\n  --text: #f8fafc;\n  --text-muted: rgba(248, 250, 252, 0.72);\n  --accent: #38bdf8;\n  --accent-strong: #7c3aed;\n  --accent-soft: #60a5fa;\n  --shadow: 0 35px 100px rgba(0, 0, 0, 0.6);\n  --card-bg: rgba(255, 255, 255, 0.05);\n  --bg-primary: var(--bg);\n  --text-primary: var(--text);\n  --text-secondary: var(--text-muted);\n  --border-color: var(--border);\n  --border-hover: rgba(56, 189, 248, 0.22);\n  --accent-glow: 0 12px 30px rgba(56, 189, 248, 0.16);\n  --accent-secondary: rgba(248, 250, 252, 0.72);\n  --tag-bg: rgba(255, 255, 255, 0.06);\n  --tag-text: rgba(248, 250, 252, 0.72);\n}\n\nbody.app.light {\n  --bg: #f4f6fb;\n  --bg-gradient: linear-gradient(135deg, #edf2ff 0%, #e2e8f0 100%);\n  --panel: rgba(255, 255, 255, 0.94);\n  --panel-strong: rgba(255, 255, 255, 0.98);\n  --text: #0f172a;\n  --text-muted: rgba(15, 23, 42, 0.68);\n  --border: rgba(15, 23, 42, 0.12);\n  --accent: #2563eb;\n  --accent-strong: #475569;\n  --accent-soft: #94a3b8;\n  --shadow: 0 35px 100px rgba(15, 23, 42, 0.18);\n  --card-bg: rgba(255, 255, 255, 0.95);\n  --bg-primary: var(--bg);\n  --text-primary: var(--text);\n  --text-secondary: var(--text-muted);\n  --border-color: var(--border);\n  --border-hover: rgba(37, 99, 235, 0.18);\n  --accent-glow: 0 12px 30px rgba(37, 99, 235, 0.14);\n  --accent-secondary: rgba(15, 23, 42, 0.72);\n  --tag-bg: rgba(15, 23, 42, 0.08);\n  --tag-text: rgba(15, 23, 42, 0.72);\n}\n\nbody.app.light a,\nbody.app.light button,\nbody.app.light .logo {\n  color: #111111 !important;\n}\n\nbody.app.light .navbar {\n  background: rgba(255, 255, 255, 0.92);\n  border-color: rgba(0, 0, 0, 0.08);\n}\n\nbody.app.dark .navbar {\n  background: rgba(10, 10, 15, 0.95);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n\nbody.app.cyber .navbar {\n  background: rgba(7, 7, 10, 0.92);\n  border-color: rgba(56, 189, 248, 0.18);\n}\n"}</style>
      <div className="portfolioAppContent" aria-hidden={loading}>
        <CustomCursor />
        <Navbar mode={mode} setMode={setMode} />
        <main>
          <Hero mode={mode} onSceneReady={onSceneReady} playing={!loading} />
          <About />
          <Experience mode={mode} />
          <ProjectShowcase />
          <TechStack />
          <DailyThought />
          <Contact />
        </main>
      </div>
      {loading && (
        <ResearchPreloader sceneReady={sceneReady} onComplete={onLoadingComplete} />
      )}
    </div>
  );
}