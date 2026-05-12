import React from 'react'
import Logo from '../Logo/Logo';
import { FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full h-full col-1 row-1 shadow-sm flex items-center justify-between px-4">
        <Logo/>
        {/* Bell Icon */}
        <div className="relative mr-10">
            <FiBell className="text-2xl text-gray-600 cursor-pointer"/>
        </div>
    </div>
  )
}

export default Navbar
