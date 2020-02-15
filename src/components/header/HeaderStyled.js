import styled from 'styled-components';
import Link from '../../components/links/Link/Link';
import { sizeVariables } from '../../theme/variables';

export const HeaderStyled = styled.header`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  flex: 0 0 auto;
  z-index: 30;
`;

export const HeaderLogo = styled.div`
  font-size: ${sizeVariables.xxl.size};
  padding: 1rem;
`;

export const HeaderLink = styled(Link)`
  
`;