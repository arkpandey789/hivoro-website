import React from 'react';
import styled from 'styled-components';
import { FiUsers, FiCpu, FiDollarSign } from 'react-icons/fi'; // Import icons for the hooks

// Outer Wrapper to cover full width of the screen
const HooksWrapper = styled.section`
  width: 100%;
  background: rgba(76, 175, 80, 0.1); /* Translucent green background */
  padding: 60px 0; /* Padding for top and bottom */
  text-align: center;
  border-radius: 0; /* No border radius on full-width sections */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Subtle shadow for depth */

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

// Inner container to center content and constrain width
const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px; /* Horizontal padding for smaller screens */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center alignment */
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center; /* Keep text center-aligned on smaller screens */
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  font-size: 2.5em;
  color: #4CAF50;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #388E3C; /* Darker green on hover */
  }
`;

const TextWrapper = styled.div`
  max-width: 700px;
`;

const HookTitle = styled.h2`
  font-size: 1.75em;
  color: #333333;
  margin-bottom: 10px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.3em;
  }
`;

const HookText = styled.p`
  font-size: 1em;
  color: #666666;
  line-height: 1.6;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Optional: Subtle text shadow */

  @media (max-width: 768px) {
    font-size: 0.95em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Hooks = () => (
  <HooksWrapper>
    <InnerContainer>
      {/* Hook #1 */}
      <HookContainer>
        <IconWrapper>
          <FiUsers /> {/* Collaboration Icon */}
        </IconWrapper>
        <TextWrapper>
          <HookTitle>Unlock Seamless Freelance Collaboration</HookTitle>
          <HookText>
            Bring all your freelancers together in one unified workspace. With Hivoro, collaboration is easy—manage tasks, track progress, and communicate effortlessly in a single platform.
          </HookText>
        </TextWrapper>
      </HookContainer>

      {/* Hook #2 */}
      <HookContainer>
        <IconWrapper>
          <FiCpu /> {/* AI Talent Matching Icon */}
        </IconWrapper>
        <TextWrapper>
          <HookTitle>AI-Driven Talent, Delivered to Your Projects</HookTitle>
          <HookText>
            Finding the right freelancer doesn’t need to be time-consuming. Hivoro’s AI matches you with the best talent for your projects, so you can focus on what matters most: growth.
          </HookText>
        </TextWrapper>
      </HookContainer>

      {/* Hook #3 */}
      <HookContainer>
        <IconWrapper>
          <FiDollarSign /> {/* Compliance and Payments Icon */}
        </IconWrapper>
        <TextWrapper>
          <HookTitle>Compliance Made Simple, Payments Made Easy</HookTitle>
          <HookText>
            Leave the complexities of contracts and international payments behind. Hivoro automates compliance and payroll, ensuring your freelancers get paid, wherever they are.
          </HookText>
        </TextWrapper>
      </HookContainer>
    </InnerContainer>
  </HooksWrapper>
);

export default Hooks;
