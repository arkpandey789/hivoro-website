// src/components/FeatureCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  text-align: center;
  padding: 20px;
`;

const IconWrapper = styled.div`
  font-size: 3em;
  color: #4CAF50;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-size: 1.2em;
  color: #333;
  &:hover {
    text-decoration: underline;
    color: #4CAF50;
  }
`;

const Description = styled.p`
  color: #666;
`;

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <IconWrapper>{icon}</IconWrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
);

export default FeatureCard;
