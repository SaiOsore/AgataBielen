import styled from 'styled-components';
import { colorVariables, device, sizeVariables } from '../../../theme/variables';

export const PageSliderCaptionsStyled = styled.div`
  position: absolute;
  bottom: 3vh;
  line-height: 1;
  left: 6vw;
  font-size: 14px;
  z-index: 100;
  display: flex;
  align-items: baseline;
`;

export const PageSliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6vw;
`;

export const PageSliderBlock = styled.div`
  margin-right: 22px;
  &:last-child {
    margin-right: 0;
  }
`;

export const PageSliderCaptionsNum = styled.div`
  font-size: ${(sizeVariables.xxl).size};
  ${device.laptop} {
    font-size: ${(sizeVariables.l).size};
  }
`;

export const PageSliderCaptionsLine = styled.div`
  width: 10vw;
  height: 1px;
  background: ${colorVariables.black};
`;