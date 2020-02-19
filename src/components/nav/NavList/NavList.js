import React from 'react';
import { 
  NavListStyled,
  NavListLink,
  NavListItem,
  NavListTextWrapper,
  NavListNum,
  NavListTitle,
  NavListArrow,
} from './NavListStyled';

const NavList = (props) => {
  const {
    links,
  } = props;

  const linksMarkup = links.map((link, index) => (
    <NavListLink key={index} href={link.link}>
      <NavListItem>
        <NavListTextWrapper>
          <NavListNum>Coll. №{link.num}</NavListNum>
          <NavListTitle as="h2">{link.title}</NavListTitle>
        </NavListTextWrapper>
        <NavListArrow>→</NavListArrow>
      </NavListItem>
    </NavListLink>
  ));

  return (
    <NavListStyled>
      {linksMarkup}
    </NavListStyled>
  );
};

export default NavList;
