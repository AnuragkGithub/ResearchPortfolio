import "../styles/globals.css";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.classList.remove(
      "cyber",
      "dark",
      "light"
    );

    document.body.classList.add("app", mode);
  }, [mode]);

  return (
    <div className={`app ${mode}`}>
      <Head>
        <title>Anurag Karmakar | Portfolio</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Component
        {...pageProps}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}