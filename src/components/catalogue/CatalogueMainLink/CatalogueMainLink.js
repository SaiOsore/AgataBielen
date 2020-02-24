import React from 'react';
import { 
  CatalogueMainLinkStyled
} from './CatalogueMainLinkStyled';

const CatalogueMainLink = (props) => {
  const {
    textDecoration,
    onClick,
    pointerEvents,
    color,
    children,
    linkName
  } = props;

  return (
    <>
      <CatalogueMainLinkStyled 
        textDecoration={textDecoration}
        href={'/catalogue'}
        onClick={onClick}
        pointerEvents={pointerEvents}
        color={color}
        children={linkName || 'see all'}
      />
    </>
  );
}

export default CatalogueMainLink;