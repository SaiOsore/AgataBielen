import React from 'react';
import MainNav from '../../../components/nav/MainNav/MainNav';
import CatalogueMainLink from '../../../components/catalogue/CatalogueMainLink/CatalogueMainLink';
import { 
  CatalogueStyled, 
  CatalogueGrid,
  CatalogueTitle,
  CatalogueStripesTop,
  CatalogueStripesBottom 
} from './CatalogueStyled';

const Home = () => {

  const linksBlock1 = { 
    link: '/rightline',
    title: 'Right Line',
    num: '1',
    src: '/img/catalogue/Main/rightline.jpg',
    alt: 'right line',
  };

  const linksBlock2 = { 
    link: '/natureline',
    title: 'Nature Line',
    num: '2',
    src: '/img/catalogue/Main/natureline.jpg',
    alt: 'nature line',
  };

  const linksBlock3 = [
    { link: '#',
      title: 'Storm Line',
      num: '3',
    },
    { link: '#',
      title: 'Valley Line',
      num: '4',
    },
    { link: '#',
      title: 'Mountain Line',
      num: '5',
    },
    { link: '#',
      title: 'Desert Line',
      num: '6',
    },
    { link: '#',
      title: 'Woods Line',
      num: '7',
    },
    { link: '#',
      title: 'Beach Line',
      num: '8',
    },
  ];

  const linksBlock4 = [
    { link: '#',
      title: 'Gold Line',
      num: '9',
    },
    { link: '#',
      title: 'Silver Line',
      num: '10',
    },
    { link: '#',
      title: 'Bronce Line',
      num: '11',
    },
    { link: '#',
      title: 'Lion Line',
      num: '12',
    },
    { link: '#',
      title: 'Snake Line',
      num: '13',
    },
  ];

  const linksBlock5 = { 
    link: '#',
    title: 'Arch Line',
    num: '14',
    src: '/img/catalogue/Main/archline.jpg',
    alt: 'arch line',
  };

  const linksBlock6 = { 
    link: '/natureline',
    title: 'Point Line',
    num: '15',
    src: '/img/catalogue/Main/pointline.jpg',
    alt: 'point line',
  };

  return (
    <CatalogueStyled>
      <CatalogueStripesTop />
      <CatalogueGrid>
        <CatalogueTitle>
          Catalogue
        </CatalogueTitle>
        <MainNav 
          linksBlock1 = {linksBlock1}
          linksBlock2 = {linksBlock2}
          linksBlock3 = {linksBlock3}
          linksBlock4 = {linksBlock4}
          linksBlock5 = {linksBlock5}
          linksBlock6 = {linksBlock6}
        />
        <CatalogueMainLink
          borderNone
          textDecoration={'line-through'}
          onClick={e => e.preventDefault()}
          pointerEvents={'none'}
          color={'black'}
        />
      </CatalogueGrid>
      <CatalogueStripesBottom />
    </CatalogueStyled>
  );
}

export default Home;