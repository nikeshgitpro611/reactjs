import React, { useState } from 'react'

const Error = () => {
  // let count = 0;
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // count = count + 1;
    // console.log(count);
    setCount(count + 1)
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        increment
      </button>
    </div>
  )
}

export default Error
