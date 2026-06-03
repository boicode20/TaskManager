import React from 'react'

const UserCardHeading = ({user}) => {
  return (
    <div className="card-header grid grid-cols-[72px_1fr] items-center gap-3">
            <div className="card-header-image">
                <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full mx-auto" />
            </div>
        <div className="card-name-email w-full min-w-0 flex flex-col">
          <h3 className="text-lg font-semibold text-[#4c4b4b] truncate">{user.name}</h3>
          <p className="text-sm text-gray-600 truncate">{user.email}</p>
          <div className="card-role px-2 py-0.5 bg-(--primary-color) w-fit text-white text-[.7rem] rounded-2xl flex items-center justify-center mt-1">
                    <p className="">{user.role}</p>
                </div>
            </div>
</div>
  )
}

export default UserCardHeading