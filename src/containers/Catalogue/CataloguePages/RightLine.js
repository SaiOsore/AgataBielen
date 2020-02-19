import React from 'react';
import Socials from '../../../components/socials/Socials';
import CatalogueMainLink from '../../../components/catalogue/CatalogueMainLink/CatalogueMainLink';
import PageSlider from '../../../components/slider/PageSlider/PageSlider';


const RightLine = () => {
  
  return (
    <>
      <PageSlider 
        postDate={'2016.06.13'}
        author={'Janna Ahrens'}
        num={'1'}
        mainTitle={'Right Line'}
        mainAbout={'The line broken, bent and bonded in space, creates three-dimensional forms. This very simple statement on geometry and technique is one of Agata Bieleń’s elemental design principles. And the Poland based jewellery designer makes sure to come closer and closer to this principle with every collection she creates. For Spring/Summer 2016 she focusses on the optical illusion created by fine lines running through space, more broken than bent or bonded. That’s why the collection bears the name Right Line.'}
        mainImgSrc={'/img/catalogue/RightLine/rl1.jpg'}
        secondImgSrc={'/img/catalogue/RightLine/rl2.jpg'}
        blockImgSrc={'/img/catalogue/RightLine/rl3.jpg'}
        blockImgText={'It is a pleasure to observe the different forms the geometric shapes take on when draped around the arm, the neck, the finger or the ear. It is fascinating how they change their appearance when the person wearing them changes posture or position.'}
      />
      <CatalogueMainLink 
        textDecoration={'underline'}
      />
    </>
  );
}

export default RightLine;