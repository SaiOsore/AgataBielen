import styled from 'styled-components';
import { device } from '../../../theme/variables';

export const GoldenGridStyled = styled.div`
  display: grid;
  position: relative;;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr 1fr 2fr 4fr 2.66fr 5.33fr 5.33fr 4.33fr 2.83fr 3.5fr 3.5fr 2.83fr 4.33fr 5.33fr 5.33fr 2.66fr 4fr 2fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 2fr 4fr 2.66fr 5.33fr 5.33fr 4.33fr 2.83fr 3.5fr 3.5fr 2.83fr 4.33fr 5.33fr 5.33fr 2.66fr 4fr 2fr 1fr 1fr;
  ${device.mobileL} {
    display: block;
  }
`;

export const GoldenGridRightCol = styled.div`
  grid-area: 1 / 11 / span 20 / span 10;
  background: grey;
`;

export const GoldenGridLeftCol = styled.div`
  grid-area:  1 / 1 / span 20 / span 10;
  background: pink;
`;

export const GoldenGridCenter = styled.div`
  position: relative;
  grid-area:  5 / 5 / span 12 / span 12;
  background: grey;
`;


export const GoldenGridMainTitle = styled.h1`
  grid-area:  8 / 6 / span 6 / span 10;
  font-size: 17vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ede0df;
  opacity: .4;
`;

export const GoldenGridAside = styled.aside`
  position: relative;
  grid-area: 10 / 3 / span 7 / span 1;
`;

export const GoldenGridAsideWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5%;
  left: 0px;
  transform: rotate(-90deg);
`;