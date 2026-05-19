import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";

import { menuItemsByRole } from '../../utils/sidebarItems.js';
import api from '../../api/api.js';

const SidebarLists = ({ user }) => {
  
  const location = useLocation();
  const menuItems = menuItemsByRole[user.role] ;

  const handleLogout = async() =>{
    try{
      await api.post('/logout')
      window.location.href = '/'
    }catch(err){
      console.log(err.response)
    }
  }
  return (
    <ul className="space-y-2 w-full mt-4 pl-2">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        const isLogout = item.id === 'logout';
        
        return (
          <li key={item.id}>
            <Link
              to={item.path}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-[25px_0_0_25px] transition-all duration-200 ${
                isLogout
                  ? `text-(--secondary-color) hover:bg-gray-100`
                  : isActive
                  ? ' text-(--sidebar-active)'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="text-1xl" />
              <span className="text-[.9rem] font-medium">{item.label}</span>
            </Link>
          </li>
        );
      })}
      <li onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-3 rounded-[25px_0_0_25px] transition-all duration-200 cursor-pointer text-gray-700">
      <CiLogout className="text-1xl" />
      <span className="text-[.9rem] font-medium">Logout</span>
      </li>
    </ul>
  )
}

export default SidebarLists

