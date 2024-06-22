import React, { useContext, useState } from 'react';
import { Authentication } from './UiToggle';


const ContextToggle = () => {
    const useItContext = useContext(Authentication)
    const { toggleThem, them } = useItContext;
    return (
        <div style={{ padding: '1rem', border: '2px solid red' }}>
            <div style={{ background: them === 'yellow' ? 'brown' : 'yellow' }}>
                <p>{them}</p>
                <button onClick={toggleThem}>Toggle Click me!</button>
            </div>
        </div>
    )
}

export default ContextToggle
