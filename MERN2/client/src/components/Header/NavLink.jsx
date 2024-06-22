import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/Css/NavLinks.css';

const NavLink = props => {
  return <ul className="nav-links">
    <li>
      <Link to="/">ALL USERS</Link>
    </li>
    <li>
      <Link to="/u1/places">MY PLACES</Link>
    </li>
    <li>
      <Link to="/places/new">ADD PLACE</Link>
    </li>
    <li>
      <Link to="/auth">AUTHENTICATE</Link>
    </li>
  </ul>
};

export default NavLink;