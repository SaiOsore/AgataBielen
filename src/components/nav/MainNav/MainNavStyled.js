import styled, { keyframes, css } from 'styled-components';
import { colorVariables, device } from '../../../theme/variables';

export const MainNavBlock = styled.div`
  position: relative;
  background: ${colorVariables.main};
  z-index: 3;
  ${(props) => props.First && css`grid-area: 5 / 5 / span 6 / span 2;`};
  ${(props) => props.Second && css`grid-area: 5 / 8 / span 6 / span 2;`};
  ${(props) => props.PreLast && css`grid-area: 11 / 12 / span 6 / span 2;`};
  ${(props) => props.Last && css`grid-area: 11 / 15 / span 6 / span 2;`};
  ${device.tablet} {
    width: 100%;
    height: 50vh;
    padding: 2%;
    margin-bottom: 10vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MainNavContainer = styled.div`
  position: relative;
  z-index: 3;
  ${(props) => props.First && css`grid-area: 5 / 12 / span 3 / span 5;`};
  ${(props) => props.Last && css`grid-area: 14 / 5 / span 3 / span 5;`};
  ${device.tablet} {
    padding 2% 9%;
    margin-bottom: 20px;
  }
`;