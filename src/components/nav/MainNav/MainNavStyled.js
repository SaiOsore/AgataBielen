import styled from 'styled-components';
import Link from '../../../components/links/Link/Link';
// import { device } from '../../theme/variables';

export const MainNavLink = styled(Link)`
  
`;

export const MainNavFirst = styled.div`
  position: relative;
  grid-area: 5 / 5 / span 6 / span 2;
  background: pink;
  z-index: 3;
`;

export const MainNavSecond = styled.div`
  position: relative;
  grid-area: 5 / 8 / span 6 / span 2;
  background: blue;
  z-index: 3;
`;

export const MainNavPreLast = styled.div`
  position: relative;
  grid-area: 11 / 12 / span 6 / span 2;
  background: red;
  z-index: 2;
`;

export const MainNavLast = styled.div`
  position: relative;
  grid-area: 11 / 15 / span 6 / span 2;
  background: green;
  z-index: 2;
`;

export const MainNavImg = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

export const MainNavTitle= styled.h2`
  position: absolute;
  bottom: 3%;
  left: -25%;
  font-size: 24px;
  color: black;
`;

export const MainNavArrow= styled.div`
  position: absolute;
  bottom: -10%;
  left: -25%;
  font-size: 18px;
  opacity: .5;
`;

export const MainNavNum = styled.div`
  position: absolute;
  top: 8%;
  left: -38%;
  font-size: 14px;
  transform: rotate(-90deg);
  color: black;
  opacity: .5;
`;


const MainNavBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MainNavBlockFirst = styled(MainNavBlock)`
  grid-area: 5 / 12 / span 3 / span 5;
  z-index: 3;
`;

export const MainNavBlockLast = styled(MainNavBlock)`
  grid-area: 14 / 5 / span 3 / span 5;
  z-index: 3;
`;

export const MainNavBlockContainer = styled.div`
  & A {
    margin-bottom: 9px;
    display: block;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const MainNavBlockItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainNavBlockText = styled.div`
  font-size: 14px;
`;

export const MainNavBlockTextWrapper = styled.div`
  display: flex;
`;

export const MainNavBlockTitle= styled(MainNavBlockText)`
  margin-right: 30px;
  color: black;
`;

export const MainNavBlockNum = styled(MainNavBlockText)`
  margin-right: 30px;
  width: 50px;
  white-space: nowrap;
  color: black;
  opacity: .4;
`;

export const MainNavBlockArrow = styled(MainNavBlockText)`
  color: black;
  opacity: .4;
`;