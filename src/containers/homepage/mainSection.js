import React from 'react';
import styled from 'styled-components';

import BackgroundImg from '../../assets/athens.jpg';

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.7);
`;

export const MainSection = (props) => {
  return (
    <MainContainer>
      <BackgroundFilter></BackgroundFilter>
    </MainContainer>
  );
};
