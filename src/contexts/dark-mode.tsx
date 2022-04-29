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
    if (dark) {
      document.body.classList.add("dark");
      window.localStorage.darkmode = true;
    } else {
      document.body.classList.remove("dark");
      delete window.localStorage.darkmode;
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
