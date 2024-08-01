import React from "react";
import {
  DataGrid,
  Form,
  Grid,
  Table,
  Tabs,
  TestResourse,
} from "./components";

import {NavDrawe} from './ScafFolder'
import { Outlet } from "react-router-dom";
const ApplAyout = () => {
  return (
    <div>
      <header><NavDrawe /></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ApplAyout;
