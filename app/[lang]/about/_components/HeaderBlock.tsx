"use client";

import Button, { ButtonType, ButtonVariant } from "@/components/Button";
import BackIcon from "@/components/icons/Back";
import NavItem, { TNavItem } from "@/components/layout/Header/NavItem";
import GmailIcon from "@/components/icons/Gmail";
import TGIcon from "@/components/icons/Telegram";
import HHIcon from "@/components/icons/HH";
import { useBreakpoint } from "@/utils/hooks/useBreakPoint";
import LinkComponent from "@/components/layout/Header/LinkComponent";
import { useParams } from "next/navigation";
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

const HeaderBlock = () => {
  const dictionary = useDictionary();
  const { isMobileStrict } = useBreakpoint();
  const params = useParams();
  const currentLang = (params.lang as string) || "ru";

  return (
    <div className="flex items-center justify-between mb-8 full-hd:mb-12 2k:mb-[60px] 4k:mb-[72px]">
      <LinkComponent lang={currentLang} link={"/"} linkType="local">
        <Button
          text={dictionary.about.headerBlock.backbutton}
          icon={<BackIcon />}
          variant={ButtonVariant.GHOST}
          type={ButtonType.SECONDARY}
          size="lg"
        />
      </LinkComponent>

      <ul className="flex items-center">
        {rightItems.map((item) => (
          <NavItem
            {...item}
            key={item.text}
            text={!isMobileStrict ? item.text : ""}
          />
        ))}
      </ul>
    </div>
  );
};

export default HeaderBlock;
