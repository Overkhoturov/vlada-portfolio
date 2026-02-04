import Button from "@/components/Button";
import Link from "next/link";
import { FC, ReactNode, PropsWithChildren } from "react";

type Props = {
  text: string;
  icon: ReactNode;
  link: string;
  linkType: 'out' | 'local';
}

const LinkComponent: FC<PropsWithChildren<Pick<Props, 'linkType' | 'link'>>> =
  ({children, linkType, link}) => linkType === 'out'
    ? <a target="_blank" href={link}>{children}</a>
    : <Link href={link}>{children}</Link>;

const NavItem: FC<Props> = ({icon, text, link, linkType}) => {
  return (
    <li>
      <LinkComponent link={link} linkType={linkType}>
        <Button variant="ghost" type="secondary" text={text} icon={icon} size='lg' />
      </LinkComponent>
    </li>
  )
}

export default NavItem;
