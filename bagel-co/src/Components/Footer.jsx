import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Footer() {
  return(
    <FooterContainer className='FooterContainer'>
      Hello
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  height: 50px;
  background-color: #37515F;
  width: 100%;
`
const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledLink = styled(Link) `
  color: #fff;
  font-size: 20px;
`

export default Footer;