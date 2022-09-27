import React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Menu(){

  return(
    <MenuContainer className='MenuContainer'>
      <Blurb>How do you build a bagel?</Blurb>
      <Tabs isFitted variant='soft-rounded'>
        <TabList>
          <Tab _selected={{color: 'white', bg: 'blue.300'}}>bagels</Tab>
          <Tab _selected={{color: 'white', bg: 'blue.300'}}>drinks</Tab>
          <Tab _selected={{color: 'white', bg: 'blue.300'}}>others</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: block;
  border-width:2px;
  border-color: #37515F;
  border-radius: 22px;
`

const Blurb = styled.p`
  font-size: large;
`

export default Menu;