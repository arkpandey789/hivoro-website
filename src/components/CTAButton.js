// src/components/CTAButton.js
import styled from 'styled-components';

const CTAButton = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background-color: rgba(76, 175, 80, 0.5);
    border-radius: 10px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    transform: scale(0.8);
  }

  &:hover:before {
    opacity: 1;
    transform: scale(1);
  }
`;

export default CTAButton;
