import React from 'react'
import { FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa";

const UserCardDetails = ({user}) => {
  const isMember = user.role === 'Member'
  const isActive = user.status === "Active"
  const isInactive = user.status === "Inactive"
  const isDisabled = user.status === "Disabled"

  const statusColors = {
    Active: 'bg-green-500',
    Inactive: 'bg-yellow-500',
    Disabled: 'bg-red-500'
  }

  const statusIcons = {
    Active: <FaUserCheck />,
    Inactive: <FaUserClock />,
    Disabled: <FaUserSlash />
  }

  return (
    <div className={`card-details w-full h-auto p-2 ${isMember ? 'grid grid-cols-1 gap-2' : 'grid grid-cols-2 gap-2'}`}>
      
      {/* Team - Only for Admin */}
      {!isMember && user.role === 'Admin' && (
        <div className="card-team bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-2 flex flex-col justify-center items-center text-white shadow-sm hover:shadow-md transition-shadow min-h-[70px]">
          <p className="text-base font-bold leading-none">{user.members ? user.members.length : 0}</p>
          <div className="flex items-center gap-0.5 text-xs leading-none mt-0.5">
            <FaUsers className="text-xs" />
            <p>Team</p>
          </div>
        </div>
      )}

      {/* Status */}
      <div className={`card-status bg-gradient-to-br ${
        isActive ? 'from-green-500 to-green-600' : 
        isInactive ? 'from-yellow-500 to-yellow-600' : 
        'from-red-500 to-red-600'
      } rounded-lg p-2 flex flex-col justify-center items-center text-white shadow-sm hover:shadow-md transition-shadow min-h-[70px]`}>
        <p className="text-base font-bold leading-none">{user.status}</p>
        <div className="flex items-center gap-0.5 text-xs leading-none mt-0.5">
          {statusIcons[user.status] && statusIcons[user.status]}
          <p>Status</p>
        </div>
      </div>

      {/* Admin Code - Full width */}
      {!isMember && (
        <div className={`card-admin-code bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-2 flex flex-col justify-center items-center shadow-sm hover:shadow-md transition-shadow min-h-[70px] ${isMember ? 'col-span-1' : 'col-span-2'}`}>
          <h4 className="text-xs font-semibold text-gray-600 leading-none">Admin Code</h4>
          <span className="font-bold text-xs text-gray-800 mt-0.5 leading-none">{user.adminCode?.code || 'N/A'}</span>
        </div>
      )}
    </div>
  )
}

export default UserCardDetails