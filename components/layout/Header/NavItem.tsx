import Button, { ButtonType, ButtonVariant } from "@/components/Button";
import { useParams, usePathname } from "next/navigation";
import { FC, HTMLProps, ReactNode, useMemo } from "react";
import LinkComponent from "./LinkComponent";
import classNames from "classnames";

export type TNavItem = {
  text: string;
  icon?: ReactNode;
  link?: string;
  linkType?: "out" | "local";
  onClick?: () => void;
  exactMatch?: boolean;
  buttonType?: ButtonType;
  buttonVariant?: ButtonVariant;
  btnClassName?: HTMLProps<HTMLElement>["className"];
};

const NavItem: FC<TNavItem> = ({
  icon,
  text,
  link,
  linkType,
  onClick,
  exactMatch = true,
  buttonType = ButtonType.SECONDARY,
  buttonVariant = ButtonVariant.GHOST,
  btnClassName = '',
}) => {
  const params = useParams();
  const pathname = usePathname();
  const currentLang = (params.lang as string) || "ru";

  const isActive = useMemo(() => {
    if (!link || linkType !== "local") return false;

    const cleanLink = link === "/" ? "" : link.replace(/\/$/, "");
    const cleanPathname = pathname.replace(/\/$/, "");

    const fullLinkPath = `/${currentLang}${cleanLink}`;

    if (exactMatch) {
      return (
        cleanPathname === fullLinkPath ||
        (cleanLink === "" && cleanPathname === `/${currentLang}`)
      );
    } else {
      return (
        cleanPathname === fullLinkPath ||
        cleanPathname.startsWith(`${fullLinkPath}/`) ||
        (cleanLink === "" && cleanPathname.startsWith(`/${currentLang}/`))
      );
    }
  }, [link, linkType, pathname, currentLang, exactMatch]);

  return (
    <li>
      {link && linkType ? (
        <LinkComponent lang={currentLang} link={link} linkType={linkType}>
          <Button
            className={classNames({
              "whitespace-nowrap": true,
              "text-secondary-on-fixed": isActive,
              [btnClassName]: true
            })}
            variant={buttonVariant}
            type={buttonType}
            text={text}
            icon={icon}
            size="lg"
          />
        </LinkComponent>
      ) : (
        <Button
          className={classNames({
            "whitespace-nowrap": true,
            "text-secondary-on-fixed": isActive,
            [btnClassName]: true
          })}
          variant={buttonVariant}
          type={buttonType}
          text={text}
          icon={icon}
          size="lg"
          onClick={onClick}
        />
      )}
    </li>
  );
};

export default NavItem;
