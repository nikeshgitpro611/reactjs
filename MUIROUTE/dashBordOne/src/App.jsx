import {createBrowserRouter} from 'react-router-dom'
import {TestResourse,Form,DataGrid,GridField,Table,Tabs} from './components'
import ApplAyout from './ApplAyout'

import {RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
{path: '/', element:<ApplAyout />,
  children: [
    {path: '/form', element: <Form />},
    {path: '/grid', element: <GridField />},
    {path: '/datagrid', element: <DataGrid />},
    {path: '/table', element: <Table />},
    {path: '/test', element: <TestResourse />},
  ]
}
])
function App() {
  
  return <RouterProvider router={router} />
}

export default App
