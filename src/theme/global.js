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
    letter-spacing: ${sizeVariables.m.spacing}
    font-family: ${fontVariables.main};
    font-weight: 400;
    line-height: 1.5;
    overflow-x: hidden;
  }
`;
