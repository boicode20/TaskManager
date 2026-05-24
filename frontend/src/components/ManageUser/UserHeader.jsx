import React from 'react'

const UserHeader = ({title,desc,setShowModal,userType}) => {
  return (
    <div className='admin-header w-full h-auto flex justify-between items-center'>
        <div className="admin-header-content">
            <h1 className='text-2xl text-[#424242] font-semibold'>{title}</h1>
            <p className='text-gray-600 text-[.9rem]'>{desc}</p>
        </div>
        {userType === 'admin' && (
            <div className="admin-header-button">
                <button className="px-3 py-2 bg-(--primary-color) rounded-sm text-white text-[.9rem] cursor-pointer" 
                onClick={()=>setShowModal(true)}
                >+ Admin</button>
            </div>
        )}
    </div>
  )
}

export default UserHeader