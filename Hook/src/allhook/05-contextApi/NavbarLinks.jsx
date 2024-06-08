import React from 'react'
import UserContainer from './UserContainer'

const NavbarLinks = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  )
}

export default NavbarLinks
