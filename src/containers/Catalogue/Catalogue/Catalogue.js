import React from 'react';
import GoldenGrid from '../../../components/layouts/GoldenGrid/GoldenGrid';
import { 
  GoldenGridMainTitle,
} from '../../../components/layouts/GoldenGrid/GoldenGridStyled';
import MainNav from '../../../components/nav/MainNav/MainNav';
import CatalogueMainLink from '../../../components/catalogue/CatalogueMainLink/CatalogueMainLink';
import { 
  CatalogueStyled, 
  CatalogueStripesTop,
  CatalogueStripesBottom 
} from './CatalogueStyled';

const Home = () => {
  return (
    <CatalogueStyled>
      <CatalogueStripesTop />
      <GoldenGrid>
        <GoldenGridMainTitle>
          Catalogue
        </GoldenGridMainTitle>
        <MainNav />
        <CatalogueMainLink
          textDecoration={'line-through'}
          onClick={e => e.preventDefault()}
          pointerEvents={'none'}
          color={'black'}
        />
      </GoldenGrid>
      <CatalogueStripesBottom />
    </CatalogueStyled>
  );
}

export default Home;