"use client";
import AboutIcon from "@/components/icons/About";
import HomeIcon from "@/components/icons/Home";
import { useContext, useState } from "react";
import { ThemeContext } from "@/utils/providers/theme-provider";
import LanguageIcon from "@/components/icons/Language";
import DarkModeIcon from "@/components/icons/DarkMode";
import LightModeIcon from "@/components/icons/LightMode";
import LogoIcon from "@/components/icons/Logo";
import GmailIcon from "@/components/icons/Gmail";
import TGIcon from "@/components/icons/Telegram";
import HHIcon from "@/components/icons/HH";
import CrossIcon from "@/components/icons/Cross";
import BurgerIcon from "@/components/icons/Burger";
import { BasicContainer } from "../Container";
import NavItem, { TNavItem } from "./NavItem";
import classNames from "classnames";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useBreakpoint } from "@/utils/hooks/useBreakPoint";
import LinkComponent from "./LinkComponent";
import { useDictionary } from "@/utils/providers/dictionary-context";

const rightItems: TNavItem[] = [
  {
    link: "mailto:sunny.prys@gmail.com",
    linkType: "out",
    text: "Email",
    icon: <GmailIcon />,
  },
  {
    link: "https://t.me/sunnyastria",
    linkType: "out",
    text: "Telegram",
    icon: <TGIcon />,
  },
  {
    link: "https://taganrog.hh.ru/resume/3e8e86f1ff0855dd2f0039ed1f30537a515078",
    linkType: "out",
    text: "HeadHunter",
    icon: <HHIcon />,
  },
];

const Header = () => {
  const { isTablet } = useBreakpoint();
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentLang = (params.lang as string) || "ru";
  const dictionary = useDictionary();

  const handleLangChange = () => {
    const currentPath = pathname;

    if (currentPath.startsWith("/en")) {
      const newPath = currentPath.replace(/^\/en/, "/ru");
      router.push(newPath);
    } else if (currentPath.startsWith("/ru")) {
      const newPath = currentPath.replace(/^\/ru/, "/en");
      router.push(newPath);
    } else {
      router.push(`/en${currentPath === "/" ? "" : currentPath}`);
    }
    setMobileMenuOpen(false);
  };

  const leftItems: TNavItem[] = [
    {
      link: "/",
      linkType: "local",
      text: dictionary.navigation.home,
      icon: <HomeIcon />,
    },
    {
      link: "/about",
      linkType: "local",
      text: dictionary.navigation.about,
      icon: <AboutIcon />,
    },
    {
      onClick: handleLangChange,
      text: dictionary.navigation.language,
      icon: <LanguageIcon />,
    },
    {
      onClick: toggleTheme,
      text: isDark
        ? dictionary.navigation.theme.dark
        : dictionary.navigation.theme.light,
      icon: isDark ? <DarkModeIcon /> : <LightModeIcon />,
    },
  ];

  const allItems = [...leftItems, ...rightItems];

  return (
    <BasicContainer isHeader className="sticky top-0 z-50">
      <header className="p-4 tablet:p-8 relative">
        <nav
          className={classNames({
            "px-8 py-4 rounded-3xl bg-primary-200 flex flex-row-reverse tablet:flex-row justify-between items-center bg-surface-bright text-primary": true,
            "shadow-drop-800-medium": !isDark,
            "shadow-inner-100-small": isDark,
            "hidden": mobileMenuOpen,
          })}
        >
          <ul className="hidden tablet:flex gap-4 ">
            {leftItems.map((item) => (
              <NavItem
                {...item}
                key={item.text}
                text={!isTablet ? item.text : ""}
              />
            ))}
          </ul>

          <div className="flex items-center justify-end tablet:justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <LinkComponent link="/" linkType="local" lang={currentLang}>
              <LogoIcon />
            </LinkComponent>
          </div>

          <ul className="hidden tablet:flex gap-4 justify-end ">
            {rightItems.map((item) => (
              <NavItem
                {...item}
                key={item.text}
                text={!isTablet ? item.text : ""}
              />
            ))}
          </ul>

          <div className="flex tablet:hidden justify-end tablet:justify-center">
            <button
              type="button"
              className="p-2 rounded-lg z-50 hover:bg-primary-300 dark:hover:bg-primary-600 transition-colors"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <CrossIcon /> : <BurgerIcon />}
            </button>
          </div>
        </nav>

        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          transition
          className="z-50 tablet:hidden bg-primary-opacity-24 backdrop-blur-md fixed inset-0 flex w-screen items-end justify-center bg-white transition duration-300 ease-out data-closed:opacity-0"
        >
          <DialogPanel
            className={classNames({
              "w-full p-4": true,
              // "bg-white text-primary-700": !isDark,
              // "bg-black text-primary-100": isDark,
            })}
          >
            {/* <div className="flex items-center justify-between mb-8">
                <LogoIcon />
                <button
                  type="button"
                  className="p-2 rounded-lg hover:bg-primary-300 dark:hover:bg-primary-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <CrossIcon />
                </button>
              </div> */}

            <div className="p-6 flex flex-col items-center gap-2 rounded-[32px] border border-outline bg-surface-container">
              {allItems.map((item) => (
                <div
                  key={item.text}
                  className="border-b border-primary-300 dark:border-primary-600 pb-6 last:border-0 last:pb-0"
                  // onClick={() => setMobileMenuOpen(false)}
                >
                  <NavItem key={item.text} {...item} />
                </div>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </BasicContainer>
  );
};

export default Header;
