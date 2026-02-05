import Button from "@/components/Button";
import { useParams } from "next/navigation";
import { FC, ReactNode } from "react";
import LinkComponent from "./LinkComponent";

export type TNavItem = {
  text: string;
  icon: ReactNode;
  link?: string;
  linkType?: 'out' | 'local';
  onClick?: () => void;
}

const NavItem: FC<TNavItem> = ({icon, text, link, linkType, onClick}) => {
  const params = useParams();
  const currentLang = params.lang as string || 'ru'; 
  return (
    <li>
      {link && linkType ? (
        <LinkComponent lang={currentLang} link={link} linkType={linkType}>
          <Button variant="ghost" type="secondary" text={text} icon={icon} size='lg' />
        </LinkComponent>
      ) : (
        <Button variant="ghost" type="secondary" text={text} icon={icon} size='lg' onClick={onClick} />
      )}
    </li>
  )
}

export default NavItem;
