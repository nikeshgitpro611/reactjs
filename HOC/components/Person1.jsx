import React from 'react'
import Hoc from './Hoc'

const Person1 = ({money, handler}) => {
  return (
    <div>
    <p>Person2 Mony ${money}</p>
    <button onClick={handler}>Increase</button>
  </div>
  )
}

export default Hoc(Person1) 
