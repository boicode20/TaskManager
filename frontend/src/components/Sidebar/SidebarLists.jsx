import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { menuItemsByRole } from '../../utils/sidebarItems.js';

const SidebarLists = ({ userRole = 'Super Admin' }) => {
  const location = useLocation();
  const menuItems = menuItemsByRole[userRole] || menuItemsByRole['Member'];

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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[25px_0_0_25px] transition-all duration-200 block ${
                isLogout
                  ? `text-[var(--secondary-color)] hover:bg-gray-100`
                  : isActive
                  ? 'bg-[var(--secondary-color)] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="text-xl" />
              <span className="font-medium">{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  )
}

export default SidebarLists

