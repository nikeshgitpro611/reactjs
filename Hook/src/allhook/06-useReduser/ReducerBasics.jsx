

import React from 'react'
import { useReducer } from 'react';
import { data, people } from '../../../data'

let defaultInitalVal = {
    people: data,
    isLoading: false
};

const reduserFn = (state, action) => {
    // console.log('state', state);
    // console.log('action', action);
    if (action.type === 'CLEAR_LIST') {
        return {...state, people: []}
    }
 }

const ReducerBasics = () => {
    const [state, dispatch] = useReducer(reduserFn, defaultInitalVal);
    //any thing need to be change from reduser
    const clearList = () => {
        dispatch({ type: 'CLEAR_LIST' })
    }

    return (
        <div>
            {state.people.map(data => {
                const { id, name } = data;
                return (
                    <div key={id}>
                        <ul>{name}</ul>
                        <button>Removed</button>
                    </div>
                )
            })}
            <br />
            <button onClick={clearList}>AllClr</button>

        </div>
    )
}

export default ReducerBasics
