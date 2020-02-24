import styled from 'styled-components';
import { get } from 'lodash';
import { device, colorVariables } from '../../../theme/variables';

export const GoldenGridStyled = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr 1fr 2fr 4fr 2.66fr 5.33fr 5.33fr 4.33fr 2.83fr 3.5fr 3.5fr 2.83fr 4.33fr 5.33fr 5.33fr 2.66fr 4fr 2fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 2fr 4fr 2.66fr 5.33fr 5.33fr 4.33fr 2.83fr 3.5fr 3.5fr 2.83fr 4.33fr 5.33fr 5.33fr 2.66fr 4fr 2fr 1fr 1fr;
`;

const GridStyled = styled.div`
  position: relative;
  background-color: ${(props) => get(colorVariables, props.bgColor, colorVariables.white)};
`;

export const GoldenGridRightCol = styled(GridStyled)`
  grid-area: 1 / 11 / span 20 / span 10;
`;

export const GoldenGridLeftCol = styled(GridStyled)`
  grid-area:  1 / 1 / span 20 / span 10;
`;

export const GoldenGridCenter = styled(GridStyled)`
  grid-area:  5 / 5 / span 12 / span 12;
`;

export const GoldenGridAsideWrapper = styled(GridStyled)`
  width: 100%;
  position: absolute;
  bottom: 5%;
  left: 0px;
  transform: rotate(-90deg);
`;

export const GoldenGridAside = styled.aside`
  position: relative;
  grid-area: 10 / 3 / span 7 / span 1;
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