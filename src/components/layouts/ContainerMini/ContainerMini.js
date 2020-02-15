import React from 'react';
import styled from 'styled-components';

const ContainerMiniStyled = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
`;

const ContainerMini = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
  } = props;

  return (
    <ContainerMiniStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
    >
      {' '}
      {children}
    </ContainerMiniStyled>
  );
};

export default ContainerMini;
