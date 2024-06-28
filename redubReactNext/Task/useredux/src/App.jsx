import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UiDate from './component/buttonDateChange/UiDate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UiDate />
    </>
  )
}

export default App
