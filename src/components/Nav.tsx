"use client";

import Link from "next/link";
import { FaEnvelope, FaGithub, FaHome } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { FunctionComponent, useState, FC } from "react";

import { DarkModeToggle } from "./DarkModeToggle";

const iconStylesDesktop = "dark:text-white dark:hover:text-cyan-400 mr-6 transition transform hover:scale-115 hover:text-cyan-400";
const iconStylesMobile = "dark:text-white mr-2 dark:group-hover:text-cyan-400";

type INavItem = {
  name: string;
  href: string;
  icon: typeof FaEnvelope;
}

const items = [
  {
    name: "Contact",
    href: "mailto: contact@jackpordi.com",
    icon: FaEnvelope,
  },
  {
    name: "Coffee",
    href: "https://www.buymeacoffee.com/jackpordi",
    icon: GiCoffeeCup,
  },
  {
    name: "GitHub",
    href: "https://github.com/jackpordi",
    icon: FaGithub,
  },
  {
    name: "Home",
    href: "/",
    icon: FaHome,
  },
];

const reversed = items.reverse();

const NavItem: FC<INavItem> = ({
  href,
  icon: Icon,
}) => (
  (<Link href={href} className={iconStylesDesktop}>

    <Icon
      size={28}
    />

  </Link>)
);

const JackPordiLogo = () => (
  (<Link href="/" className="flex items-center flex-shrink-0 mr-6">

    <span className="text-gray-700 dark:text-white text-3xl md:text-3xl tracking-tight">
      Jack
      {" "}
      <span className="gradient-text font-bold">Pordi</span>
    </span>

  </Link>)
);

export const Nav: FunctionComponent = () => {

  const [ open, setOpen ] = useState(false);

  // const router = useRouter();
  //
  // useEffect(() => {
  //
  //   const onPageChange = () => setOpen(false);
  //   router.events.on("routeChangeComplete", onPageChange);
  //   return () => router.events.off("routeChangeComplete", onPageChange);
  // }, [ router.events ]);

  return (
    <nav className="inset-x-0 flex flex-1 items-center justify-between flex-wrap p-6 py-22 text-gray-500">
      <JackPordiLogo />
      <div className="block lg:hidden">
        <button
          onClick={() => setOpen((old) => !old)}
          className="flex items-center px-3 py-2 border rounded text-black dark:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full lg:flex-grow hidden lg:flex lg:items-center lg:w-auto">
        <div className="text-xl lg:flex-grow lg:items-center lg:flex justify-end">
          <DarkModeToggle />
          { items.map((item) => <NavItem key={item.name} {...item}/>) }
        </div>
      </div>

      <div
        className={`h-screen w-[180px] fixed shadow-lg pl-3 pt-6 dark:bg-black bg-white z-20 left-0 top-0 bottom-0 flex flex-col transition-all duration-300 ${open ? "" : "-translate-x-[180px]"} lg:hidden`}
      >
        <div className="pl-3">
          <JackPordiLogo />
        </div>
        <div className="flex-1 mt-2">

          { reversed.map(({
            href, name, icon: Icon,
          }) => (
            (<Link
              key={name}
              href={href}
              className="flex flex-row items-center dark:text-white justify-start text-2xl my-2 group dark:hover:text-cyan-400">

              <div
                className={iconStylesMobile}
              >
                <Icon
                  size={22}
                />
              </div>
              <h3>{name}</h3>

            </Link>)
          )) }
        </div>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`${open ? "" : "lg:hidden pointer-events-none"} fixed top-0 bottom-0 right-0 left-0 z-10`}>

      </div>
    </nav>
  );
};
