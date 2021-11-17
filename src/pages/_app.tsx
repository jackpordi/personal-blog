import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav />
      <div className="container max-w-6xl mx-auto px-4 pt-16">
        <Component
          {...pageProps}
        />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
