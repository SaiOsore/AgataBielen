import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  position: relative;
  flex: 1 0 auto;
`;

const Container = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
  } = props;

  return (
    <ContainerStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
    >
      {' '}
      {children}
    </ContainerStyled>
  );
};

export default Container;
