import React from 'react';
import NavBlock from '../NavBlock/NavBlock';
import NavList from '../NavList/NavList';
import { 
  MainNavContainer,
  MainNavBlock
} from './MainNavStyled';

const MainNav = () => {

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

  return (
    <>
      <MainNavBlock First>
        <NavBlock 
          link={'/rightline'}
          title={'Right Line'}
          num={'1'}
          src={'/img/catalogue/Main/rightline.jpg'}
          alt={'right line'}
        />
      </MainNavBlock>

      <MainNavBlock Second>
        <NavBlock 
          link={'#'}
          title={'Nature Line'}
          num={'2'}
          src={'/img/catalogue/Main/natureline.jpg'}
          alt={'nature line'}
        />
      </MainNavBlock>
      
      <MainNavContainer First>
        <NavList links={linksBlock3} />
      </MainNavContainer>

      <MainNavContainer Last>
        <NavList links={linksBlock4} />
      </MainNavContainer>

      <MainNavBlock PreLast>
        <NavBlock 
          link={'#'}
          title={'Arch Line'}
          num={'14'}
          src={'/img/catalogue/Main/archline.jpg'}
          alt={'arch line'}
        />
      </MainNavBlock>
      <MainNavBlock Last>
        <NavBlock 
          link={'#'}
          title={'Point Line'}
          num={'15'}
          src={'/img/catalogue/Main/pointline.jpg'}
          alt={'point line'}
        />
      </MainNavBlock>
    </>
  );
}

export default MainNav;