import styled from 'styled-components';
// import { device } from '../../theme/variables';

export const CatalogueStyled = styled.div`
  position: relative;
  height: 100vh;
  font-size: 20px;
`;

const CatalogueStripesBlock = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  opacity: .4;
  &:before, &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 15%;
    background: black;
    top: 50%;
    transform: translateY(-50%);
  }
  &:before {
    left: 2%;
  }
  &:after {
    right: 2%;
  }
`;

export const CatalogueStripesTop = styled(CatalogueStripesBlock)`
  top: 0;
  left: 0;
`;

export const CatalogueStripesBottom = styled(CatalogueStripesBlock)`
  bottom: 0;
  left: 0;
`;