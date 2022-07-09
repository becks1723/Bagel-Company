import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './Components/Header'

function App() {
  return (
    <Router>
      <MainContainer>
        <Header />
        <Routes>
          
        </Routes>
      </MainContainer>
    </Router>
  );
}

const MainContainer = styled.div`
  background-color: white;
`

export default App;
