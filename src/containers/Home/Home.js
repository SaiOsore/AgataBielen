import React from 'react';
import Slider from 'react-slick';
import GoldenGrid from '../../components/layouts/GoldenGrid/GoldenGrid';
import { 
  GoldenGridLeftCol,
  GoldenGridRightCol,
} from '../../components/layouts/GoldenGrid/GoldenGridStyled';
import { 
  HomeStyled,
  HomeRightContainer,
  HomeLeftContainer,
  HomeImg,
  HomeTitle,
  HomeLink,
} from './HomeStyled';

const Home = () => {
  return (
    <HomeStyled>
      <GoldenGrid>
        <GoldenGridLeftCol>
          <HomeLeftContainer>
            <HomeLink href="/about">
              <HomeImg src="/img/catalogue/Main/natureline.jpg" alt="about" />
              <HomeTitle>About</HomeTitle>
            </HomeLink>
          </HomeLeftContainer>
        </GoldenGridLeftCol>
        <GoldenGridRightCol>
          <HomeRightContainer>
            <HomeLink href="/catalogue">
              <HomeImg src="/img/catalogue/Main/rightline.jpg" alt="catalogue" />
              <HomeTitle>Catalogue</HomeTitle>
            </HomeLink>
          </HomeRightContainer>
        </GoldenGridRightCol>
      </GoldenGrid>
    </HomeStyled>
  );
}

export default Home;