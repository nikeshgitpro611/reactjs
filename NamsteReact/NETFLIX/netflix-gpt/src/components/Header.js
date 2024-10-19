import React from "react";
import { Logo } from "../logo";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10">
      <img src={Logo[1].logo} className="w-44" />
    </div>
   
  );
};

export default Header;
