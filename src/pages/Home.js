// src/pages/Home.js

import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';  // Import the reusable button
import WaitlistModal from '../components/WaitlistModal';
import Hook from '../components/Hook';
import CTA from '../components/CTA';

const HeaderSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: none;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const MainHeadline = styled.h1`
  font-size: 2em;
  color: #333333;
  margin-bottom: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.75em;
  }
`;

const Subheadline = styled.p`
  font-size: 1em;
  color: #666666;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.95em;
    margin-bottom: 25px;
  }
`;

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div>
      {/* Header Section */}
      <HeaderSection>
        <MainHeadline>Simplify Freelance Management, Scale Faster with Hivoro</MainHeadline>
        <Subheadline>
          AI-driven platform for seamless project scoping, talent matching, and compliance—built for companies managing multiple freelancers.
        </Subheadline>
        {/* Join Waitlist Button with green background */}
        <Button onClick={handleModalOpen} bgColor="#4CAF50">Join the Waitlist</Button>
      </HeaderSection>

      {/* Hook Section */}
      <Hook />

      {/* CTA Section */}
      <CTA onCTAClick={handleModalOpen} />

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default Home;
