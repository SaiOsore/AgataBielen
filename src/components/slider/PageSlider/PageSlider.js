import React from 'react';
import Slider from 'react-slick';
import PageSliderСaptions from '../../../components/slider/PageSliderСaptions/PageSliderСaptions';
import CatalogueMainLink from '../../../components/catalogue/CatalogueMainLink/CatalogueMainLink';
import { 
  PageSliderStyled,
  PageSliderNextArrowStyled,
  PageSliderPrevArrowStyled,
  PageSliderSquare,

  PageSliderBlockWrapper,
  PageSliderBlock,

  PageSliderSideH,
  PageSliderSideV,

  PageSliderMainTitle,
  PageSliderTitle,
  PageSliderSpecialText,
  PageSliderMainImgWrapper,
  PageSliderImgWrapper2,
  PageSliderImg,
  PageSliderImgBlock,
  PageSliderImgBlockWrapper,

  PageSliderAbout,
  PageSliderTaglineBlock,
  PageSliderTagline,
  PageSliderTaglineAuthor,
  PageSliderTaglineLink,
  PageSliderNextLinkStyled,
  PageSliderTagContainer,
  PageSliderTagBlock,
  PageSliderTag,
  PageSliderTagDate,
  PageSliderTagImgWrapper
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
      previous
    </PageSliderPrevArrowStyled>
  );
}

const goUp = () => {
   const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0, -top);
   }
}

const PageSlider = (props) => {

  goUp();

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
    tagline,
    nextLink,
    collection,
    collectionDate,
    collectionImgSrc,
    specialText,
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
      goUp();
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
      <CatalogueMainLink />
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
              <PageSliderMainTitle>
                {mainTitle}
              </PageSliderMainTitle>
              <PageSliderAbout>
                {mainAbout}
              </PageSliderAbout>
            </PageSliderSideH>
            <PageSliderSideH bgColor={'main'}>
              <PageSliderMainImgWrapper>
                <PageSliderImg src={mainImgSrc} alt='main image'/>
              </PageSliderMainImgWrapper>
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
              <PageSliderTitle>
                <PageSliderSpecialText>{specialText[0]}</PageSliderSpecialText>
                <PageSliderSpecialText Special20>{specialText[1]}</PageSliderSpecialText>
                <PageSliderSpecialText Special20>{specialText[2]}</PageSliderSpecialText>
                <PageSliderSpecialText Special50>{specialText[3]}</PageSliderSpecialText>
                <PageSliderSpecialText Special20>{specialText[4]}</PageSliderSpecialText>
              </PageSliderTitle>
            </PageSliderSideH>
          </PageSliderBlockWrapper>
        </PageSliderBlock>
        <PageSliderBlock
          bgColor={'white'}
        >
          <PageSliderBlockWrapper>
            <PageSliderSideH bgColor={''}>
              <PageSliderImgBlock>
                <PageSliderImgBlockWrapper>
                  <PageSliderImg src={blockImgSrc} alt='block image'/>
                </PageSliderImgBlockWrapper>
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
                  {tagline}
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
              <PageSliderTagContainer>
                <PageSliderTagBlock>
                  <PageSliderTag>{collection}</PageSliderTag>
                </PageSliderTagBlock>
                <PageSliderTagBlock>
                  <PageSliderTagImgWrapper>
                    <PageSliderImg src={collectionImgSrc} alt='collection image'/>
                  </PageSliderTagImgWrapper>
                </PageSliderTagBlock>
                <PageSliderTagBlock>
                  <PageSliderTagDate>{collectionDate}</PageSliderTagDate>
                </PageSliderTagBlock>
              </PageSliderTagContainer>
            </PageSliderSideV>
            <PageSliderSideV Bottom bgColor={''}>
              <PageSliderNextLinkStyled href={nextLink || '/'}>
                Collection №{Number(num) + 1}
              </PageSliderNextLinkStyled>
            </PageSliderSideV>
          </PageSliderBlockWrapper>
        </PageSliderBlock>
      </Slider>
    </PageSliderStyled>
  );
}

export default PageSlider;