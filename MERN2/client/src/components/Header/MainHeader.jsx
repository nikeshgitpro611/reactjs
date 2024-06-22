import React from 'react'
import NavLink from './NavLink'
import '../../assets/Css/MainNavigation.css';
import SideDrawer from './SideDrawer';
import MainHeaderRap from './MainHeaderRap';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <div>
            <SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <NavLink />
                </nav>
            </SideDrawer>
            <MainHeaderRap>
                <button className="main-navigation__menu-btn">
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLink />
                </nav>
            </MainHeaderRap>
        </div>
    )
}

export default MainHeader
