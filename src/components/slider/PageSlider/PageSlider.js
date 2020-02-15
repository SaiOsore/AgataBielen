import React from 'react';
import Slider from 'react-slick';
import GoldenGrid from '../../../components/layouts/GoldenGrid/GoldenGrid';
import { 
  GoldenGridLeftCol,
  GoldenGridRightCol,
  GoldenGridAside,
  GoldenGridAsideWrapper,
} from '../../../components/layouts/GoldenGrid/GoldenGridStyled';
import { A } from "hookrouter";
import { 
  PageSliderStyled,
  PageSliderBlockWrapper,
  PageSliderLeft,
  PageSliderRight,
  PageSliderBlock1,
  PageSliderBlock2,
  PageSliderBlock3,
  PageSliderBlock4,
  PageSliderNextArrowStyled,
  PageSliderPrevArrowStyled,
  PageSliderTitle1,
  PageSliderImgWrapper1,
  PageSliderDescr1,
} from './PageSliderStyled';

const PageSliderNextArrow = (props) => {
  const { onClick, className } = props;
  return (
    <PageSliderNextArrowStyled
      onClick={onClick}
      className={'PageSliderNext'}
    >
      next
    </PageSliderNextArrowStyled>
  );
}

const PageSliderPrevArrow = (props) => {
  const { onClick, className } = props;
  return (
    <PageSliderPrevArrowStyled
      onClick={onClick}
      className={'PageSliderPrev'}
    >
      prev
    </PageSliderPrevArrowStyled>
  );
}

const PageSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    className: 'PageSlider',
    nextArrow: <PageSliderNextArrow />,
    prevArrow: <PageSliderPrevArrow />,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    },
    appendDots: dots => (
      <div>
        <ol> {dots} </ol>
      </div>
    ),
    customPaging: i => (
      <div>
        {`0${i + 1}`}
      </div>
    ),
  };

  return (
    <PageSliderStyled>
      <Slider {...settings}>
        <PageSliderBlock1>
          <PageSliderBlockWrapper>
            <PageSliderLeft>
              1
            </PageSliderLeft>
            <PageSliderRight>
              1
            </PageSliderRight>
          </PageSliderBlockWrapper>
        </PageSliderBlock1>
        <PageSliderBlock2>
          2
        </PageSliderBlock2>
        <PageSliderBlock3>
          3
        </PageSliderBlock3>
        <PageSliderBlock3>
          4
        </PageSliderBlock3>
      </Slider>
    </PageSliderStyled>
  );
}

export default PageSlider;