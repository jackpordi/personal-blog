import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="min-h-screen pb-4">
        <Nav />
        <div className="container max-w-6xl mx-auto px-4">
          <Component
            {...pageProps}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
