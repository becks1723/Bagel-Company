import React from 'react';
import styled from 'styled-components';
import steam from '../Pictures/steam.png';
import './Home.css';

function Home(){
  return(
    <HomeContainer className='HomeContainer'>
      <img src={steam} alt="Body of home page"/>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  background-color: white;
  justify-content: center;
  width: 100%;
`

export default Home;