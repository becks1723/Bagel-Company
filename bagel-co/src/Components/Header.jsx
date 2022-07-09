import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


function Header() {
  return (
    <HeaderContainer classname= 'HeaderContainer'>
      HELLO
    </HeaderContainer>
  )

}

const HeaderContainer = styled.div`
  height: 200px;
  background-color: #37515F;
`

const LinkContainer = styled.div`
  height: 100%;
  display: flex;
`
const StyledLink = styled(Link) `
  all: unset;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 0 12px;

  transition: 200ms;
  &:hover {
    color: #37515F;
    cursor: pointer;
  }
`

export default Header;