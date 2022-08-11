import { useContext } from "react";

import { DarkModeContext } from "contexts/dark-mode";

export function useDarkMode() {
  return useContext(DarkModeContext);
}
