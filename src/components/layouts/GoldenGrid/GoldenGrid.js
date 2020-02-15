import React from 'react';
import {
  GoldenGridStyled,
} from './GoldenGridStyled'
import styled from 'styled-components';

const GoldenGrid = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
  } = props;

  return (
    <GoldenGridStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
    >
      {' '}
      {children}
    </GoldenGridStyled>
  );
};

export default GoldenGrid;
