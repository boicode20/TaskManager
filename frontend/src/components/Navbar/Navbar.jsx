import React from 'react'
import Logo from '../Logo/Logo';
import { FiBell, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <div className="w-full h-full col-1 row-1 shadow-sm flex items-center justify-between px-4">
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onToggleSidebar}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 text-gray-700"
      >
        {isSidebarOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </button>
      <Logo/>
    </div>
        {/* Bell Icon */}
        <div className="relative mr-10">
            <FiBell className="text-2xl text-gray-600 cursor-pointer"/>
        </div>
    </div>
  )
}

export default Navbar
