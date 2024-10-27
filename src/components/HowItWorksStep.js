// src/components/HowItWorksStep.js
import React from 'react';
import styled from 'styled-components';

const StepWrapper = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
`;

const StepIcon = styled.div`
  font-size: 2.5em;
  color: #4CAF50;
  margin-bottom: 10px;
`;

const StepTitle = styled.h4`
  font-size: 1.1em;
  color: #333;
`;

const HowItWorksStep = ({ icon, title }) => (
  <StepWrapper>
    <StepIcon>{icon}</StepIcon>
    <StepTitle>{title}</StepTitle>
  </StepWrapper>
);

export default HowItWorksStep;
