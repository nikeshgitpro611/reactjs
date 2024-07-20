// import React from 'react'

import { Outlet } from "react-router-dom"
import CartOverView from "../features/cart/CartOverView"
import Header from "./Header"

const AppLayout = () => {
  return (
    <div>
        <Header />
        <main>
            <h1>Content</h1>
            <Outlet />
        </main>
        <CartOverView />
    </div>
  )
}

export default AppLayout