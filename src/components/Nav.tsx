import Link from "next/link";
import { FaEnvelope, FaGithub, FaHome } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { FunctionComponent } from "react";

import { DarkModeToggle } from "./DarkModeToggle";

export const Nav: FunctionComponent = () => (
  <nav className="inset-x-0 flex flex-1 items-center justify-between flex-wrap p-6 py-22 text-gray-500">
    <Link
      href="/"
    >
      <a
        className="flex items-center flex-shrink-0 mr-6"
      >
        <span className="text-gray-700 dark:text-white text-3xl md:text-3xl tracking-tight">
        Jack
          {" "}
          <span className="gradient-text font-bold">Pordi</span>
        </span>
      </a>
    </Link>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="w-full lg:flex-grow hidden lg:flex lg:items-center lg:w-auto">
      <div className="text-xl lg:flex-grow lg:items-center lg:flex justify-end">
        <DarkModeToggle />
        <a
          className="dark:text-white dark:hover:text-cyan-400 mr-6 transition transform hover:scale-115 hover:text-cyan-400"
          href="mailto: contact@jackpordi.com"
        >
          <FaEnvelope
            size={28}
          />
        </a>
        <a
          className="dark:text-white dark:hover:text-cyan-400 mr-6 transition transform hover:scale-115 hover:text-cyan-400"
          href="https://www.buymeacoffee.com/jackpordi"
        >
          <GiCoffeeCup
            className="mb-1"
            size={32}
          />
        </a>
        <a
          className="dark:text-white dark:hover:text-cyan-400 mr-6 transition transform hover:scale-115 hover:text-cyan-400"
          href="https://github.com/jackpordi"
        >
          <FaGithub
            size={28}
          />
        </a>
        <Link href="/">
          <a
            className="dark:text-white dark:hover:text-cyan-400 mr-6 transition transform hover:scale-115 hover:text-cyan-400"
          >
            <FaHome
              size={28}
            />
          </a>
        </Link>
      </div>
    </div>
  </nav>
);
