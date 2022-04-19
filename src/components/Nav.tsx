import Link from "next/link";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FunctionComponent } from "react";

export const Nav: FunctionComponent = () => (
  <nav className="inset-x-0 flex flex-1 items-center justify-between flex-wrap p-6 py-22 text-gray-500">
    <a
      href="/"
      className="flex items-center flex-shrink-0 mr-6"
    >
      <span className="text-gray-700 text-3xl md:text-3xl tracking-tight">
        Jack
        {" "}
        <span className="text-blue-600 font-bold">Pordi</span>
      </span>
    </a>
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
        <Link href="/" passHref>
          <div className="block mt-4 lg:inline-block lg:mt-0 cursor-pointer hover:text-blue-600 hover:font-semibold mr-6 transition transform hover:scale-115">
            Home
          </div>
        </Link>
        <a
          className="mr-6 transition transform hover:scale-115 hover:text-blue-600"
          href="mailto: contact@jackpordi.com"
        >
          <FaEnvelope
            size={28}
          />
        </a>
        <a
          className="mr-6 transition transform hover:scale-115 hover:text-blue-600"
          href="https://github.com/jackpordi"
        >
          <FaGithub
            size={28}
          />
        </a>
      </div>
    </div>
  </nav>
);
