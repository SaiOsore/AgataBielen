import styled from 'styled-components';
import { device, colorVariables } from '../../theme/variables';

export const AboutStyled = styled.div`
  display: flex;
  height: 100%;
  padding: 10vh 7vh 7vh 7vh;
  ${device.tabletL} {
    flex-direction: column;
  }
`;

export const AboutBlock = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${device.tabletL} {
    width: 100%;
    margin-bottom: 50px;
    &:last-child {
      margin: 0;
    }
  }
`;

export const AboutImgWrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutImg = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const AboutTitle = styled.h1`
  text-transform: uppercase;
  font-family: 'AGaramondProItalic';
  text-align: right;
  font-size: 42px;
  width: 100%;
  margin-bottom: 15px;
  ${device.mobileL} {
    font-size: 32px;
  }
`;

export const AboutBio = styled.p`
  text-align: right;
  font-size: 30px;
  & span {
    color: ${colorVariables.accent};
  }
  ${device.laptopL} {
    font-size: 18px;
  }
`;