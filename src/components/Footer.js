// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const FooterContainer = styled.footer`
  padding: 40px 20px;
  background: #fff;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;
  a {
    margin: 0 10px;
    color: #666;
    text-decoration: none;
    &:hover {
      color: #4CAF50;
    }
  }
`;

const SocialMedia = styled.div`
  a {
    margin: 0 10px;
    color: #666;
    font-size: 1.5em;
    &:hover {
      color: #4CAF50;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/features">Features</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/privacy">Privacy Policy</NavLink>
    </FooterLinks>
    <SocialMedia>
      <a href="https://twitter.com"><FiTwitter /></a>
      <a href="https://linkedin.com"><FiLinkedin /></a>
    </SocialMedia>
  </FooterContainer>
);

export default Footer;
