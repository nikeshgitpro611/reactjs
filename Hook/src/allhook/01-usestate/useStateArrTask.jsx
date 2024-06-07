import React, { useState } from 'react'
import { data } from '../../../data'
const ArrayState = () => {
  const [dataval, setData] = useState(data);

  const removeHandler = (val) => {
    const filterData = dataval.filter(data => data.id !== val)
    setData(filterData)
  }

  const removeAll = () => {
    setData(dataval.length = [])
  }

  return (
    <div>
      {dataval.map(data => <ul key={data.id}>
        <li >{data.name}</li>
        <button onClick={() => removeHandler(data.id)}>Remove</button>
      </ul>)}

      <button className='btn' onClick={removeAll}>Clear all</button>
    </div>
  )
}

export default ArrayState
