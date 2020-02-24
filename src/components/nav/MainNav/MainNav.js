import React from 'react';
import NavBlock from '../NavBlock/NavBlock';
import NavList from '../NavList/NavList';
import { 
  MainNavContainer,
  MainNavBlock
} from './MainNavStyled';

const MainNav = (props) => {

  const {
    linksBlock1,
    linksBlock2,
    linksBlock3,
    linksBlock4,
    linksBlock5,
    linksBlock6
  } = props;

  return (
    <>
      <MainNavBlock First>
        <NavBlock 
          link={linksBlock1.link}
          title={linksBlock1.title}
          num={linksBlock1.num}
          src={linksBlock1.src}
          alt={linksBlock1.alt}
        />
      </MainNavBlock>

      <MainNavBlock Second>
        <NavBlock 
          link={linksBlock2.link}
          title={linksBlock2.title}
          num={linksBlock2.num}
          src={linksBlock2.src}
          alt={linksBlock2.alt}
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
          link={linksBlock5.link}
          title={linksBlock5.title}
          num={linksBlock5.num}
          src={linksBlock5.src}
          alt={linksBlock5.alt}
        />
      </MainNavBlock>
      
      <MainNavBlock Last>
        <NavBlock 
          link={linksBlock6.link}
          title={linksBlock6.title}
          num={linksBlock6.num}
          src={linksBlock6.src}
          alt={linksBlock6.alt}
        />
      </MainNavBlock>
    </>
  );
}

export default MainNav;