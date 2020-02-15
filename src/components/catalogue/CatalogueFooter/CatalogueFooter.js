import React from 'react';
import { 
  CatalogueFooterStyled, 
  CatalogueFooterLinkWrapper, 
  CatalogueFooterLink 
} from './CatalogueFooterStyled';

const CatalogueFooter = (props) => {
  const {
    textDecoration,
    onClick,
    pointerEvents,
    color,
  } = props;

  return (
    <CatalogueFooterStyled>
      <CatalogueFooterLinkWrapper textDecoration={textDecoration}>
        <CatalogueFooterLink 
          href="/catalogue"
          onClick={onClick}
          pointerEvents={pointerEvents}
          color={color}
          children={'see all'}
        />
      </CatalogueFooterLinkWrapper>
    </CatalogueFooterStyled>
  );
}

export default CatalogueFooter;