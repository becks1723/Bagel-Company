import React from 'react';
import styled from 'styled-components';
import './Footer.css';

function Footer() {
  return(
    <FooterContainer className='FooterContainer'>
      <FooterLinks>
        <Links className='Links' target='_blank' href="https://github.com/becks1723">Github</Links>
        <Links className='Links' target='_blank' href="https://www.linkedin.com/in/becky-chen2332/">LinkedIn</Links>
      </FooterLinks>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  height: 200px;
  background-color: #37515F;
  width: 100%;
  left: 0;
  bottom: 0;
`

const FooterLinks = styled.div`
  position: absolute;
  bottom: 8px;
  right: 16px;
`

const Links = styled.a`
  font-size: 20px;
  color: white;
  font-weight:bold;
  display: flex;
  margin: 10px;
`
export default Footer;