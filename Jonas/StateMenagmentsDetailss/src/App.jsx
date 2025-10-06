import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from '@mui/material/Menu'
import { FormCheck } from './AllComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FormCheck />
    </>
  )
}

export default App
