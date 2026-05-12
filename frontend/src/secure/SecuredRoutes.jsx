import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const SecuredRoutes = () => {
  return (
    <div className="secured-routes w-full h-dvh max-h-auto grid grid-cols-1 grid-rows-[60px_1fr]">
        <Navbar/>
        <div className="w-full h-full grid grid-cols-[auto_1fr] relative">
        <Sidebar/>
        {<Outlet/>}
        </div>
    </div>
  )
}

export default SecuredRoutes
