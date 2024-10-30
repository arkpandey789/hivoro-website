// src/components/CTA.js

import React from 'react';
import styled from 'styled-components';
import Button from './Button';  // Import the reusable button

// CTA Section
const CTASection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #4CAF50, #76C893);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const CTATitle = styled.h2`
  font-size: 2em;
  color: #333333;
  margin-bottom: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.75em;
  }
`;

const CTADescription = styled.p`
  font-size: 1.1em;
  color: #ffffff;
  margin-bottom: 30px;
  max-width: 700px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const CTA = ({ onCTAClick }) => (
  <CTASection>
    <CTATitle>Ready to Take Control of Your Freelance Workforce?</CTATitle>
    <CTADescription>
      Join the waitlist today and be the first to experience Hivoro's seamless freelance management solution.
    </CTADescription>
    <Button onClick={onCTAClick}>Join the Waitlist</Button>  {/* Use the reusable button */}
  </CTASection>
);

export default CTA;
