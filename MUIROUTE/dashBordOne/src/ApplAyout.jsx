import React from "react";


import { NavDrawe } from "./ScafFolder";
import { Outlet } from "react-router-dom";
import { ThemeProvider, Toolbar } from "@mui/material";
import { MinWidth } from "./components/Form";
import BeautiFulThem from "./Thems/BeautiFulThem";
const ApplAyout = () => {
  return (
    <div>
      <header>
        <NavDrawe />
      </header>
      <main style={{marginLeft: 260}}>
        <ThemeProvider theme={BeautiFulThem}>
        <Toolbar />
        <Outlet />
        </ThemeProvider>
      </main>
    </div>
  );
};

export default ApplAyout;
