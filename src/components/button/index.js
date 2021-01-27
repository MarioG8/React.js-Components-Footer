import React from 'react';
import styled from 'styled-components';
import { globalStyle } from '../../globalStyle';

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? '5px 8px' : '7px 15px')};
  border-radius: 5px;
  background-color: ${globalStyle.primaryColor};
  color: #fff;
  font-weight: bold;
  font-size: ${({ small }) => (small ? '0.75rem' : '1rem')};
  outline: none;
  border: 2px solid transparent;
  transition: all 230ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid ${globalStyle.primaryColor};
  }
`;

export const Button = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};
