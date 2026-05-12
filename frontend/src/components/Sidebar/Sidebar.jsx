import React from 'react'
import SidebarProfile from './SidebarProfile';
import SidebarLists from './SidebarLists';

const Sidebar = () => {
  return (
    <div className="sidebar w-70 h-full shadow-xl grid grid-cols-1 grid-rows-[200px_1fr]">
        <SidebarProfile/>
        <SidebarLists/>
    </div>
  )
}

export default Sidebar
