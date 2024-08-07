import React from "react";
import styled from "styled-components";
import { Dashboard, AuthWrapper, Error, Login, PrivateRoute } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  margin: auto;
`;

const route = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
    children: [{ path: "/login", element: <Login /> }],
  },
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
