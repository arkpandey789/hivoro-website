// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import CTAButton from '../components/CTAButton';

const AboutContainer = styled.section`
  padding: 100px 20px;
  text-align: center;
  background: #fff;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  color: #333;
`;

const Subheading = styled.p`
  font-size: 1.2em;
  color: #666;
  margin: 20px auto;
  max-width: 800px;
  line-height: 1.6;
`;

const MissionStatement = styled.p`
  font-size: 1em;
  color: #666;
  margin: 40px auto;
  max-width: 800px;
  line-height: 1.6;
`;

const About = () => (
  <AboutContainer>
    <Heading>About Hivoro</Heading>
    <Subheading>
      Hivoro is dedicated to simplifying freelance management for large businesses through AI-powered solutions.
    </Subheading>
    <MissionStatement>
      Our mission is to empower businesses with AI-driven tools to streamline freelance management. We believe in
      simplifying processes and fostering growth through innovation. By leveraging cutting-edge technology, we aim to
      transform the way companies interact with the freelance economy.
    </MissionStatement>
    <CTAButton>Contact Us</CTAButton>
  </AboutContainer>
);

export default About;
