import {
  FC,
  useEffect,
  useState,
  useCallback,
} from "react";
import { FaChevronUp, FaHome, FaShareAlt } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import throttle from "lodash.throttle";
import Link from "next/link";

import { useShareLink } from "hooks/useShareLink";

import { DarkModeToggle } from "./DarkModeToggle";

const iconStyle = "cursor-pointer dark:text-white dark:hover:text-cyan-400 mr-6 transition transform hover:scale-115 hover:text-cyan-400 text-gray-500";
const buttonSpacing = "my-2";

interface Props {
  shareData: ShareData;
}

export const StickyButtons: FC<Props> = ({ shareData }) => {

  const share = useShareLink(shareData);
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [ visible, setVisible ] = useState(false);

  useEffect(() => {

    const onScroll = throttle(() => {
      if (document.documentElement.scrollTop > 60) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hidden md:flex flex-col ml-8">
      <div className={`transition-opacity duration-500 flex flex-col sticky top-0 h-[80vh] justify-center ${visible ? "opacity-1" : "opacity-0 pointer-events-none"}`}>
        <button
          type="button"
          className={buttonSpacing}
          onClick={scrollToTop}
        >
          <FaChevronUp
            className={iconStyle}
            size={22}
          />
        </button>
        <div className={buttonSpacing}>
          <Link href="/">
            <a>
              <FaHome
                className={iconStyle}
                size={24}
              />
            </a>
          </Link>
        </div>
        <button
          type="button"
          className={buttonSpacing}
          onClick={share}
        >
          <FaShareAlt
            className={iconStyle}
            size={22}
          />
        </button>
        <a
          href="https://www.buymeacoffee.com/jackpordi"
          className={buttonSpacing}>
          <GiCoffeeCup
            className={iconStyle}
            size={24}
          />
        </a>
        <div className={buttonSpacing}>
          <DarkModeToggle
          />
        </div>
      </div>
    </div>
  );
};
