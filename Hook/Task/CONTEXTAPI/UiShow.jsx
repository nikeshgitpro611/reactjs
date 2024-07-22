import React, { useState, createContext } from "react";
import Home from "./components/Home";
import Content from "./components/Content";

export const auth = createContext();

const UiShow = () => {
  const [colorMode, setColorMode] = useState(false);
  const toggle = () => {
    setColorMode(!colorMode);
  };
  return (
    <auth.Provider value={{toggle, colorMode}}>
      <Home />
      <Content />
    </auth.Provider>
  );
};

export default UiShow;
