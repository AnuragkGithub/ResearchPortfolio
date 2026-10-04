export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contactCard">
        <div className="label">Contact</div>

        <h2>
          Let's build the next high-impact system together.
        </h2>

        <p>
          Enterprise automation, AI-enabled workflows, and product-ready
          platforms delivered with reliability, speed, and strategic clarity.
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
          padding: 60px;
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
            padding: 80px 28px;
          }

          .contactCard {
            padding: 40px;
          }
        }
      `}</style>
    </section>
  );
}