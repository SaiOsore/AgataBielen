import styled from 'styled-components';
import { get } from 'lodash';
import { colorVariables, sizeVariables, device } from '../../theme/variables';

export const SocialsStyled = styled.div`
  position: fixed;
  top: 70vh;
  left: -40px;
  transform: rotate(-90deg);
  font-size: ${(sizeVariables.m).size};
  z-index: 100;
  ${device.laptopL} {
    font-size: ${(sizeVariables.s).size};
  }
  ${device.tabletL} {
    left: -60px;
  }
`;

export const SocialsList = styled.ul`
  position: relative;
  display: flex;
`;

export const SocialsItem = styled.li`
  position: relative;
  margin-right: 40px;
  border-bottom: 1px solid ${colorVariables.black};
  transition: border-color .3s;
  &:last-child {
    &:after {
      content: '';
      position: absolute;
      left: calc(100% + 40px);
      top: 50%;
      width: 150%;
      height: 1px;
      background: black;
    }
  }
  &:hover {
    border-color: ${colorVariables.accent};
  }
`;

export const SocialsLink = styled.a`
  position: relative;
  color: ${(props) => get(colorVariables, props.color, colorVariables.black)};
  transition: color .3s;
  &:hover {
    color: ${(props) => get(colorVariables, props.hoverColor, colorVariables.accent)};
  }
`;