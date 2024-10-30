import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);  // Translucent background (50% opacity)
`;

const Links = styled.div`
  margin-bottom: 20px;

  a {
    color: #ffffff;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #4CAF50;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #ffffff;
    transition: color 0.3s;

    &:hover {
      color: #4CAF50;
    }
  }
`;

const ContactEmail = styled.p`
  margin-top: 10px;
  font-size: 0.9em;
  color: #cccccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Links>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#use-cases">Use Cases</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
      </Links>
      <SocialIcons>
        <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
        <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
      </SocialIcons>
      <ContactEmail>contact@hivoro.com</ContactEmail>
    </FooterContainer>
  );
};

export default Footer;
