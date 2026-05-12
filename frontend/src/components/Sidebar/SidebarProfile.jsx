import React from 'react'
import profile from '../../assets/profile.jpg'

const SidebarProfile = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col text-center gap-1 relative border-b border-gray-200">
      <img src={profile} alt="Profile" className="w-16 h-16 rounded-full" />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">John Doe</h3>
          <p className="text-sm text-gray-500">john.doe@example.com</p>
        </div>
        <div className="user-role absolute top-4 right-5" >
            <span className="text-xs bg-(--primary-color) text-white px-2 py-1 rounded-full">Admin</span>
        </div>
    </div>
  )
}

export default SidebarProfile
