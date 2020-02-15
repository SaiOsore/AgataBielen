import React from 'react';
import { 
  SocialsStyled,
  SocialsList,
  SocialsItem,
  SocialsLink,
} from './SocialsStyled';

const Socials = (props) => {
  const {
    onClick,
    hoverColor,
    color,
  } = props;
  return (
    <SocialsStyled>
      <SocialsList>
        <SocialsItem>
          <SocialsLink href="#" hoverColor={hoverColor} color={color} onClick={onClick}>
            twitter
          </SocialsLink>
        </SocialsItem>
        <SocialsItem>
          <SocialsLink href="#" hoverColor={hoverColor} color={color} onClick={onClick}>
            instagram
          </SocialsLink>
        </SocialsItem>
      </SocialsList>
    </SocialsStyled>
  );
}

export default Socials;