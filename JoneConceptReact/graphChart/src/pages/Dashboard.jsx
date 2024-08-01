import React from "react";
import { Outlet } from "react-router-dom";
import { Info, Navbar, Repos, Search, User } from "../components";
const Dashboard = () => {
  return (
    <div>
      <header>
        {/* <Navbar /> */}
        {/* <Search /> */}
        <Info />
        <User />
        <Repos />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>WIp</h2>
      </footer>
    </div>
  );
};

export default Dashboard;
