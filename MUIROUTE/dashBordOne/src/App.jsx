import { createBrowserRouter } from "react-router-dom";
import { TestResourse, Form, GridField, Table, Tabs } from "./components";
import ApplAyout from "./ApplAyout";

import { RouterProvider } from "react-router-dom";
import ColumnGroupingTable from "./components/PaginationGrid";
// import PlotlyData from './Plotly/PlotlyData'
import ParentComponent from "./Plotly/ParentComponent";
import CollapsibleTable from "./components/TyPagination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplAyout />,
    children: [
      { path: "/form", element: <Form /> },
      { path: "/grid", element: <GridField /> },
      // {path: '/datagrid', element: <DataGrid />},
      { path: "/table", element: <Table /> },
      { path: "/test", element: <TestResourse /> },
      { path: "/pagination", element: <ColumnGroupingTable /> },
      { path: "/plotly", element: <ParentComponent /> },
      { path: "/tyTable", element: <CollapsibleTable /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
