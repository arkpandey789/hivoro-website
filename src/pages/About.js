import React from 'react';
import styled from 'styled-components';
import Photo from "../assets/Ark's_Photo.png"; 

// Main Container for the About Page
const AboutContainer = styled.section`
  padding: 100px 20px;
  background: #fff;
`;

// Heading Styles with Green Translucent Background
const Heading = styled.h2`
  font-size: 2.5em;
  color: #333;
  background: rgba(76, 175, 80, 0.1); /* Green translucent background */
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
`;

// Subheading and Mission Text Styles
const TextContent = styled.p`
  font-size: 1.2em;
  color: #666;
  margin: 20px auto 40px;
  max-width: 800px;
  line-height: 1.6;
  text-align: center;
`;

// Story Section without Image
const StorySection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const StoryText = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const StoryImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 300px;
  border-radius: 8px;
  object-fit: cover;
`;

const About = () => (
  <AboutContainer>
    {/* About Hivoro Section */}
    <Heading>About Hivoro</Heading>
    <TextContent>
      Hivoro is on a mission to simplify freelance management for large businesses through AI-powered solutions. We provide companies with the tools to streamline project scoping, hire the right talent, and handle payments—all in one seamless platform.
    </TextContent>

    {/* Our Mission Section */}
    <Heading>Our Mission</Heading>
    <TextContent>
      We empower businesses to manage freelancers effortlessly. With AI-driven tools and real-time tracking, Hivoro cuts through complexity, allowing companies to focus on what really matters—growth and efficiency.
    </TextContent>

    {/* Our Vision Section */}
    <Heading>Our Vision</Heading>
    <TextContent>
      Hivoro is built for the future of work. As businesses scale, we provide the tools needed to manage a global freelance workforce with ease. From compliance to payroll, we handle it all.
    </TextContent>

    {/* The Story Behind Hivoro Section */}
    <Heading>The Story Behind Hivoro</Heading>
    
      <StoryText>
        <TextContent>
          As a freelancer, I experienced firsthand the challenges of freelance management. One project turned into a daily grind of stand-up calls, stripping away the freedom I sought as a freelancer. At the same time, companies struggled to track my progress and pay me fairly due to third-party platforms taking steep commissions.
          <br /><br />
          This inspired me to create Hivoro—a platform designed to give freelancers their autonomy while providing businesses with the tools to manage them efficiently. I wanted to solve the pain points I experienced as a freelancer and help companies manage freelance talent without the friction.
        </TextContent>
      </StoryText>
      {/* Display your image below the story */}
      <StoryImage src={Photo} alt="Founder of Hivoro" />
   
  </AboutContainer>
);

export default About;
