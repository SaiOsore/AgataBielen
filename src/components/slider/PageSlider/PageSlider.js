import React from 'react';
import Slider from 'react-slick';
import PageSliderСaptions from '../../../components/slider/PageSliderСaptions/PageSliderСaptions';
import { 
  PageSliderStyled,
  PageSliderNextArrowStyled,
  PageSliderPrevArrowStyled,
  PageSliderSquare,

  PageSliderBlockWrapper,
  PageSliderBlock,

  PageSliderSideH,
  PageSliderSideV,

  PageSliderTitle1,
  PageSliderTitle2,
  PageSliderSpecialText,
  PageSliderImgWrapper1,
  PageSliderImgWrapper2,
  PageSliderImg,
  PageSliderImgBlock,
  PageSliderAbout,
  PageSliderTaglineBlock,
  PageSliderTagline,
  PageSliderTaglineAuthor,
  PageSliderTaglineLink,
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

const PageSlider = (props) => {
  const {
    postDate,
    author,
    num,
    mainTitle,
    mainAbout,
    mainImgSrc,
    secondImgSrc,
    blockImgSrc,
    blockImgText,
  } = props;
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
      <PageSliderСaptions 
        postDate={postDate}
        author={author}
        num={num}
      />
      <Slider {...settings}>
        <PageSliderBlock
          bgColor={'white'}
        >
          <PageSliderBlockWrapper>
            <PageSliderSideH bgColor={''}>
              <PageSliderTitle1>
                {mainTitle}
              </PageSliderTitle1>
              <PageSliderAbout>
                {mainAbout}
              </PageSliderAbout>
            </PageSliderSideH>
            <PageSliderSideH bgColor={'main'}>
              <PageSliderImgWrapper1>
                <PageSliderImg src={mainImgSrc} alt='main image'/>
              </PageSliderImgWrapper1>
            </PageSliderSideH>
          </PageSliderBlockWrapper>
        </PageSliderBlock>
        <PageSliderBlock
          bgColor={'white'}
        >
          <PageSliderBlockWrapper>
            <PageSliderSideH bgColor={'second'}>
              <PageSliderImgWrapper2>
                <PageSliderImg src={secondImgSrc} alt='second image'/>
              </PageSliderImgWrapper2>
            </PageSliderSideH>
            <PageSliderSideH bgColor={''}>
              <PageSliderTitle2>
                <PageSliderSpecialText> Beauty </PageSliderSpecialText>
                <PageSliderSpecialText Special20> is the</PageSliderSpecialText>
                <PageSliderSpecialText Special20> harmony </PageSliderSpecialText>
                <PageSliderSpecialText Special50> of purpose </PageSliderSpecialText>
                <PageSliderSpecialText Special20>& form.</PageSliderSpecialText>
              </PageSliderTitle2>
            </PageSliderSideH>
          </PageSliderBlockWrapper>
        </PageSliderBlock>
        <PageSliderBlock
          bgColor={'white'}
        >
          <PageSliderBlockWrapper>
            <PageSliderSideH bgColor={''}>
              <PageSliderImgBlock>
                <PageSliderImg src={blockImgSrc} alt='block image'/>
                <p>
                  {blockImgText}
                </p>
              </PageSliderImgBlock>
            </PageSliderSideH>
            <PageSliderSideH bgColor={'main'}>
              <PageSliderTaglineBlock>
                <PageSliderTaglineAuthor>
                  <span>{mainTitle}</span> 
                  <span>Agata Bielen</span>
                </PageSliderTaglineAuthor>
                <PageSliderTagline>
                  The most simple forms create the strongest visual effects.
                </PageSliderTagline>
                <PageSliderTaglineLink href='#'>
                  share
                </PageSliderTaglineLink>
              </PageSliderTaglineBlock>
            </PageSliderSideH>
          </PageSliderBlockWrapper>
        </PageSliderBlock>
        <PageSliderBlock
          bgColor={'white'}
        >
          <PageSliderBlockWrapper Column>
            <PageSliderSideV bgColor={'main'}>
              6
            </PageSliderSideV>
            <PageSliderSideV Bottom bgColor={''}>
              6
            </PageSliderSideV>
          </PageSliderBlockWrapper>
        </PageSliderBlock>
      </Slider>
    </PageSliderStyled>
  );
}

export default PageSlider;