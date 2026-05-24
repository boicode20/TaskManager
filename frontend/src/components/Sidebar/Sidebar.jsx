import React from 'react'
import SidebarProfile from './SidebarProfile';
import SidebarLists from './SidebarLists';

const Sidebar = ({ user, isOpen, onClose }) => {
  return (
    <>
      <div className={`sidebar w-70 h-dvh md:h-full shadow-xl grid grid-cols-1 grid-rows-[200px_1fr] bg-white fixed md:static top-0 left-0 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <SidebarProfile user={user}/>
          <SidebarLists user={user}/>
      </div>
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="md:hidden fixed inset-0 bg-black/30 z-40"
        />
      )}
    </>
  )
}

export default Sidebar
