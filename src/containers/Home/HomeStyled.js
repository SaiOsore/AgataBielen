import styled from 'styled-components';
import Link from '../../components/links/Link/Link';
import { colorVariables, sizeVariables } from '../../theme/variables';

export const HomeStyled = styled.main`
  position: relative;
  height: 100%;
  min-height: 100vh;
`;

export const HomeTitle = styled.h2`
  font-size: ${(sizeVariables.xxxl).size};
  text-align: center;
`;

export const HomeLink = styled(Link)`
  width: 37%;
  height: 50%;
  color: ${colorVariables.white};
  &:hover {
    color: ${colorVariables.black};
  }
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HomeRightContainer = styled(HomeContainer)`

`;

export const HomeLeftContainer = styled(HomeContainer)`
  
`;

export const HomeImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;
