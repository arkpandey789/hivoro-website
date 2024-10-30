// src/components/UseCaseCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  text-align: left;
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

const Title = styled.h4`
  font-size: 1.2em;
  color: #333333;
  margin-bottom: 10px;
  font-weight: 700;
`;

const Scenario = styled.p`
  font-size: 0.95em;
  color: #666666;
  margin-bottom: 10px;
  line-height: 1.4;
`;

const Solution = styled.p`
  font-size: 0.95em;
  color: #4CAF50;
  line-height: 1.4;
`;

const UseCaseCard = ({ icon, title, scenario, solution }) => {
  return (
    <Card>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Scenario>
        <strong>Scenario:</strong> {scenario}
      </Scenario>
      <Solution>
        <strong>Solution:</strong> {solution}
      </Solution>
    </Card>
  );
};

export default UseCaseCard;
