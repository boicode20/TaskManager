import React from 'react'

const AdminHeader = ({ setShowModal }) => {
  return (
    <div className='admin-header w-full h-auto flex justify-between items-center'>
        <div className="admin-header-content">
            <h1 className='text-2xl text-[#424242] font-semibold'>Manage Admin</h1>
            <p className='text-gray-600 text-[.9rem]'>Manage administrator accounts and permissions.</p>
        </div>
        <div className="admin-header-button">
            <button className="px-6 py-2 bg-(--primary-color) rounded-sm text-white text-[.9rem] cursor-pointer" 
            onClick={()=>setShowModal(true)}
            >Add new admin</button>
        </div>
    </div>
  )
}

export default AdminHeader
