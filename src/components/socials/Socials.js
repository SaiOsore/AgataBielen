import React from 'react';
import { 
  SocialsStyled,
  SocialsList,
  SocialsItem,
  SocialsLink,
} from './SocialsStyled';

const links = [
  { link: '#',
    name: 'twitter',
  },
  { link: '#',
    name: 'instagram',
  },
];

const Socials = (props) => {
  const {
    onClick,
    hoverColor,
    color,
  } = props;

  const linksMarkup = links.map((link, index) => (
    <SocialsItem key={index}>
      <SocialsLink
        href={link.link}
        hoverColor={hoverColor}
        color={color}
        onClick={onClick}
        children={link.name}
      />
    </SocialsItem>
  ));

  return (
    <SocialsStyled>
      <SocialsList>
        {linksMarkup}
      </SocialsList>
    </SocialsStyled>
  );
}

export default Socials;