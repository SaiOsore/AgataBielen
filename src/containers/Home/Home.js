import React from 'react';
import { 
  HomeStyled,
  HomeBlock,
  HomeImgWrapper,
  HomeImg,
  HomeTitle,
  HomeLink,
} from './HomeStyled';

const Home = () => {
  return (
    <HomeStyled>
      <HomeBlock bgColor={'main'}>
        <HomeLink href="/about">
          <HomeImgWrapper>
            <HomeImg src="/img/catalogue/Main/natureline.jpg" alt="about" />
          </HomeImgWrapper>
          <HomeTitle>About</HomeTitle>
        </HomeLink>
      </HomeBlock>
      <HomeBlock bgColor={'accent'}>
        <HomeLink href="/catalogue">
          <HomeImgWrapper>
            <HomeImg src="/img/catalogue/Main/rightline.jpg" alt="catalogue" />
          </HomeImgWrapper>
          <HomeTitle>Catalogue</HomeTitle>
        </HomeLink>
      </HomeBlock>
    </HomeStyled>
  );
}

export default Home;