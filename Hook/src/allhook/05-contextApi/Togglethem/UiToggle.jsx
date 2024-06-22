import React, { createContext, useState } from 'react'
import ContextToggle from './ContextToggle'

export const Authentication = createContext();

const UiToggle = () => {
    const [them, setThem] = useState('yellow');

    const toggleThem = () => {
        setThem(prevThem => (prevThem === 'yellow' ? 'brown' : 'yellow'))
    }

    return (
        <div>
            <h1>Toggle Context Api Them</h1>
            <Authentication.Provider value={{toggleThem, them}}>
            <ContextToggle />
            </Authentication.Provider>
        </div>
    )
}

export default UiToggle

