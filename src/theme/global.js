import { createGlobalStyle } from 'styled-components';
import optimize from '../theme/optimize';
import fonts from '../theme/fonts';
import { fontVariables, sizeVariables, colorVariables } from '../theme/variables';

export const GlobalStyle = createGlobalStyle`
  ${optimize};
  ${fonts};

  body {
    display: flex;
    flex-direction: column;
    color: ${colorVariables.black};
    font-size: ${sizeVariables.m.size};
    font-family: ${fontVariables.main};
    overflow-x: hidden;
  }
`;
