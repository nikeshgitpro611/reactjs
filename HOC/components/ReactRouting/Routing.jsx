import React from 'react'
import NavBar from './NavBar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';

const routPath = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        children: [

            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> }
        ]
    }
])
const Routing = () => {
    return (
        <div>
            <RouterProvider router={routPath} />
        </div>
    )
}

export default Routing
