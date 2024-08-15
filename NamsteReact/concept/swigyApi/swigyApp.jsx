import React from "react";
import Body from "./Body";
import { Header } from ".";
import Footer from "./Footer";

const swigyApp = () => {
  return (
    <div className="body">
      <Header />
      <Body />
      <div style={{ backgroundColor: "ActiveCaption" }}>
        <Footer />
      </div>
    </div>
  );
};

export default swigyApp;
