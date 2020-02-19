import React from 'react';
import { 
  CatalogueMainLinkStyled, 
  CatalogueMainLinkWrapper, 
  CatalogueMainLinkContainer 
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
    <CatalogueMainLinkContainer>
      {' '}
      {children}
      <CatalogueMainLinkWrapper textDecoration={textDecoration}>
        <CatalogueMainLinkStyled 
          href={'/catalogue'}
          onClick={onClick}
          pointerEvents={pointerEvents}
          color={color}
          children={linkName || 'see all'}
        />
      </CatalogueMainLinkWrapper>
    </CatalogueMainLinkContainer>
  );
}

export default CatalogueMainLink;