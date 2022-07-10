import React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Menu(){

  return(
    <MenuContainer className='MenuContainer'>
      <Tabs isFitted variant='unstyled'>
        <TabList>
          <Tab _selected={{color: 'white', bg: 'blue.200'}}>bagels</Tab>
          <Tab _selected={{color: 'white', bg: 'blue.300'}}>drinks</Tab>
          <Tab _selected={{color: 'white', bg: 'blue.100'}}>others</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MenuContainer>
  )
}



const MenuContainer = styled.div`
  
`

export default Menu;