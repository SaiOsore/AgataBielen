import styled from 'styled-components';
import { device, sizeVariables } from '../../../theme/variables';
import Link from '../../../components/links/Link/Link';

export const CatalogueMainLinkContainer = styled.div`
  position: absolute;
  height: 7vh;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CatalogueMainLinkWrapper = styled.div`
  text-decoration: ${(props) => props.textDecoration || 'none'};
`;

export const CatalogueMainLinkStyled = styled(Link)`
  font-size: ${(sizeVariables.l).size};
  ${device.laptopL} {
    font-size: ${(sizeVariables.m).size};
  }
`;