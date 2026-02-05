import Button from "@/components/Button";
import Link from "next/link";
import { FC, ReactNode, PropsWithChildren } from "react";

export type TNavItem = {
  text: string;
  icon: ReactNode;
  link?: string;
  linkType?: 'out' | 'local';
  onClick?: () => void;
}

const LinkComponent: FC<PropsWithChildren<Required<Pick<TNavItem, 'linkType' | 'link'>>>> =
  ({children, linkType, link}) => linkType === 'out'
    ? <a target="_blank" href={link}>{children}</a>
    : <Link href={link}>{children}</Link>;  

const NavItem: FC<TNavItem> = ({icon, text, link, linkType, onClick}) => {
  return (
    <li>
      {link && linkType ? (
        <LinkComponent link={link} linkType={linkType}>
          <Button variant="ghost" type="secondary" text={text} icon={icon} size='lg' />
        </LinkComponent>
      ) : (
        <Button variant="ghost" type="secondary" text={text} icon={icon} size='lg' onClick={onClick} />
      )}
    </li>
  )
}

export default NavItem;
