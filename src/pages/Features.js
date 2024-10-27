// src/pages/Features.js
import React from 'react';
import styled from 'styled-components';
import FeatureCard from '../components/FeatureCard';
import { FiCpu, FiUsers, FiMonitor } from 'react-icons/fi';

const FeaturesContainer = styled.section`
  padding: 100px 20px;
  background: #fff;
`;

const Heading = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 60px;
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const DetailedFeature = styled.div`
  max-width: 800px;
  margin: 60px auto;
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8em;
  color: #333;
  margin-bottom: 20px;
`;

const FeatureDescription = styled.p`
  font-size: 1em;
  color: #666;
  line-height: 1.6;
`;

const Features = () => (
  <FeaturesContainer>
    <Heading>Our Features</Heading>
    <FeaturesGrid>
      <FeatureCard
        icon={<FiCpu />}
        title="AI-Based Project Scoping"
        description="Define project scopes quickly with our AI assistant."
      />
      <FeatureCard
        icon={<FiUsers />}
        title="Smart Freelancer Matching"
        description="Instantly match with top freelancers suited to your needs."
      />
      <FeatureCard
        icon={<FiMonitor />}
        title="Centralized Dashboard"
        description="Manage all freelancers and projects in one place."
      />
    </FeaturesGrid>

    {/* Detailed Descriptions */}
    <DetailedFeature>
      <FeatureTitle>AI-Based Project Scoping</FeatureTitle>
      <FeatureDescription>
        Our AI assistant helps you define project scopes with precision and speed, ensuring all requirements are captured effectively.
      </FeatureDescription>
    </DetailedFeature>

    <DetailedFeature>
      <FeatureTitle>Smart Freelancer Matching</FeatureTitle>
      <FeatureDescription>
        Leverage our intelligent matching system to connect with freelancers who best fit your project needs and company culture.
      </FeatureDescription>
    </DetailedFeature>

    <DetailedFeature>
      <FeatureTitle>Centralized Dashboard</FeatureTitle>
      <FeatureDescription>
        Stay organized with a unified dashboard that consolidates all your freelance projects, communications, and payments in one place.
      </FeatureDescription>
    </DetailedFeature>
  </FeaturesContainer>
);

export default Features;
