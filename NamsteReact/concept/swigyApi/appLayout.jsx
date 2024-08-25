import React from "react";
import Header from "./mui/Header";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About";
import SwigyApp from "./swigyApp";
import Error from "./components/Error";
import Contact from "./components/Contact";

const routeRouting = createBrowserRouter([
  {
    path: "/",
    element: <SwigyApp />,
    children: [
        {path: '/', element: <Body />},
        {path: '/about', element: <About />},
        {path: '/contact', element: <Contact />}
    ],
    errorElement: <Error />,
  },
]);

const AppLayout = () => {
  return (
    <>
      <RouterProvider router={routeRouting}>
        {/* <Header /> */}
        {/* <Body /> */}
        {/* <Footer /> */}
        <SwigyApp />
      </RouterProvider>
    </>
  );
};

export default AppLayout;
