import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../button';
import { Logo } from '../Logo';
import { Marginer } from '../marginer';

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
`;

const MotivationTxt = styled.h1`
  font-size: 1.5625rem;
  font-weight: 700;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;

const AccessibilityContainer = styled.div`
  display: flex;
  border-top: 1px solid #cdcdcd;
  width: 80%;
  padding-top: 7px;
  padding-right: 5px;
  padding-left: 5px;
  justify-content: space-between;
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 1.25rem;
  transition: all 200ms ease-in-out;

  &:hover {
    color: #adadad;
  }
`;

export const Footer = (props) => {
  return (
    <FooterContainer>
      <Logo small />
      <MotivationTxt>Just say the magical word</MotivationTxt>
      <MotivationTxt>and we will do the rest</MotivationTxt>
      <Button>Start your Projects</Button>
      <AccessibilityContainer>
        <PrivacyContainer>Privacy</PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={} />
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
    </FooterContainer>
  );
};
