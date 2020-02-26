import styled from 'styled-components';
import { colorVariables, device } from '../../../theme/variables';
import { get } from 'lodash';
import Link from '../../../components/links/Link/Link';

export const NavBlockStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavBlockImgWrapper = styled.div`
  height: 100%;
  ${device.tablet} {
    height: 60%;
    margin: 0 auto;
  }
`;

export const NavBlockImg = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

export const NavBlockTextBlock = styled.div`
  ${device.tablet} {
    margin-right: 20px;
  }
`;

export const NavBlockTitle= styled.h2`
  position: absolute;
  bottom: 3%;
  left: -25%;
  font-size: 24px;
  transition: color .3s;
  color: ${colorVariables.black};
  white-space: nowrap;
  ${device.tablet} {
    font-size: 15px;
    position: initial;
    bottom: initial;
    left: initial;
  }
`;

export const NavBlockArrow= styled.div`
  position: absolute;
  bottom: -10%;
  left: -25%;
  font-size: 18px;
  opacity: .5;
  transition: color .3s;
  ${device.tablet} {
    position: initial;
    bottom: initial;
    left: initial;
    margin-bottom: 10px;
  }
`;

export const NavBlockNum = styled.div`
  position: absolute;
  top: 8%;
  left: -38%;
  font-size: 14px;
  transform: rotate(-90deg);
  color: black;
  opacity: .5;
  white-space: nowrap;
  ${device.tablet} {
    position: initial;
    bottom: initial;
    left: initial;
    transform: none;
    margin-bottom: 10px;
  }
`;

export const NavBlockLink = styled(Link)`
  color: ${colorVariables.black40};
  height: 100%;
  width: 100%;
  display: block;
  &:hover {
    ${NavBlockTitle}, ${NavBlockArrow} {
      color: ${colorVariables.accent};
    }
    ${NavBlockArrow} {
      left: 0%;
    }
  }
  ${device.tablet} {
    padding: 0 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;