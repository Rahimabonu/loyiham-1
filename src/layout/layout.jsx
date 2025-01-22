import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/navbar'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <footer>
        <h1>Footer</h1>
    </footer>
    </>
  )
}
export default Layout;