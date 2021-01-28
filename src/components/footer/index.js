import React from 'react';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  position: relative;
`;

const MotivationTxt = styled.h1`
  margin-top: 20rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4;
  color: #fff;
  @media screen and (max-width: 549px) {
    font-size: 1rem;
  }
`;

const AccessibilityContainer = styled.div`
  margin-top: 12px;
  display: flex;
  border-top: 1px solid #cdcdcd;
  width: 80%;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }

  &:not(:last-of-type) {
    margin-right: 11px;
    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  &:hover {
    color: #adadad;
    transform: translateY(-3px);
  }
`;

const Link = styled.a`
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:not(:last-of-type) {
    margin-right: 11px;
    @media screen and (max-width: 480px) {
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 0.78rem;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  color: #fff;
  font-size: 0.875rem;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const Footer = (props) => {
  return (
    <FooterContainer>
      <MotivationTxt>Philosophy of Stoicism and Heros..</MotivationTxt>
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms of services</Link>
          <Link>Contact Us</Link>
          <Link>Join Us</Link>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faGithub} />
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
      <RightsReserved>&copy; All Rights Reserved Stoa 2021</RightsReserved>
    </FooterContainer>
  );
};
