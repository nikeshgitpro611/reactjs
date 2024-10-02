import React, { useState } from "react";
import { logoText } from "../utils/contentes";
import { Link } from "react-router-dom";
// --- 👺What i will Create 🍨---
// - Logo
// - NavItems
const Header = () => {
  const [btnStatus, setButtonStatus] = useState("Login");

  const handleButtonClick = () => {
    setButtonStatus((prevStatus) =>
      prevStatus === "Login" ? "Logout" : "Login"
    );
  };

  return (
    <div className="header">
      <div className="header_Logo">
       <Link to= '/'><img className="logo" src={logoText} alt="Company_Logo" /> </Link>
      </div>
      <div className="headerList">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to = '/about'>About</Link></li>
          <li>Cart</li>
          <li><Link to = '/contact'>Contact-us</Link></li>
          <button onClick={handleButtonClick}>{btnStatus}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
