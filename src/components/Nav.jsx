import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavStyles = styled.nav`
  width: 100%;
  background: #222;
  display: flex;
  flex-direction: row;
`;

const NavHeading = styled.h1`
  color: white;
  font-size: 18px;
`;
const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 10px;
  width: 300px;
  border-right: 2px solid white;
  padding-right: 5px;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;
const NavHeadingContainer = styled.div`
  margin-left: 5%;
  margin-top: 1%;
  margin-bottom: 1%;
`;

const NavItemContainer = styled.div`
  position: absolute;
  right: 4%;
  margin-top: 1.5%;
  margin-bottom: 1%;
  padding-right: 5px;
`;

function Navigation() {
  return (
    <NavStyles>
      <NavHeadingContainer>
        <NavHeading>Mywebsite</NavHeading>
      </NavHeadingContainer>
      <NavItemContainer>
        <NavItem to={`/`}>Home</NavItem>
        <NavItem to={`/about`}>About</NavItem>
        <NavItem to={`/contact`}>Contact me</NavItem>
      </NavItemContainer>
    </NavStyles>
  );
}

export default Navigation;
