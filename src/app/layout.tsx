import "../styles/globals.css";
import { FC, PropsWithChildren } from "react";

import { RootProvider } from "components/RootProvider";
import { Nav } from "components/Nav";
import { Footer } from "components/Footer";

const RootLayout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <html>
    <head />
    <body>
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
