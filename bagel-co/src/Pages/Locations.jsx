import React from 'react';
import styled from 'styled-components';
import Maps from '../Components/Maps';

function Locations(){
  return(
    <LocationContainer className='LocationContainer'>
      <Maps></Maps>
    </LocationContainer>
  )
}

const LocationContainer = styled.div`
  
`

export default Locations;