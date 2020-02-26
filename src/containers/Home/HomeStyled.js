import styled from 'styled-components';
import Link from '../../components/links/Link/Link';
import { get } from 'lodash';
import { colorVariables, sizeVariables, device } from '../../theme/variables';

export const HomeStyled = styled.main`
  position: relative;
  height: 100%;
  min-height: 100vh;
  display: flex;
  ${device.tablet} {
    flex-direction: column;
  }
`;

export const HomeTitle = styled.h2`
  font-size: ${(sizeVariables.xxxl).size};
  text-align: center;
  ${device.tablet} {
    font-size: ${(sizeVariables.xxl).size};
  }
`;

export const HomeLink = styled(Link)`
  color: ${colorVariables.black};
  &:hover {
    color: ${colorVariables.accent};
  }
`;

export const HomeBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: ${(props) => get(colorVariables, props.bgColor, colorVariables.white)};
  ${device.tablet} {
    width: 100%;
  }
`;

export const HomeImgWrapper = styled.div`
  width: 35vh;
  height: 55vh;
  margin: 0 auto 2vh auto;
  ${device.tablet} {
    width: 20vh;
    height: 30vh;
  }
`;

export const HomeImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;
