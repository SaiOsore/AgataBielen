import styled from 'styled-components';
import { colorVariables } from '../../../theme/variables';
import { get } from 'lodash';
import Link from '../../../components/links/Link/Link';

export const NavBlockStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavBlockImg = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

export const NavBlockTitle= styled.h2`
  position: absolute;
  bottom: 3%;
  left: -25%;
  font-size: 24px;
  transition: color .3s;
  color: ${colorVariables.black};
`;

export const NavBlockArrow= styled.div`
  position: absolute;
  bottom: -10%;
  left: -25%;
  font-size: 18px;
  opacity: .5;
  transition: 1s;
`;

export const NavBlockNum = styled.div`
  position: absolute;
  top: 8%;
  left: -38%;
  font-size: 14px;
  transform: rotate(-90deg);
  color: black;
  opacity: .5;
`;

export const NavBlockLink = styled(Link)`
  color: ${colorVariables.black40};
  &:hover {
    ${NavBlockTitle} {
      color: ${colorVariables.accent};
    }
    ${NavBlockArrow} {
      left: 0%;
    }
  }
`;