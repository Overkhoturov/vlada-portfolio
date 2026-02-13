'use client'
import LogoIcon from "@/components/icons/Logo";
import GmailIcon from "@/components/icons/Gmail";
import TGIcon from "@/components/icons/Telegram";
import HHIcon from "@/components/icons/HH";
import NavItem, { TNavItem } from "../Header/NavItem";
import LinkComponent from "../Header/LinkComponent";
import { useParams } from "next/navigation";
import { DictionaryType } from "@/utils/i18n/dictionaries";
import { FC } from "react";

const rightItems: TNavItem[] = [
  {link: 'mailto:sunny.prys@gmail.com', linkType: 'out', text: '', icon: <GmailIcon /> },
  {link: 'https://t.me/sunnyastria', linkType: 'out', text: '', icon: <TGIcon /> },
  {link: 'https://taganrog.hh.ru/resume/3e8e86f1ff0855dd2f0039ed1f30537a515078', linkType: 'out', text: '', icon: <HHIcon /> },
]

type Props = {
  dictionary: DictionaryType;
}

const Footer: FC<Props> = ({dictionary}) => {
  const params = useParams();
  const currentLang = params.lang as string || 'ru';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 flex flex-col text-primary-inverse-fixed tablet:flex-row justify-center items-center gap-2 tablet:gap-4 bg-surface-container-fixed">
      <LinkComponent link="/" linkType="local" lang={currentLang}>
        <LogoIcon />
      </LinkComponent>
      <ul className="flex tablet:hidden gap-4 justify-end ">
        {rightItems.map((item) => (
          <NavItem
            {...item}
            key={item.link}
            text={item.text}
          />
        ))}
      </ul>
      <span className="text-body-medium-strong">© {currentYear}. {dictionary.footer.rightsReserved}</span>
    </footer>
  )
}

export default Footer;
