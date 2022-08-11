import { FaShare } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

import { DarkModeToggle } from "./DarkModeToggle";

const iconStyle = "cursor-pointer dark:text-white dark:hover:text-cyan-400 mr-6 transition transform hover:scale-115 hover:text-cyan-400 text-gray-500";

export const StickyButtons = () => (
  <div className="hidden flex-col mr-8">
    <div className="flex flex-col sticky top-0 h-[80vh] justify-center">
      <DarkModeToggle
      />
      <FaShare
        className={iconStyle}
        size={22}
      />
      <GiCoffeeCup
        className={iconStyle}
        size={24}
      />
    </div>
  </div>
);
