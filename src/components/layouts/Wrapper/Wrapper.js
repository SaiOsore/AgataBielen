import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Wrapper = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
  } = props;

  return (
    <WrapperStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
    >
      {' '}
      {children}
    </WrapperStyled>
  );
};

export default Wrapper;
