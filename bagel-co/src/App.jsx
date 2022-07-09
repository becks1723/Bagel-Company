import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Locations from './Pages/Locations'
import Contact from './Pages/Contact'


function App() {
  return (
    <Router>
      <MainContainer>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/locations' element={<Locations/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </MainContainer>
    </Router>
  );
}

const MainContainer = styled.div`
  background-color: white;
`

export default App;
