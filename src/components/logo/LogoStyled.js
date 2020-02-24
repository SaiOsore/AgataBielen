import styled from 'styled-components';

export const LogoStyled = styled.div`
  font-size: 3vh;
  position: relative;
  white-space: nowrap;
  &:before, &:after {
    content: '.';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  &:before {
    top: -100%;
  }
  &:after {
    bottom: -50%;
  }
  & i {
    position: absolute;
    top: 0;
    right: 0;
  }
`;