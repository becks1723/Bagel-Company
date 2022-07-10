import React from 'react';
import styled from 'styled-components';

function Footer() {
  return(
    <FooterContainer className='FooterContainer'>
      <FooterLinks>
        <Links>Github</Links>
        <Links>LinkedIn</Links>
      </FooterLinks>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  height: 200px;
  background-color: #37515F;
  width: 100%;
`

const FooterLinks = styled.div`
  position: relative;
`

const Links = styled.div`
  color: white;
  font-weight:bold;
  position: absolute;
  top: 1000px;
  right: 16px;
`
export default Footer;