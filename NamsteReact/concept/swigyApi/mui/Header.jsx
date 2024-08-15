import React from "react";

// --- 👺What i will Creat 🍨---
// - Logo
// - NavItems
const Header = () => {
  return (
    <div className="header">
      <div className="header_Logo">
        <img
          className="logo"
          src="https://cdni.iconscout.com/illustration/premium/thumb/food-app-illustration-download-in-svg-png-gif-file-formats--online-order-booking-burger-delivery-mobile-apps-and-services-pack-design-development-illustrations-3742547.png"
          alt="Company_Logo"
        />
      </div>
      <div className="headerList">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact-Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
