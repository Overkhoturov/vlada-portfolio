
'use client'
import { BasicContainer } from "../Container";
import { StyledHeader } from "./index.styles";
import AboutIcon from '../../../public/icons/vk.svg'
import NavItem from "./NavItem";

const Header = () => {
  return (
    <BasicContainer>
      <StyledHeader className="p-8">
        <nav className="px-8 py-4 rounded-3xl">
          <NavItem linkType="local" text="Обо мне" link="#" icon={AboutIcon} />
        </nav>
      </StyledHeader>
    </BasicContainer>
  )
}

export default Header;
