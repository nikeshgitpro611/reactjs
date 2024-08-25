import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./mui/Header";
import { Outlet } from "react-router-dom";

const SwigyApp = () => {
  return (
    <div className="body">
      <Header />
      {/* <Body /> */}
      <Outlet />
      <div style={{ backgroundColor: "ActiveCaption" }}>
        <Footer />
      </div>
    </div>
  );
};

export default SwigyApp;
