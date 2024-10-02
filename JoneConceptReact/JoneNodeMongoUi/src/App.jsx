import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {MainContainer, NavBar} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <NavBar />
        <Routes>
          <Route path='/' element= {<MainContainer />}/> 
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App