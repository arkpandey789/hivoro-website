// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../assets/hivoro-logo.png'; // Import the logo

const Nav = styled.nav`
  background: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 15px;
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &.active {
      color: #4CAF50;
    }

    &:hover {
      color: #4CAF50;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  /* Vertically centers the text with respect to the logo */
`;

const Logo = styled.img`
  width: 60px;  /* Increase logo size */
  height: auto;
  margin-right: 15px;  
  margin-top: 10px;/* Adjust space between logo and text */
`;

const LogoText = styled.h1`
  font-size: 1.8em;
  color: #4CAF50;
  margin: 0;
  line-height: 1;  /* Ensures the text aligns vertically in the middle */
`;

const Header = () => (
  <Nav>
    <LogoContainer>
      <Logo src={LogoImage} alt="Hivoro Logo" />
      <LogoText>Hivoro</LogoText>
    </LogoContainer>
    <NavLinks>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
    </NavLinks>
  </Nav>
);

export default Header;
