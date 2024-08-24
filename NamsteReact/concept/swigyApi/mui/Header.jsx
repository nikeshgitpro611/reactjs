import React, { useState } from "react";
import { logoText } from "../utils/contentes";
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
        <img className="logo" src={logoText} alt="Company_Logo" />
      </div>
      <div className="headerList">
        <ul>
          <li>
            {/* <Link to="/Home">Home</Link>{" "} */}
            Home
          </li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact-Us</li>
          <button onClick={handleButtonClick}>{btnStatus}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
