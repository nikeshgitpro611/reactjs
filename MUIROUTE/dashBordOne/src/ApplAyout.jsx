import React from "react";
import {
  DataGrid,
  Form,
  GridField,
  Table,
  Tabs,
  TestResourse,
} from "./components";

import {NavDrawe} from './ScafFolder'
import { Outlet } from "react-router-dom";
import { Toolbar } from "@mui/material";
const ApplAyout = () => {
  return (
    <div>
      <header><NavDrawe /></header>
      <main style= {{marginLeft: '240px'}}>
        <Toolbar />
        <Outlet />
      </main>
    </div>
  );
};

export default ApplAyout;
