// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import CTAButton from '../components/CTAButton';
import FeatureCard from '../components/FeatureCard';
import HowItWorksStep from '../components/HowItWorksStep';
import TestimonialCard from '../components/TestimonialCard';
import { FiCpu, FiUsers, FiMonitor, FiEdit3, FiSearch, FiDollarSign } from 'react-icons/fi';

// Header Section
const HeaderSection = styled.section`
  padding: 100px 20px;
  text-align: center;
  background: #f9f9f9;
`;

const MainHeadline = styled.h2`
  font-size: 2.5em;
  color: #333;
`;

const Subheadline = styled.p`
  font-size: 1.2em;
  color: #666;
  margin: 20px 0;
`;

// Features Section
const FeaturesSection = styled.section`
  padding: 80px 20px;
  background: #fff;
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

// How It Works Section
const HowItWorksSection = styled.section`
  padding: 80px 20px;
  background: #f9f9f9;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: 80px 20px;
  background: #fff;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// About Section
const AboutSection = styled.section`
  padding: 80px 20px;
  background: #f9f9f9;
  text-align: center;
`;

const AboutText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: #666;
  line-height: 1.6;
`;

const BoldText = styled.span`
  font-weight: bold;
  color: #333;
`;

// Call to Action Section
const CTASection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #4CAF50, #81C784);
  text-align: center;
  color: #fff;
`;

const CTAHeadline = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Home = () => (
  <div>
    {/* Header Section */}
    <HeaderSection>
      <MainHeadline>Effortlessly Manage Freelancers with Hivoro.</MainHeadline>
      <Subheadline>AI-Powered Tools for Scoping, Managing, and Scaling Your Freelance Workforce.</Subheadline>
      <CTAButton>Join the Waitlist</CTAButton>
    </HeaderSection>

    {/* Features Section */}
    <FeaturesSection>
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
    </FeaturesSection>

    {/* How It Works Section */}
    <HowItWorksSection>
      <h2 style={{ textAlign: 'center', color: '#333' }}>How It Works</h2>
      <StepsContainer>
        <HowItWorksStep icon={<FiEdit3 />} title="Scope Your Project with AI Assistance." />
        <HowItWorksStep icon={<FiSearch />} title="Match with Top Freelancers Instantly." />
        <HowItWorksStep icon={<FiDollarSign />} title="Manage and Pay Through a Single Dashboard." />
      </StepsContainer>
    </HowItWorksSection>

    {/* Testimonials Section */}
    <TestimonialsSection>
      <h2 style={{ textAlign: 'center', color: '#333' }}>What Our Users Say</h2>
      <TestimonialsGrid>
        <TestimonialCard
          quote="Hivoro has revolutionized how we manage freelancers!"
          author="Jane Doe, Project Manager"
        />
        <TestimonialCard
          quote="The AI-based scoping tool is a game changer for our projects."
          author="John Smith, CEO"
        />
        {/* Add more TestimonialCards as needed */}
      </TestimonialsGrid>
    </TestimonialsSection>

    {/* About Section */}
    <AboutSection>
      <h2 style={{ color: '#333' }}>About Hivoro</h2>
      <AboutText>
        At Hivoro, our mission is to empower businesses with AI-driven tools to streamline freelance management. 
        We believe in simplifying processes and fostering growth through innovation. Our mission is simple: 
        <BoldText>Empower businesses to manage their freelance workforce efficiently and effectively.</BoldText>
      </AboutText>
      <CTAButton style={{ marginTop: '30px' }}>Learn More</CTAButton>
    </AboutSection>

    {/* Call to Action Section */}
    <CTASection>
      <CTAHeadline>Ready to Take Control of Your Freelance Workforce?</CTAHeadline>
      <CTAButton style={{ backgroundColor: '#fff', color: '#4CAF50' }}>Join the Waitlist</CTAButton>
    </CTASection>
  </div>
);

export default Home;
