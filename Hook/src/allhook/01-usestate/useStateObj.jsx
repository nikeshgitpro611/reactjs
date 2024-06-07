import React, { useState } from 'react'

const UseStateObj = () => {
    const [people, setPeople] = useState({
        name: 'peter',
        age: 24,
        hobby: 'read books',
    });

    // fuction clk btn and mutate data
    const displayPerson = () =>{
        setPeople({name: 'john', age: 28, hobby: 'scream at the computer' })
    }

    return (
        <div>
            <h3>{people.name}</h3>
            <h3>{people.age}</h3>
            <button className='btn' onClick={displayPerson}>
                show john
            </button>

        </div>
    )
}

export default UseStateObj
