import React from "react";
import Header from "./mui/Header";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About";
import SwigyApp from "./swigyApp";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestorentMenu from "./components/RestorentMenu";

const routeRouting = createBrowserRouter([
  {
    path: "/",
    element: <SwigyApp />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restorent/:resId", element: <RestorentMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const AppLayout = () => {
  return (
    <>
      <RouterProvider router={routeRouting}>
        <SwigyApp />
      </RouterProvider>
    </>
  );
};

export default AppLayout;
