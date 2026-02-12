'use client'

import Button from "@/components/Button"
import BackIcon from "@/components/icons/Back";
import NavItem, { TNavItem } from "@/components/layout/Header/NavItem";
import GmailIcon from "@/components/icons/Gmail";
import TGIcon from "@/components/icons/Telegram";
import HHIcon from "@/components/icons/HH";
import { useBreakpoint } from "@/utils/hooks/useBreakPoint";

  const rightItems: TNavItem[] = [
    {link: 'mailto:sunny.prys@gmail.com', linkType: 'out', text: 'Email', icon: <GmailIcon /> },
    {link: 'https://t.me/sunnyastria', linkType: 'out', text: 'Telegram', icon: <TGIcon /> },
    {link: 'https://taganrog.hh.ru/resume/3e8e86f1ff0855dd2f0039ed1f30537a515078', linkType: 'out', text: 'HeadHunter', icon: <HHIcon /> },
  ]

const HeaderBlock = () => {
  const { isMobileStrict } = useBreakpoint();
  
  return (
    <div className="flex items-center justify-between mb-4">
      <Button text="На главную" icon={<BackIcon />} variant="ghost" type="secondary" size="lg" />

      <ul className="flex items-center">
        {rightItems.map((item) => (
          <NavItem
            {...item}
            key={item.text}
            text={!isMobileStrict ? item.text : ''}
          />
        ))}
      </ul>
    </div>
  )
}

export default HeaderBlock;
