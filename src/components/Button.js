// src/components/Button.js

import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 30px;
  font-size: 1em;
  background-color: ${(props) => props.bgColor || '#ffffff'}; /* Use prop or default to white */
  color: ${(props) => (props.bgColor ? '#ffffff' : '#4CAF50')}; /* White text if green background */
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.bgColor ? '#388E3C' : '#f1f1f1')}; /* Darken on hover if green */
    transform: translateY(-2px);
  }
`;

export default Button;
