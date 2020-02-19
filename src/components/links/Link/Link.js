import React from 'react';
import { LinkStyled } from './LinkStyled';

const Link = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
    hoverColor,
    color,
    pointerEvents
  } = props;

  return (
    <LinkStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
      color={color}
      hovercolor={hoverColor}
      pointerEvents={pointerEvents}
    >
      {' '}
      {children}
    </LinkStyled>
  );
};

export default Link;
