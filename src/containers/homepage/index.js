import React from 'react';
import styled from 'styled-components';
import { Footer } from '../../components/footer';
import { MainSection } from './mainSection';

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
    </PageContainer>
  );
};
