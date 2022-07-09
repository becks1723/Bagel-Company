import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer classname= 'HeaderContainer'>
      <CompanyName classname= 'CompanyName'>
        BECKY'S BAGEL CO.
      </CompanyName>
      <LinkContainer classname='LinkContainer'>
        <StyledLink to="">home</StyledLink>
        <StyledLink to="Menu">menu</StyledLink>
        <StyledLink to="Locations">locations</StyledLink>
        <StyledLink to="Contact">contact</StyledLink>
      </LinkContainer>
    </HeaderContainer>
  )

}

const HeaderContainer = styled.div`
  background-color: #37515F;
  height: 200px;
  position: fixed;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`

const CompanyName = styled.div`
  text-align: center;
  font-size: 90px;
  font-weight: bold;
  transition: 0.2s;
  width: 100%;
`

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledLink = styled(Link) `
  all: unset;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 0 12px;
  padding-right: 30px;
  padding-left: 30px;

  transition: 200ms;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`

export default Header;