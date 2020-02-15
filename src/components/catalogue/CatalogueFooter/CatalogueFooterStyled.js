import styled from 'styled-components';
import { device, sizeVariables } from '../../../theme/variables';
import Link from '../../../components/links/Link/Link';

export const CatalogueFooterStyled = styled.footer`
  position: relative;
  grid-area: 18 / 1 / span 3 / span 20;
  z-index: 4;
`;

export const CatalogueFooterLinkWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  text-decoration: ${(props) => props.textDecoration || 'none'};
`;

export const CatalogueFooterLink = styled(Link)`
  font-size: ${(sizeVariables.l).size};
  ${device.laptopL} {
    font-size: ${(sizeVariables.m).size};
  }
`;