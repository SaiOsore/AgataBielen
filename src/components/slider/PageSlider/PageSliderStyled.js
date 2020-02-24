import { get } from 'lodash';
import styled, { css } from 'styled-components';
import Link from '../../../components/links/Link/Link';
import { sizeVariables, colorVariables, device } from '../../../theme/variables';

export const PageSliderStyled = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  & .PageSlider {
    position: relative;
    width: 100%;
    height: 100%;
  }

  & .PageSliderNext, & .PageSliderPrev {
    position: absolute;
    top: 3%;
    z-index: 10;
    background: none;
    border: none;
    border-bottom: 1px solid ${colorVariables.black};
    padding: 0;
  }
  & .PageSliderPrev {
    left: 10%;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -80px;
      width: 70px;
      height: 1px;
      background: black;
    }
  }
  & .PageSliderNext {
    right: 10%;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: -80px;
      width: 70px;
      height: 1px;
      background: black;
    }
  }

  & .slick-dots {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
    padding: 10px;
    bottom: initial;
    width: initial;
    background: none;
    & ol, & ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & li {
      position: relative;
      width: initial;
      height: initial;
      transition: font-size .3s;
      margin-bottom: 13px;
    }
    & .slick-active {
      color: ${colorVariables.black};
      font-size: 48px;
      border: none;
      &:not(:last-child):after, :not(:first-child):before {
        content: '';
        display: block;
        position: relative;
        left: 50%;
        top: 100%;
        width: 1px;
        height: 130px;
        background: black;
        margin: 10px 0;
      }
    }
  }

  & .slick-vertical .slick-slide {
    border: none;
    padding: 0;
    margin: 0;
  }
`;

export const PageSliderNextArrowStyled = styled.button`
 
`;

export const PageSliderPrevArrowStyled = styled.button`
  
`;

export const PageSliderBlock = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: ${(props) => get(colorVariables, props.bgColor, colorVariables.white)};
`;

export const PageSliderBlockWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  ${device.tabletL} {
    flex-direction: column;
  }

  ${(props) => props.Column && css`
    flex-direction: column;
  `};
`;

export const PageSliderSideH = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 7vw;
  background-color: ${(props) => get(colorVariables, props.bgColor, 'transparent')};
  ${device.tabletL} {
    width: 100%;
    height: 50%;
  }
`;

export const PageSliderSideV = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  background-color: ${(props) => get(colorVariables, props.bgColor, 'transparent')};

  ${(props) => props.Bottom && css`
    height: 20%;
  `};
`;

export const PageSliderMainTitle = styled.h1`
  position: absolute;
  top: 11%;
  left: 10%;
  font-size: 7vw;
  white-space: nowrap;
  font-weight: 400;
`;

export const PageSliderTitle = styled.h2`
  position: absolute;
  top: 20%;
  left: -2%;
  font-size: 6vw;
  white-space: nowrap;
  font-weight: 400;
  line-height: 1;
  letter-spacing: ${sizeVariables.xxl.spacing}
`;

export const PageSliderSpecialText = styled.p`
  ${(props) => props.Special20 && css`
    margin-left: -15%;
  `};
  ${(props) => props.Special50 && css`
    margin-left: -40%;
  `};
`;

export const PageSliderMainImgWrapper = styled.div`
  width: 50%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PageSliderImgWrapper2 = styled.div`
  width: 44%;
  height: 78%;
  position: absolute;
  top: 0%;
  left: 22%;
`;

export const PageSliderImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

export const PageSliderImgBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  width: 50%;
  & img {
    margin-bottom: 10px;
  }
  & p {
    text-align: justify;
  }
`;

export const PageSliderImgBlockWrapper = styled.div`
  width: 100%;
  height: 50%;
`;

export const PageSliderAbout = styled.p`
  position: absolute;
  bottom: 12%;
  right: -2%;
  width: 27%;
  padding: 2% 9% 0% 0;
  border-top: 1px solid black;
  z-index: 10;
  ${device.laptopL} {
    width: 55%;
  }
  ${device.laptop} {
    width: 75%;
  }
`;

export const PageSliderTaglineBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PageSliderTaglineAuthor = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 3%;
  & span {
    &:first-child {
      &:after {
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 50%;
        margin: 0 15px;
        display: inline-block;
        background: ${colorVariables.black};
      }
    }
  }
`;

export const PageSliderTagline = styled.p`
  width: 100%;
  font-family: 'AGaramondProItalic', serif;
  text-align: center;
  font-size: 4vw;
  line-height: 1;
  &:after, &:before {
    content: '';
    display: block;
    position: relative;
    left: 50%;
    width: 1px;
    height: 8vw;
    background: black;
    margin: 10px 0;
  }
  &:after {
    top: 0%;
    margin: 2vw 0;
  }
  &:before {
    bottom: 0%;
  }
`;

export const PageSliderTaglineLink = styled.a`
  display: block;
  line-height: 1;
  border-bottom: 1px solid ${colorVariables.black};
  color: ${colorVariables.black};
  position: relative;
  &:after {
    content: '+';
    display: inline-block;
    position: absolute;
    left: 120%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const PageSliderNextLinkStyled = styled(Link)`
  position: absolute;
  right: 0%;
  bottom: 1vh;
  width: initial;
  height: initial;
  display: inline-flex;
  align-items: center;
  font-size: 44px;
  &:after {
    content: '';
    display: inline-block;
    margin-left: 10px;
    width: 5vw;
    height: 1px;
    background-color: ${colorVariables.black};
  }
`;

export const PageSliderTagBlock = styled.div`
  display: flex;
  padding: 0 20%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 70%;
  left: 47%;
  transform: translate(-50%, -50%);
`;

export const PageSliderTag = styled.span`
  margin-right: 2vw;
`;

export const PageSliderTagDate = styled.span`
  
`;

export const PageSliderTagImgWrapper = styled.div`
  width: 30%;
`;


export const PageSliderSquare = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  & path {
    height: 300px;
    width: 200px;
    fill: white;
  }
`;