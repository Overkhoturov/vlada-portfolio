import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { TNavItem } from "./NavItem";

interface LinkComponentProps extends PropsWithChildren<Required<Pick<TNavItem, 'linkType' | 'link'>>> {
  lang?: string;
}

const LinkComponent: FC<LinkComponentProps> = 
  ({children, linkType, link, lang}) => {
    // Add language prefix to local links
    const getLocalLink = () => {
      if (!link) return '#';
      
      // If link already starts with a language, use as-is
      if (link.startsWith('/en/') || link.startsWith('/ru/') || link === '/en' || link === '/ru') {
        return link;
      }
      
      // Add language prefix
      const normalizedLink = link.startsWith('/') ? link : `/${link}`;
      return lang ? `/${lang}${normalizedLink}` : normalizedLink;
    };
    
    return linkType === 'out'
      ? <a target="_blank" rel="noopener noreferrer" href={link}>{children}</a>
      : <Link href={getLocalLink()}>{children}</Link>;
  };

export default LinkComponent;