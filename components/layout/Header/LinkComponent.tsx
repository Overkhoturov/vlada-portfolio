import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { TNavItem } from "./NavItem";

interface LinkComponentProps extends PropsWithChildren<Required<Pick<TNavItem, 'linkType' | 'link'>>> {
  lang?: string;
}

const LinkComponent: FC<LinkComponentProps> = 
  ({children, linkType, link, lang}) => {
    const getLocalLink = () => {
      if (!link) return '#';
      
      if (link.startsWith('/en/') || link.startsWith('/ru/') || link === '/en' || link === '/ru') {
        return link;
      }
      
      const normalizedLink = link.startsWith('/') ? link : `/${link}`;
      return lang ? `/${lang}${normalizedLink}` : normalizedLink;
    };
    
    return linkType === 'out'
      ? <a target="_blank" rel="noopener noreferrer" href={link}>{children}</a>
      : <Link href={getLocalLink()}>{children}</Link>;
  };

export default LinkComponent;