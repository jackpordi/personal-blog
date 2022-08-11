import { FaMoon, FaSun } from "react-icons/fa";

import { useDarkMode } from "hooks/useDarkMode";

export const DarkModeToggle = () => {

  const { dark, toggle } = useDarkMode();

  return (
    <div
      className="cursor-pointer mr-6"
      onClick={(e) => {
        e.preventDefault();
        toggle();
      }}
    >
      { dark
        ? <FaMoon
          className="text-white"
          size={24}/>
        : <FaSun
          color="orange"
          size={24}/>
      }
    </div>
  );
};
