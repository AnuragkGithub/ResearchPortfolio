import Head from "next/head";

export default function ComingSoon({ title, category, description, number }) {
  return (
    <>
      <Head>
        <title>{`${title} | Anurag Karmakar`}</title>
        <meta name="description" content={`${title} page coming soon.`} />
      </Head>
      <main className="comingSoonPage">
        <header className="comingSoonBar">
          <a href="/" className="comingSoonBrand">AK <span>/ RESEARCH PORTFOLIO</span></a>
          <a href="/" className="comingSoonBack">Back to portfolio <span aria-hidden="true">↗</span></a>
        </header>

        <section className="comingSoonContent" aria-labelledby="coming-soon-title">
          <div className="comingSoonMeta">
            <span>{category}</span>
            <span>FIELD NOTE {number}</span>
          </div>
          <h1 id="coming-soon-title">{title}</h1>
          <p>{description}</p>
          <div className="comingSoonStatus">
            <span className="comingSoonStatusDot" />
            <span>Coming soon</span>
          </div>
        </section>

        <footer className="comingSoonFooter">
          <span>ANURAG KARMAKAR</span>
          <span>RESEARCH / TEACHING / EXPLORATION</span>
        </footer>
      </main>
    </>
  );
}
