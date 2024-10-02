import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pipeline from "../pages/Pipeline/Pipeline";

function Router() {
  const appRoute = createBrowserRouter([{ path: "/", element: <Pipeline /> }]);
  return <RouterProvider router={appRoute}/>;
}

export default Router;
