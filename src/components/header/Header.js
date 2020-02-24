import React from 'react';
import Logo from '../logo/Logo';
import { HeaderStyled, HeaderLogo, HeaderLink } from './HeaderStyled';


const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLogo>
        <HeaderLink href="/">
          <Logo />
        </HeaderLink>
      </HeaderLogo>
    </HeaderStyled>
  );
}

export default Header;