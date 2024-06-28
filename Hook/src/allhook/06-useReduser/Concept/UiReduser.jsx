import React, { useReducer } from 'react'
import { initialVal, reduserFun } from './Reduser'

//Task Creat 3 btn and mutae incriment dec reset
const UiReduser = () => {
    const [state, dispach] = useReducer(reduserFun,initialVal);
    
    const incriment = () => {
        dispach({type : 'Incriment'})
    }
    const reset = ()=>{
        dispach({type : 'Reset'})
    }

    const decriment = () => {
        dispach({type : 'Decriment'})
    }
  return (
    <div>
      <h2>Use reduser Concept</h2>
      <p> Count Me : {state.Count}</p>
      <button onClick={incriment}>Incriment</button>
      <button onClick={decriment}>Decriment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UiReduser
