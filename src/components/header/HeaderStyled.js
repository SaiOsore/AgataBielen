import styled from 'styled-components';
import Link from '../../components/links/Link/Link';
import { sizeVariables } from '../../theme/variables';

export const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 0 0 auto;
  z-index: 300;
`;

export const HeaderLogo = styled.div`
  font-size: ${sizeVariables.xxl.size};
  padding-top: 1.5vh;
`;

export const HeaderLink = styled(Link)`
  
`;