import styled from 'styled-components';
import { colorVariables } from '../../../theme/variables';
import { A } from 'hookrouter';
import { get } from 'lodash';

export const LinkStyled = styled(A)`
  display: inline-block;
  z-index: 100;
  line-height: 1;
  pointer-events: ${(props) => props.pointerEvents};
  color: ${(props) => get(colorVariables, props.color, colorVariables.black)};
  transition: color .3s, border-color .3s;
  &:hover {
    color: ${(props) => get(colorVariables, props.hovercolor, colorVariables.accent)};
    border-color: ${(props) => get(colorVariables, props.hovercolor, colorVariables.accent)};
  }
`;