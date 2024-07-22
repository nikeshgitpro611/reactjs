import React, { useContext } from 'react'
import { auth } from '../UiShow'

const Count = () => {
    const {state, dispatch} =  useContext(auth);
    const {count} =  state;
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={()=> dispatch({type : 'Incriment'})}>➕</button>
        <button disabled={count <= 0} onClick={()=> dispatch({type : 'Decriment'})}>⛔</button>
    </div>
  )
}

export default Count