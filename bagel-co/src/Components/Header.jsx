import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import bagel from '../Pictures/bagel.png';
import './Header.css';

function Header() {
  return (
    <HeaderContainer className= 'HeaderContainer'>
      <CompanyName className= 'CompanyName'>
        BECKY'S BAGEL C
        <img src={bagel} alt="Bagel Logo"/>
        .
      </CompanyName>
      <LinkContainer className='LinkContainer'>
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
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CompanyName = styled.div`
  text-align: center;
  font-weight: bold;
  transition: 0.2s;
  width: 100%;
  line-height: 90px;
  display: inline;
  padding: 20px;
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