import React from 'react';
import { 
  AboutStyled,
  AboutBlock,
  AboutImgWrapper,
  AboutImg,
  AboutTitle,
  AboutBio
} from './AboutStyled';

const About = () => {
  
  return (
    <AboutStyled>
      <AboutBlock>
        <AboutImgWrapper>
          <AboutImg src='/img/catalogue/Main/pointline.jpg' alt='about img' />
        </AboutImgWrapper>
      </AboutBlock>
      <AboutBlock>
        <AboutTitle>About <br /> Agata Bielen</AboutTitle>
        <AboutBio>
          Here’s the thing about change: it’s constant, and it’s always good — even when you can’t see why at first.
          Every day you are asked to embrace change; to adapt and evolve with growing demands on your time and talent. We are, frankly, 
          blown away by you — the makers, the dreamers, and the every-day grind-it-out doers. 
          So we wanted to empower you with jewelry inspired by the way you dynamically respond to all the changes in your life. <br />
          With <span>Agata Bielen</span> , we’ve built a clever, customizable jewelry line that morphs with you. A necklace becomes a pair of anklets
          an earring turns into a ring. 
          Crafted from the finest materials and precious stones (think 14k gold, white or black diamonds), 
          <span> Agata Bielen's</span> contemporary fine jewelry can be modified to match your mood, no matter where you are.
        </AboutBio>
      </AboutBlock>
    </AboutStyled>
  );
}

export default About;