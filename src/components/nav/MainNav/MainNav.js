import React from 'react';
import { 
  MainNavLink,
  MainNavFirst, 
  MainNavSecond,
  MainNavPreLast,
  MainNavLast,
  MainNavBlockFirst,
  MainNavBlockLast,
  MainNavBlockContainer,
  MainNavBlockItem,
  MainNavImg,
  MainNavTitle,
  MainNavArrow,
  MainNavNum,
  MainNavBlockTitle,
  MainNavBlockNum,
  MainNavBlockArrow,
  MainNavBlockTextWrapper
} from './MainNavStyled';

const MainNav = () => {

  return (
    <>
      <MainNavFirst>
        <MainNavLink href="/rightline">
          <MainNavTitle>
            Right Line
          </MainNavTitle>
          <MainNavArrow>→</MainNavArrow>
          <MainNavNum>
            Coll. №1
          </MainNavNum>
          <MainNavImg src="/img/catalogue/Main/rightline.jpg" alt="Right line" />
        </MainNavLink>
      </MainNavFirst>
      <MainNavSecond>
        <MainNavLink href="#">
          <MainNavTitle>
            Nature Line
          </MainNavTitle>
          <MainNavArrow>→</MainNavArrow>
          <MainNavNum>
            Coll. №2
          </MainNavNum>
          <MainNavImg src="/img/catalogue/Main/natureline.jpg" alt="Nature line" />
        </MainNavLink>
      </MainNavSecond>
      
      <MainNavBlockFirst>
        <MainNavBlockContainer>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №3</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Storm Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №4</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Valley Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №5</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Mountain Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №6</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Desert Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №7</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Woods Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №8</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Beach Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
        </MainNavBlockContainer>
      </MainNavBlockFirst>
      <MainNavBlockLast>
        <MainNavBlockContainer>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №9</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Gold Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №10</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Silver Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №11</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Bronce Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №12</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Lion Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
          <MainNavLink href="#">
            <MainNavBlockItem>
              <MainNavBlockTextWrapper>
                <MainNavBlockNum>Coll. №13</MainNavBlockNum>
                <MainNavBlockTitle as="h2">Snake Line</MainNavBlockTitle>
              </MainNavBlockTextWrapper>
              <MainNavBlockArrow>→</MainNavBlockArrow>
            </MainNavBlockItem>
          </MainNavLink>
        </MainNavBlockContainer>
      </MainNavBlockLast>

      <MainNavPreLast>
        <MainNavLink href="#">
          <MainNavTitle>
            Arch Line
          </MainNavTitle>
          <MainNavArrow>→</MainNavArrow>
          <MainNavNum>
            Coll. №14
          </MainNavNum>
          <MainNavImg src="/img/catalogue/Main/archline.jpg" alt="Arch line" />
        </MainNavLink>
      </MainNavPreLast>
      <MainNavLast>
        <MainNavLink href="#">
          <MainNavTitle>
            Point Line
          </MainNavTitle>
          <MainNavArrow>→</MainNavArrow>
          <MainNavNum>
            Coll. №15
          </MainNavNum>
          <MainNavImg src="/img/catalogue/Main/pointline.jpg" alt="Point line" />
        </MainNavLink>
      </MainNavLast>
    </>
  );
}

export default MainNav;