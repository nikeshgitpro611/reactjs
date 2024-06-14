import React from 'react'
import Hoc from './Hoc'

const Person2 = ({money, handler}) => {
  return (
    <div>
      <p>Jony Mony ${money}</p>
      <button onClick={handler}>Increase</button>
    </div>
  )
}

export default Hoc(Person2)
