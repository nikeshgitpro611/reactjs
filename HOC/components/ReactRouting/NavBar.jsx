import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <nav>
            <ul style={{listStyle: 'none'}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default NavBar
