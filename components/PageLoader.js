export default function PageLoader() {
  return (
    <div className="pageLoader" role="status" aria-label="Loading portfolio">
      <div className="pageLoaderContent">
        <span className="pageLoaderMark" aria-hidden="true">AK</span>
        <p className="pageLoaderName">ANURAG KARMAKAR</p>
        <div className="pageLoaderTrack" aria-hidden="true">
          <span />
        </div>
        <span className="pageLoaderCaption">Preparing research workspace</span>
      </div>
      <style jsx>{`
        .pageLoader {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at 50% 45%, var(--panel-strong), transparent 38%),
            var(--bg);
          color: var(--text);
        }

        .pageLoaderContent {
          display: grid;
          justify-items: center;
          width: min(360px, calc(100vw - 48px));
          text-align: center;
        }

        .pageLoaderMark {
          display: grid;
          width: 64px;
          height: 64px;
          place-items: center;
          border: 1px solid var(--border-strong);
          border-radius: 18px;
          color: var(--accent);
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          animation: loaderMark 1.2s ease-in-out infinite alternate;
        }

        .pageLoaderName {
          margin: 22px 0 18px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.24em;
        }

        .pageLoaderTrack {
          width: 100%;
          height: 2px;
          overflow: hidden;
          background: var(--border);
        }

        .pageLoaderTrack span {
          display: block;
          width: 38%;
          height: 100%;
          background: var(--accent);
          animation: loaderProgress 1.1s ease-in-out infinite;
        }

        .pageLoaderCaption {
          margin-top: 12px;
          color: var(--text-muted);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
        }

        @keyframes loaderMark {
          from { opacity: 0.55; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes loaderProgress {
          from { transform: translateX(-110%); }
          to { transform: translateX(280%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .pageLoaderMark,
          .pageLoaderTrack span {
            animation: none;
          }

          .pageLoaderTrack span {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
