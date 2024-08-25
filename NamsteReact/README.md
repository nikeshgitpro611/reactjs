> Documents

# Welcome to Namaste React🚀
# Some important Guidelines, before you proceed with the course!
1. Join our official Discord server of Namaste React from the community tab,
present on the course viewing page.
● All the course-related announcements and updates are shared on the
Discord server.
● All of your doubts and queries you can ask on the discord server. Many
enthusiastic learners are eagerly waiting to help you there!
2. Namaste React Web Series code repository
- https://github.com/namastedev/namaste-react
3. NetflixGPT Project Github repository -
- https://github.com/akshaymarch7/netflix-gpt
4. YouTube Project GitHub repository -
- https://github.com/akshaymarch7/namaste-youtube

# for Avoid Cors policy
- Add chrome extension Allow CORS: Access-Control-Allow-Origin.
- Json viewer
# Why React is faster

**React Fiber** is a reconciliation algorithm that identifies the differences between the real DOM and the virtual DOM, and then updates only the necessary portions.

Virtual Dom

:::::::::::::::::::::::::::::::::::: **ROUTING** :::::::::::::::::::::::::
- npm i react-router-dom

**In v6.4**, new routers were introduced that support the new data APIs

1. createBrowserRouter
2. createMemoryRouter
3. createHashRouter
4. createStaticRouter

**Not Support**
1. BrowserRouter
2. MemoryRouter
3. HashRouter
4. NativeRouter
5. StaticRouter

> **Why Children route required.**

In React Router, child routes (or nested routes) are used when you want to **render a portion of a UI within a parent component**. 

```
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Parent component with shared layout
    children: [
      { path: "about", element: <About /> }, // Child route
      { path: "contact", element: <Contact /> }, // Another child route
    ],
  },
]);
```
>** What Is Outlet?**

**Outlet** is used within a parent route's element to render its child routes. When a route with children is matched, the Outlet component in the parent route will render the corresponding child route component.

```
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header /> {/* Common header */}
      <div className="dashboard-layout">
        <Sidebar /> {/* Common sidebar */}
        <div className="dashboard-content">
          <Outlet /> {/* Child routes will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

```

```
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Orders from "./Orders";
import AllOrders from "./AllOrders";
import PendingOrders from "./PendingOrders";
import Products from "./Products";
import Users from "./Users";

const dashboardRoutes = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />, // Parent layout with sidebar and header
    children: [
      {
        path: "orders",
        element: <Orders />, // Orders component will be rendered inside <Outlet>
        children: [
          { path: "all", element: <AllOrders /> }, // AllOrders rendered inside Orders component's <Outlet>
          { path: "pending", element: <PendingOrders /> }, // PendingOrders rendered inside Orders component's <Outlet>
        ],
      },
      { path: "products", element: <Products /> },
      { path: "users", element: <Users /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={dashboardRoutes} />;
};

export default App;
```

**Hook**
- useRouteError()

