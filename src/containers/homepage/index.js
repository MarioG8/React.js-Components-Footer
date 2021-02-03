import React from 'react';
import styled from 'styled-components';
import { Footer } from '../../components/footer';
import { SecondF } from '../../Footer/Footer';
import { MainSection } from './mainSection';
import '../../Footer/Footer.css';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Homepage = (props) => {
  return (
    <PageContainer>
      <MainSection />
      <Footer />
      <SecondF />
    </PageContainer>
  );
};
