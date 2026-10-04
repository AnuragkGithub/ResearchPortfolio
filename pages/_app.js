import "../styles/globals.css";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    try {
      const savedMode = window.localStorage.getItem("portfolio-theme");
      if (["light", "dark", "cyber"].includes(savedMode)) setMode(savedMode);
    } catch {}
  }, []);

  useEffect(() => {
    document.body.classList.remove(
      "cyber",
      "dark",
      "light"
    );

    document.body.classList.add("app", mode);
    try {
      window.localStorage.setItem("portfolio-theme", mode);
    } catch {}
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