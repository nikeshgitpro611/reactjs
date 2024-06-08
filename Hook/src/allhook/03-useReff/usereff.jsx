import React, { useEffect, useRef, useState } from 'react'

const Usereff = () => {
    const [val, setVal] = useState(0);
    const [count, setCount] = useState(0);
    const inputRef = useRef();
    const inputRefPre = useRef();
    const inc = useRef(0)

    //focusInput fun
    const focusInput = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    }

    //Incriment
    const incrimentHnadler = () => {
        const data = inc.current += 1
        setVal(data)
    }


    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput} className='btn'>Focus the input</button>

            <p>{val}</p>
            <button className='btn' onClick={incrimentHnadler}>Incriment</button>
            
        </div>
    )
}

export default Usereff
