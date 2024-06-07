//if clicking on button then log num is less than 1 to ui numbe

import React, { useState } from 'react'



const UseStateIssue = () => {
    const [val, setVal] = useState(0);
    console.log('Val : ', val);
    const handleClick = () => {
        //solution
        setVal((prevVal) => prevVal + 1);
    }

    return (
        <div>
            <h1>{val}</h1>
            <button className='btn' onClick={handleClick}>
                increase
            </button>
        </div>
    )
}

export default UseStateIssue
