import {createBrowserRouter} from 'react-router-dom'
import {TestResourse,Form,DataGrid,Grid,Table,Tabs} from './components'
import ApplAyout from './ApplAyout'

import {RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
{path: '/', element:<ApplAyout />,
  children: [
    {path: '/test', element: <TestResourse />},
    {path: '/form', element: <Form />},
    {path: '/grid', element: <Grid />},
    {path: '/datagrid', element: <DataGrid />},
    {path: '/table', element: <Table />},
  ]
}
])
function App() {
  
  return <RouterProvider router={router} />
}

export default App
