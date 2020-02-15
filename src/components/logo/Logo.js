import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.div`
  font-size: 3vh;
  position: relative;
  white-space: nowrap;
  &:before, &:after {
    content: '.';
    position: absolute;
  }
  &:before {
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
  }
  &:after {
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Logo = () => {
  return (
    <LogoStyled>
      <span>Agata Bielen'</span>
    </LogoStyled>
  );
}

export default Logo;