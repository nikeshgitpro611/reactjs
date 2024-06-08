import React, { createContext, useState } from 'react'
import NavbarLinks from './NavbarLinks'

export const Authrise = createContext();


const NavBar = () => {
  const [val, setVal] = useState({ name: 'jone' });
  const logout = () => {setVal(null)}
  const logIn = () => {setVal({name : 'Welcome'})}
  
  return (
    <Authrise.Provider value={{val, logout, logIn}}>

      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavbarLinks />
      </nav>
    </Authrise.Provider>
  )
}

export default NavBar;
