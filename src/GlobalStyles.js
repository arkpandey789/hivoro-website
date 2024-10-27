// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    background-color: #fff;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    color: #333;
  }

  p {
    color: #666;
    font-size: 1em;
  }

  button, a {
    transition: all 0.3s ease;
  }

  button:hover, a:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  button:active, a:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export default GlobalStyles;
