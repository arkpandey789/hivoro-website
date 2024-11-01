// src/components/FeatureCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h4`
  font-size: 1.2em;
  color: #333333;
  margin-bottom: 10px;
  font-weight: 700;
`;

const FeatureDescription = styled.p`
  font-size: 0.95em;
  color: #666666;
  line-height: 1.4;
`;

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      <IconWrapper>{icon}</IconWrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </Card>
  );
};

export default FeatureCard;
