'use client'
import AboutIcon from "@/components/icons/About";
import HomeIcon from "@/components/icons/Home";
import { FC, useContext, useState } from "react";
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
import { StyledHeader } from "./index.styles";
import NavItem, { TNavItem } from "./NavItem";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { DictionaryType } from "@/utils/i18n/dictionaries";
import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  dictionary: DictionaryType;
}

const Header: FC<Props> = ({ dictionary }) => {
  const {toggleTheme, isDark} = useContext(ThemeContext);
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLangChange = () => {
    const currentPath = pathname;
    
    if (currentPath.startsWith('/en')) {
      const newPath = currentPath.replace(/^\/en/, '/ru');
      router.push(newPath);
    } else if (currentPath.startsWith('/ru')) {
      const newPath = currentPath.replace(/^\/ru/, '/en');
      router.push(newPath);
    } else {
      router.push(`/en${currentPath === '/' ? '' : currentPath}`);
    }
    setMobileMenuOpen(false);
  }

  const leftItems: TNavItem[] = [
    {link: '/', linkType: 'local', text: dictionary.navigation.home, icon: <HomeIcon /> },
    {link: '/about', linkType: 'local', text: dictionary.navigation.about, icon: <AboutIcon /> },
    {onClick: handleLangChange, text: dictionary.navigation.language, icon: <LanguageIcon /> },
    {onClick: toggleTheme, text: isDark ? dictionary.navigation.theme.dark : dictionary.navigation.theme.light, icon: isDark ? <DarkModeIcon /> : <LightModeIcon /> },
  ]

  const rightItems: TNavItem[] = [
    {link: 'mailto:sunnyastria@gmail.com', linkType: 'out', text: 'Email', icon: <GmailIcon /> },
    {link: 'https://t.me/sunnyastria', linkType: 'out', text: 'Telegram', icon: <TGIcon /> },
    {link: 'https://career.habr.com/sunnyastria1234', linkType: 'out', text: 'HeadHunter', icon: <HHIcon /> },
  ]

  const allItems = [...leftItems, ...rightItems];

  return (
    <BasicContainer className="sticky top-0 z-50">
      <StyledHeader className="p-8">
        <nav className={classNames({
          "px-8 py-4 rounded-3xl bg-primary-200 flex justify-between items-center": true,
          "text-primary-700 bg-primary-200 shadow-drop-800-medium": !isDark,
          "text-primary-100 bg-primary-700 shadow-inner-100-small": isDark
        })}>
          {/* Desktop Navigation - Left Items */}
          <ul className="hidden lg:flex gap-4 w-1/3">
            {leftItems.map((item) => (
              <NavItem
                key={item.text}
                {...item}
              />
            ))}
          </ul>

          {/* Logo */}
          <div className="flex items-center justify-center flex-1 lg:flex-none">
            <LogoIcon />
          </div>

          {/* Desktop Navigation - Right Items */}
          <ul className="hidden lg:flex gap-4 justify-end w-1/3">
            {rightItems.map((item) => (
              <NavItem
                key={item.text}
                {...item}
              />
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg z-50 hover:bg-primary-300 dark:hover:bg-primary-600 transition-colors"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? (
              <CrossIcon />
            ) : (
              <BurgerIcon />
            )}
          </button>
        </nav>

        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          transition
          className="lg:hidden fixed inset-0 flex w-screen items-center justify-center bg-black/30 transition duration-300 ease-out data-closed:opacity-0"
        >
          <DialogPanel className={classNames({
            "min-h-full w-full pt-[120px]": true,
            "bg-primary-200 text-primary-700": !isDark,
            "bg-primary-700 text-primary-100": isDark
          })}>
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

              <div className="space-y-6">
                {allItems.map((item) => (
                  <div
                    key={item.text}
                    className="border-b border-primary-300 dark:border-primary-600 pb-6 last:border-0 last:pb-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <NavItem
                      key={item.text}
                      {...item}
                    />
                    {/* {item.link ? (
                      <a
                        href={item.link}
                        target={item.linkType === 'out' ? '_blank' : '_self'}
                        rel={item.linkType === 'out' ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary-300 dark:hover:bg-primary-600 transition-colors"
                        // onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="flex-shrink-0">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </a>
                    ) : item.onClick ? (
                      <button
                        onClick={() => {
                          item.onClick?.();
                          // setMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary-300 dark:hover:bg-primary-600 transition-colors w-full text-left"
                      >
                        <span className="flex-shrink-0">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </button>
                    ) : null} */}
                  </div>
                ))}
              </div>
            </DialogPanel>
        </Dialog>
      </StyledHeader>
    </BasicContainer>
  )
}

export default Header;
