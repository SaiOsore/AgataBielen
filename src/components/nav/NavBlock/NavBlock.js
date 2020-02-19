import React from 'react';
import { 
  NavBlockStyled,
  NavBlockLink,
  NavBlockTitle,
  NavBlockArrow,
  NavBlockNum,
  NavBlockImg
} from './NavBlockStyled';

const NavBlock = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
    link,
    title,
    num,
    src,
    alt
  } = props;

  return (
    <NavBlockStyled>
      <NavBlockLink href={link}>
        <NavBlockTitle>
          {title}
        </NavBlockTitle>
        <NavBlockArrow>→</NavBlockArrow>
        <NavBlockNum>
          Coll. №{num}
        </NavBlockNum>
        <NavBlockImg src={src} alt={alt} />
      </NavBlockLink>
    </NavBlockStyled>
  );
};

export default NavBlock;
