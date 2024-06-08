import React, { useContext } from 'react'
import { Authrise } from './Navbar'
// import NavbarLinks from './NavbarLinks'

const UserContainer = () => {
    const { val, logout, logIn } = useContext(Authrise);
    console.log('valNav : ', val);
    return (
        <div className='user-container'>
            {val ? (<>
            <p>Hey! {val.name}</p>
            <button onClick={logout}>LogOut</button>
            </>) : <button className='btn' onClick={logIn}>LogIn</button>}
        </div >
    )
}

export default UserContainer
