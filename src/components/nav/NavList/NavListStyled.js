import styled from 'styled-components';
import { colorVariables } from '../../../theme/variables';
import { get } from 'lodash';
import Link from '../../../components/links/Link/Link';

export const NavListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  font-size: 14px;
`;

const NavListText = styled.div`
  font-size: 14px;
`;

export const NavListTextWrapper = styled.div`
  display: flex;
`;

export const NavListTitle= styled(NavListText)`
  margin-right: 30px;
  color: ${colorVariables.black};
`;

export const NavListNum = styled(NavListText)`
  margin-right: 30px;
  width: 50px;
  white-space: nowrap;
  color: ${colorVariables.black};
  opacity: .4;
`;

export const NavListArrow = styled(NavListText)`
  color: ${colorVariables.black40};
  transition: 1s;
`;

export const NavListItem = styled.div`
  display: flex;
  justify-content: space-between;
  &:hover {
    ${NavListArrow} {
      transform: translateX(20px);
    }
    ${NavListTitle} {
      color: ${colorVariables.accent};
    }
  }
`;

export const NavListLink = styled(Link)`
  color: ${colorVariables.black40};
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;