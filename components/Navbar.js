export default function Navbar({ mode, setMode }) {
  const nextMode = () => {
    if (mode === "cyber") setMode("dark");
    else if (mode === "dark") setMode("light");
    else setMode("cyber");
  };

  const modeText =
    mode === "cyber"
      ? "Cyber Mode"
      : mode === "dark"
      ? "Dark Mode"
      : "Light Mode";

  return (
    <nav className="navbar">
      <div className="logo">ANURAG KARMAKAR</div>

      <div className="links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#tech">Tech</a>
        <a href="#contact">Contact</a>
      </div>

      <button onClick={nextMode}>
        {modeText}
      </button>

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
          flex-wrap: wrap;
          gap: 14px;

          padding: 16px 20px;
          border-radius: 28px;
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-soft);
          backdrop-filter: blur(20px);
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .logo {
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--accent);
          letter-spacing: 0.02em;
        }

        .links {
          display: flex;
          gap: 24px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        a {
          color: var(--text);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          opacity: 0.86;
          transition: opacity 0.25s ease, color 0.25s ease;
        }

        a:hover {
          opacity: 1;
          color: var(--accent);
        }

        button {
          padding: 10px 20px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--panel);
          color: var(--text);
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }

        button:hover {
          transform: translateY(-1px);
          background: var(--panel-strong);
          border-color: var(--accent);
        }

        @media (max-width: 768px) {
          .navbar {
            top: 12px;
            padding: 14px 16px;
          }

          .logo {
            font-size: 1.1rem;
          }

          .links {
            gap: 16px;
            width: 100%;
          }

          .links a {
            font-size: 0.9rem;
          }

          button {
            width: 100%;
            margin-top: 6px;
          }
        }
      `}</style>
    </nav>
  );
}