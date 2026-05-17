import React from 'react'
import SidebarProfile from './SidebarProfile';
import SidebarLists from './SidebarLists';

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar w-70 h-full shadow-xl grid grid-cols-1 grid-rows-[200px_1fr]">
        <SidebarProfile user={user}/>
        <SidebarLists user={user}/>
    </div>
  )
}

export default Sidebar
