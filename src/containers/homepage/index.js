import React from 'react';
import styled from 'styled-components';
import { Footer } from '../../components/footer';
import { MoreAboutSection } from './moreAboutSection';
import { ReviewsSection } from './reviewsSection';
import { ServicesSection } from './servicesSection';
import TopSection from './topSection';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Homepage = (props) => {
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
      <ReviewsSection />
      <MoreAboutSection />
      <Footer />
    </PageContainer>
  );
};
