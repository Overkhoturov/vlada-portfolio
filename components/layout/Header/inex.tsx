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
import NavItem, { TNavItem } from "./NavItem";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { DictionaryType } from "@/utils/i18n/dictionaries";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useBreakpoint } from "@/utils/hooks/useBreakPoint";

type Props = {
  dictionary: DictionaryType;
}

const Header: FC<Props> = ({ dictionary }) => {
  const { isTablet } = useBreakpoint();
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
    {link: 'mailto:sunny.prys@gmail.com', linkType: 'out', text: 'Email', icon: <GmailIcon /> },
    {link: 'https://t.me/sunnyastria', linkType: 'out', text: 'Telegram', icon: <TGIcon /> },
    {link: 'https://taganrog.hh.ru/resume/3e8e86f1ff0855dd2f0039ed1f30537a515078', linkType: 'out', text: 'HeadHunter', icon: <HHIcon /> },
  ]

  const allItems = [...leftItems, ...rightItems];

  return (
    <BasicContainer className="sticky top-0 z-50">
      <header className="p-4 tablet:p-8">
        <nav className={classNames({
          "px-8 py-4 rounded-3xl bg-primary-200 grid grid-cols-2 tablet:grid-cols-[1fr_auto_1fr] justify-between items-center bg-surface-bright text-primary": true,
          "shadow-drop-800-medium": !isDark,
          "shadow-inner-100-small": isDark
        })}>
          <ul className="hidden tablet:flex gap-4 ">
            {leftItems.map((item) => (
              <NavItem
                {...item}
                key={item.text}
                text={!isTablet ? item.text : ''}
              />
            ))}
          </ul>

          <div className="flex items-center justify-end tablet:justify-center">
            <LogoIcon />
          </div>

          <ul className="hidden tablet:flex gap-4 justify-end ">
            {rightItems.map((item) => (
              <NavItem
                {...item}
                key={item.text}
                text={!isTablet ? item.text : ''}
              />
            ))}
          </ul>

          <div className="flex tablet:hidden justify-end tablet:justify-center">

            <button
              type="button"
              className="p-2 rounded-lg z-50 hover:bg-primary-300 dark:hover:bg-primary-600 transition-colors"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? (
                <CrossIcon />
              ) : (
                <BurgerIcon />
              )}
            </button>
          </div>
        </nav>

        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          transition
          className="tablet:hidden fixed inset-0 flex w-screen items-center justify-center bg-black/30 transition duration-300 ease-out data-closed:opacity-0"
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
                  </div>
                ))}
              </div>
            </DialogPanel>
        </Dialog>
      </header>
    </BasicContainer>
  )
}

export default Header;
