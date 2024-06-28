import React, { useReducer, useState } from 'react'


const initailState = {
    count: 0,
    step: 1
}


const reduserFun = (state, action) => {
    console.log('Reduser : ', state, action);

    switch (action.type) {
        case 'dec':
            return { ...state, count: state.count - state.step }
        case 'inc':
            return { ...state, count: state.count + state.step }
        case 'setCount':
            return { ...state, count: action.payload }
        case 'setStep':
            return { ...state, step: action.payload }
        case 'defineStep':
            return {...state, step : action.payload + 1}
        case 'reset':
            return initailState
        default:
            return state;
    }
}
const UiDate = () => {
    // const [count, setCount] = useState(1);
    // const [step, setStep] = useState(1);

    //Reduser   start
    const [state, dispch] = useReducer(reduserFun, initailState)
    const { count, step } = state;

    const date = new Date("june 21 2024")
    date.setDate(date.getDate() + count)

    const dec = () => {
        dispch({ type: 'dec' })
    }

    const inc = () => {
        dispch({ type: 'inc' })
    }

    const defineCount = (e) => {
        dispch({ type: 'setCount', payload: Number(e.target.value) })
        
    }

    const reset = () => {
        dispch({type : 'rest'})
    }

    // ------------reduser End



    const defineStep = () => {
        dispch({type : 'defineStep' , payload : state.step})
        if (state.step === 10) {
            let pass = Number(state.step);
            pass = 0
            dispch({type : 'defineStep', payload : pass})
            return state.step = 0
        }
        // setStep(prev => prev + 1)
        // if (step === 10) {
        //     setStep(0)
        //     return;
        // }
    }

    // const dec = () =>{
    //     setCount(prev => prev - step)
    // }
    // const inc = () => {
    //     setCount(prev => prev + step)
    // }
    // const defineCount = (e) => {
    //     setCount(Number(e.target.value))
    // }
    // const reset = () => {
    //     setCount(0)
    //     setStep(1)
    // }
    return (
        <div>
            <div className="">
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>
            <p>{date.toDateString()}</p>
            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default UiDate
