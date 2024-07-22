import React,{useContext} from "react";
import { auth } from "../UiShow";

const Home = () => {
    const {toggle, colorMode} = useContext(auth)
  return (
    <div className="">
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: colorMode ? "#333" : "#eee",
        }}
      >
        <h1 style={{ color: colorMode ? "#fff" : "#000" }}>
          Theme Toggle Example
        </h1>
        <button onClick={toggle}>
          {colorMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Home;
