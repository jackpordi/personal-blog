import "../styles/globals.css";
import { FC, PropsWithChildren } from "react";
import Script from "next/script";

import { RootProvider } from "components/RootProvider";
import { Nav } from "components/Nav";
import { Footer } from "components/Footer";

const RootLayout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <html>
    <head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link id="hljs-dark" rel="stylesheet" href="/dracula.css" />
    </head>
    <body>
      <>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          async
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });`,
          }}
        />
      </>
      <RootProvider>

        <div className="min-h-screen pb-4 ">
          <Nav />
          <div className="container max-w-6xl mx-auto md:px-4">
            { children }
          </div>
        </div>
        <Footer />

      </RootProvider>
    </body>
  </html>
);

export default RootLayout;
