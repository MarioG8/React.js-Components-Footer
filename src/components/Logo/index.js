import React from 'react';
import styled, { css } from 'styled-components';

import BeemaLogo from '../../assets/logo/logo_croped.png';
import { globalStyle } from '../../globalStyle';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;

  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
`;

const LogoTxt = styled.div`
  margin-top: ${({ inline }) => (inline ? '0' : '6px')};
  font-size: ${({ inline, small }) =>
    inline ? '1.125rem' : small ? '1.4375rem' : '2.5rem'};
  color: ${({ inline }) => (inline ? '#fff' : globalStyle.primaryColor)};
  font-weight: 900;
`;

export const Logo = (props) => {
  const { inline, small } = props;
  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={BeemaLogo} inline={inline} small={small} />
      <LogoTxt inline={inline} small={small}>
        Beema
      </LogoTxt>
    </LogoContainer>
  );
};
