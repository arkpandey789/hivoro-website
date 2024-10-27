// src/components/TestimonialCard.js
import React from 'react';
import styled from 'styled-components';
import { FiMessageCircle } from 'react-icons/fi';

const Card = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 30px;
  margin: 15px;
  text-align: center;
  flex: 1;
  max-width: 300px;
`;

const QuoteIcon = styled.div`
  color: #4CAF50;
  font-size: 2em;
  margin-bottom: 10px;
`;

const QuoteText = styled.p`
  font-style: italic;
  color: #666;
`;

const Author = styled.h5`
  margin-top: 15px;
  color: #333;
`;

const TestimonialCard = ({ quote, author }) => (
  <Card>
    <QuoteIcon>
      <FiMessageCircle />
    </QuoteIcon>
    <QuoteText>"{quote}"</QuoteText>
    <Author>- {author}</Author>
  </Card>
);

export default TestimonialCard;
