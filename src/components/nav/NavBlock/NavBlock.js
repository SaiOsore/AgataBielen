import React from 'react';
import { 
  NavBlockStyled,
  NavBlockLink,
  NavBlockTextBlock,
  NavBlockTitle,
  NavBlockArrow,
  NavBlockNum,
  NavBlockImgWrapper,
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
        <NavBlockTextBlock>
          <NavBlockTitle>
            {title}
          </NavBlockTitle>
          <NavBlockArrow>→</NavBlockArrow>
          <NavBlockNum>
            Coll. №{num}
          </NavBlockNum>
        </NavBlockTextBlock>
        <NavBlockImgWrapper>
          <NavBlockImg src={src} alt={alt} />
        </NavBlockImgWrapper>
      </NavBlockLink>
    </NavBlockStyled>
  );
};

export default NavBlock;
