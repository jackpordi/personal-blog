import {
  createContext,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";

interface IDarkModeCtx {
  dark: boolean;
  toggle(_?: boolean): void;
}

export const DarkModeContext = createContext<IDarkModeCtx>(undefined as unknown as IDarkModeCtx);

export const DarkModeProvider: FC = ({ children }) => {

  const [ dark, setDark ] = useState(false);

  useEffect(() => {
    if (window.localStorage.darkmode) {
      toggle(true);
    } else {
      toggle(false);
    }
  }, []);

  useEffect(() => {
    const darkCSS = document.getElementById("hljs-dark");
    const lightCSS = document.getElementById("hljs-light");
    if (dark) {
      document.body.classList.add("dark");
      window.localStorage.darkmode = true;
      // @ts-ignore
      darkCSS.disabled = false;
      // @ts-ignore
      lightCSS.disabled = true;
    } else {
      document.body.classList.remove("dark");
      delete window.localStorage.darkmode;
      // @ts-ignore
      darkCSS.disabled = true;
      // @ts-ignore
      lightCSS.disabled = false;
    }
  }, [ dark ]);

  const toggle = useCallback((val?: boolean) => {
    if (val === undefined) {
      setDark((old) => !old);
    } else {
      setDark(val);
    }
  }, [ setDark ]);

  return (
    <DarkModeContext.Provider value={{
      dark,
      toggle,
    }}>
      { children }
    </DarkModeContext.Provider>
  );
};
