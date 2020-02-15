import { get } from 'lodash';
import styled from 'styled-components';
import { colorVariables, device } from '../../../theme/variables';

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
    top: 2%;
    z-index: 10;
    background: none;
    border: none;
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

const PageSliderBlock = styled.div`
  height: 100vh;
  min-height: 100vh;
  padding: 0;
  margin: 0;
`;

export const PageSliderNextArrowStyled = styled.button`
 
`;

export const PageSliderPrevArrowStyled = styled.button`
  
`;

export const PageSliderContainer = styled.div`
  background-color: ${(props) => get(colorVariables, props.bgColor, colorVariables.white)};
`;

export const PageSliderBlock1 = styled(PageSliderBlock)`
  background: green;
`;

export const PageSliderBlock2 = styled(PageSliderBlock)`
  background: grey;
`;

export const PageSliderBlock3 = styled(PageSliderBlock)`
  background: pink;
`;

export const PageSliderBlock4 = styled(PageSliderBlock)`
  background: orange;
`;

export const PageSliderBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const PageSliderLeft = styled.div`
  width: 50%;
  height: 100%;
`;

export const PageSliderRight = styled.div`
  width: 50%;
  height: 100%;
`;

export const PageSliderTitle1 = styled.h1`
  font-size: 4rem;
  white-space: nowrap;
`;

export const PageSliderImgWrapper1 = styled.div`
  position: relative;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`;

export const PageSliderDescr1 = styled.div`
  font-size: 14px;
  padding: 20px 20% 20px 0;
  border-top: 1px solid black;
`;