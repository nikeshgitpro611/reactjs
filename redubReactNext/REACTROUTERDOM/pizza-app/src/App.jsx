import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "../src/features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreatOrder from "./features/order/CreatOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreatOrder /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
