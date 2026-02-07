
'use client'
import AboutIcon from "@/components/icons/About";
import HomeIcon from "@/components/icons/Home";
import { FC, useContext } from "react";
import { ThemeContext } from "@/utils/providers/theme-provider";
import LanguageIcon from "@/components/icons/Language";
import DarkModeIcon from "@/components/icons/DarkMode";
import LightModeIcon from "@/components/icons/LightMode";
import LogoIcon from "@/components/icons/Logo";
import GmailIcon from "@/components/icons/Gmail";
import TGIcon from "@/components/icons/Telegram";
import HHIcon from "@/components/icons/HH";
import { BasicContainer } from "../Container";
import { StyledHeader } from "./index.styles";
import NavItem, { TNavItem } from "./NavItem";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { DictionaryType } from "@/utils/i18n/dictionaries";

type Props = {
  dictionary: DictionaryType;
}

const Header: FC<Props> = ({ dictionary }) => {
  const {toggleTheme, isDark} = useContext(ThemeContext);
  const router = useRouter();
  const pathname = usePathname();

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

  return (
    <BasicContainer className="sticky top-0 z-10">
      <StyledHeader className="p-8">
        <nav className={classNames({
          "px-8 py-4 rounded-3xl bg-primary-200 flex justify-between items-center": true,
          "text-primary-700 bg-primary-200 shadow-drop-800-medium": !isDark,
          "text-primary-100 bg-primary-700 shadow-inner-100-small": isDark
        })}>
          <ul className="flex gap w-1/3">
            {leftItems.map((item) => (
              <NavItem
                key={item.text}
                {...item}
              />
            ))}
          </ul>
          <LogoIcon />
          <ul className="flex gap justify-end w-1/3">
            {rightItems.map((item) => (
              <NavItem
                key={item.text}
                {...item}
              />
            ))}
          </ul>
        </nav>
      </StyledHeader>
    </BasicContainer>
  )
}

export default Header;
