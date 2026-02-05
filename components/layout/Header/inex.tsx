
'use client'
import AboutIcon from "@/components/icons/About";
import HomeIcon from "@/components/icons/Home";
import { BasicContainer } from "../Container";
import { StyledHeader } from "./index.styles";
// import AboutIcon from '../../../public/icons/vk.svg'
import NavItem, { TNavItem } from "./NavItem";
import { useContext } from "react";
import { ThemeContext } from "@/app/theme-provider";
import LanguageIcon from "@/components/icons/Language";
import DarkModeIcon from "@/components/icons/DarkMode";
import LightModeIcon from "@/components/icons/LightMode";
import LogoIcon from "@/components/icons/Logo";
import GmailIcon from "@/components/icons/Gmail";
import TGIcon from "@/components/icons/Telegram";
import HHIcon from "@/components/icons/HH";


const Header = () => {
  const {toggleTheme, isDark} = useContext(ThemeContext);

  // const handleThemeChange = () => {
  //   toggleTheme()
  // }

  const handleLangChange = () => {
    // toggleTheme()
  }

  const leftItems: TNavItem[] = [
    {link: '/', linkType: 'local', text: 'Главная', icon: <HomeIcon /> },
    {link: '/about', linkType: 'local', text: 'Обо мне', icon: <AboutIcon /> },
    {onClick: handleLangChange, text: 'Рус', icon: <LanguageIcon /> },
    {onClick: toggleTheme, text: isDark ? 'Dark' : 'Light', icon: isDark ? <DarkModeIcon /> : <LightModeIcon /> },
  ]

  const rightItems: TNavItem[] = [
    {link: 'mailto:mail@htmlacademy.ru', linkType: 'local', text: 'Email', icon: <GmailIcon /> },
    {link: 'https://t.me/sunnyastria', linkType: 'out', text: 'Telegram', icon: <TGIcon /> },
    {link: 'https://career.habr.com/sunnyastria1234', linkType: 'out', text: 'HeadHunter', icon: <HHIcon /> },
  ]

  return (
    <BasicContainer className="sticky top-0 z-10">
      <StyledHeader className="p-8">
        <nav className="px-8 py-4 rounded-3xl bg-primary-200 flex justify-between items-center shadow-drop-800-medium">
          <ul className="flex gap">
            {leftItems.map((item) => (
              <NavItem
                key={item.text}
                {...item}
              />
            ))}
          </ul>
          <LogoIcon />
          <ul className="flex gap">
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
