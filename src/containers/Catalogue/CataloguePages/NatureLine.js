import React from 'react';
import PageSlider from '../../../components/slider/PageSlider/PageSlider';


const NatureLine = () => {
  
  return (
    <>
      <PageSlider 
        postDate={'2016.06.13'}
        author={'Janna Ahrens'}
        num={'2'}
        mainTitle={'Nature Line'}
        mainAbout={'The Nature Line Collection is, as the name suggests, mused by nature and the organic and seamless lines that result. Available in a sterling silver finish, all pieces are subtle lines of irregularly shaped geometries for adornment. The feint and light-weightedness of the collection is typical of Bieleń, and her style, and this collection is no exception. This collection sees a launch from her traditional, more rigid geometries and sees her exploring natural materials and fauna as inspiration. Based in Poland, the emphasis is on round and soft forms which opposes her traditional style.'}
        mainImgSrc={'/img/catalogue/NatureLine/nl1.jpg'}
        secondImgSrc={'/img/catalogue/NatureLine/nl2.jpg'}
        blockImgSrc={'/img/catalogue/NatureLine/nl3.jpg'}
        blockImgText={'Handcrafted and playing on the cross-over of modernity and natural form, this collection is a beautiful addition.'}
        collectionImgSrc={'/img/catalogue/NatureLine/nl4.jpg'}
        collection={'Fall / Winter'}
        collectionDate={'2017'}
        nextLink={'/rightline'}
        tagline={'Inspired by water lilies floating on the pond surface & spreading aquatic circles.'}
        specialText={['Organic', 'objects', 'adapt', 'to the body', 'discreetly.']}
      />
    </>
  );
}

export default NatureLine;