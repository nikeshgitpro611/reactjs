import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const ShowCurrentPrevVal = () => {
    const [val, setVal] =  useState(0)
    const reff = useRef();

    useEffect(()=>{
        reff.current = val;
    }, [val])

    const prevCount = reff.current;
    return (
        <div>
            <h1>Current Count: {val}</h1>
            <h2>Previous Count: {prevCount}</h2>
            <button onClick={() => setVal(val + 1)}>Increment</button>
        </div>
    )
}

export default ShowCurrentPrevVal
