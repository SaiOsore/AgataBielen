import styled from 'styled-components';
import { colorVariables } from '../../../theme/variables';
import { A } from "hookrouter";
import { get } from 'lodash';

export const LinkStyled = styled(A)`
  pointer-events: ${(props) => props.pointerEvents};
  color: ${(props) => get(colorVariables, props.color, colorVariables.black)};
  transition: color .3s;
  &:hover {
    color: ${(props) => get(colorVariables, props.hoverColor, colorVariables.accent)};
  }
`;