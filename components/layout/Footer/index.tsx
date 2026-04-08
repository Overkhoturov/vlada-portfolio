"use client";
import LogoIcon from "@/components/icons/Logo";
import NavItem, { TNavItem } from "../Header/NavItem";
import LinkComponent from "../Header/LinkComponent";
import { useParams } from "next/navigation";
import { useDictionary } from "@/utils/providers/dictionary-context";
import { ButtonType, ButtonVariant } from "@/components/Button";
import Link from "next/link";

const Footer = () => {
  const params = useParams();
  const currentLang = (params.lang as string) || "ru";
  const currentYear = new Date().getFullYear();
  const dictionary = useDictionary();
  const rightItems: TNavItem[] = [
    {
      link: "mailto:sunny.prys@gmail.com",
      linkType: "out",

      text: dictionary.footer.contacts.email,
    },
    {
      link: "https://t.me/sunnyastria",
      linkType: "out",
      text: dictionary.footer.contacts.tg,
    },
    {
      link: "https://taganrog.hh.ru/resume/3e8e86f1ff0855dd2f0039ed1f30537a515078",
      linkType: "out",
      text: dictionary.footer.contacts.linkedin,
    },
  ];

  const leftItems: TNavItem[] = [
    {
      link: "/",
      linkType: "local",
      text: dictionary.footer.navigation.home,
    },
    {
      link: "/about",
      linkType: "local",
      text: dictionary.footer.navigation.about,
    },
  ];

  return (
    <footer className="bg-surface-container-fixed w-full flex flex-col items-center gap-4 px-4 hd:px-16 2k:px-20 4k:px-24 py-8 2k:py-10 4k:py-12">
      <div className="flex flex-col items-center hd:items-start hd:flex-row justify-between gap-4 w-full">
        <div className="text-primary-inverse-fixed">
          <LinkComponent link="/" linkType="local" lang={currentLang}>
            <LogoIcon />
          </LinkComponent>
        </div>
        <div className="flex gap-16">
          <div>
            <h3 className="text-body-medium-strong text-secondary-on-fixed mb-2">
              {dictionary.footer.navigation.title}
            </h3>
            <ul className="flex flex-col gap-2 text-primary-inverse-fixed">
              {leftItems.map((item) => (
                <NavItem
                  {...item}
                  key={item.text}
                  text={item.text}
                  buttonType={ButtonType.LINK}
                  buttonVariant={ButtonVariant.GHOST}
                  btnClassName="!text-primary-inverse-fixed"
                />
              ))}
              <li>
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  {dictionary.footer.navigation.cv}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-body-medium-strong text-secondary-on-fixed mb-2">
              {dictionary.footer.contacts.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {rightItems.map((item) => (
                <NavItem
                  {...item}
                  key={item.link}
                  text={item.text}
                  buttonType={ButtonType.LINK}
                  buttonVariant={ButtonVariant.GHOST}
                  btnClassName="!text-primary-inverse-fixed"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-solid border-outline-inverse-fixed" />
      <p className="text-primary-inverse-fixed text-body-medium-strong flex flex-col text-center">
        <span>
          © {currentYear}. {dictionary.footer.rightsReserved}
        </span>
        <span>{dictionary.footer.withLove}</span>
      </p>
    </footer>
    // <footer className="p-4 flex flex-col text-primary-inverse-fixed tablet:flex-row justify-center items-center gap-2 tablet:gap-4 bg-surface-container-fixed">
    // </footer>
  );
};

export default Footer;
