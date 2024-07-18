import React from 'react'
import Hoc from './Hoc'

const UiList = ({list1, list2}) => {
  return (
    <div>
      <h2>HOC Concept</h2>
      <ul>
        <p>List one</p>
        {list1.map(data=> <li>{data}</li>)}
      </ul>
      <ul>
        <p>List Two</p>
        {list2.map(data=> <li>{data}</li>)}
      </ul>
    </div>
  )
}

export default Hoc(UiList)
