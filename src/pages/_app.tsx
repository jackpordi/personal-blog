import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

import { Nav } from "components/Nav";
import { Footer } from "components/Footer";
import { useTrackpageView } from "hooks/useTrackPageView";
import { DarkModeProvider } from "contexts/dark-mode";

function MyApp({ Component, pageProps }: AppProps) {

  const [ fadeColors, setFadeColors ] = useState("");
  useTrackpageView();

  useEffect(() => {
    setTimeout(() => {
      setFadeColors("fade-colors");
    }, 200);
  }, []);

  return (
    <DarkModeProvider>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={`dark:bg-grey-800 ${fadeColors} pb-4`}>
        <div className="min-h-screen pb-4 ">
          <Nav />
          <div className="container max-w-6xl mx-auto px-4">
            <Component
              {...pageProps}
            />
          </div>
        </div>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default MyApp;
