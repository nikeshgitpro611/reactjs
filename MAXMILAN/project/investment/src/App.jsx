import { useState } from 'react'
import './App.css'
import InvestmentCalculator from './components/views/investmentCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <InvestmentCalculator />
  )
}

export default App
