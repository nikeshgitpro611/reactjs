// import React from 'react'

import { Outlet, useNavigation } from "react-router-dom";
import CartOverView from "../features/cart/CartOverView";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
  const navigate = useNavigation();
  const isLoader = navigate.state === "loading";

  return (
    <div className="layout">
      {isLoader && <Loader />}
      <Header />
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
};

export default AppLayout;
