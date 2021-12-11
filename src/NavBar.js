import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MyNavBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: 'Oswald', sans-serif;
  background-color: #99A983;
`
const StyledLink = styled(Link)`
  padding: 20px;
  text-decoration: none;
  color: #fff;
`

const NavBar = () => {
  return (
    <MyNavBar>
      <StyledLink to="/">Styled Components</StyledLink>
      <StyledLink to="/css">CSS</StyledLink>
      <StyledLink to="/semantic">Semantic</StyledLink>
    </MyNavBar>
  );
};

export default NavBar;
