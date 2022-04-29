import { DarkModeContext } from "contexts/dark-mode";
import { useContext } from "react";

export function useDarkMode() {
  return useContext(DarkModeContext);
}
