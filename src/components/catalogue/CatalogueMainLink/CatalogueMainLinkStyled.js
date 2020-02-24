import styled, { css } from 'styled-components';
import { device, sizeVariables, colorVariables } from '../../../theme/variables';
import Link from '../../../components/links/Link/Link';

export const CatalogueMainLinkStyled = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: 3vh;
  transform: translateX(-50%);
  font-size: ${(sizeVariables.l).size};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  border-bottom: 1px solid ${(props) => props.textDecoration ? 'none' : 'black'};
  ${device.laptopL} {
    font-size: ${(sizeVariables.m).size};
  }
`;