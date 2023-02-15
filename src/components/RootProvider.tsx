"use client";

import {
  useEffect,
  useState,
  FC,
  PropsWithChildren,
} from "react";
import { Analytics } from "@vercel/analytics/react";

import { useTrackpageView } from "hooks/useTrackPageView";
import { DarkModeProvider } from "contexts/dark-mode";

export const RootProvider: FC<PropsWithChildren<{}>> = ({ children }) => {

  const [ fadeColors, setFadeColors ] = useState("");

  useTrackpageView();

  useEffect(() => {
    setTimeout(() => {
      setFadeColors("fade-colors");
    }, 200);
  }, []);

  return (
    <DarkModeProvider>
      <Analytics />
      <div className={`dark:bg-grey-800 ${fadeColors} pb-4`}>
        { children }
      </div>
    </DarkModeProvider>
  );
};
