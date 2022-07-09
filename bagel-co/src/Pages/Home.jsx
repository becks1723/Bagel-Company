import React from 'react';
import styled from 'styled-components';

function Home(){
  return(
    <HomeContainer className='HomeContainer'>
      HI THERE
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  background-color: white;
  height: 100%;
`

export default Home;