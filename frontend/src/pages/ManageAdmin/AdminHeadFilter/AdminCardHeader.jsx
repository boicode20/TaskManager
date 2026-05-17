import React from 'react'

const AdminCardHeader = () => {
  return (
    <div className="admin-table-header mb-4 flex items-center justify-between">
        <div className="table-header-search max:w-full w-120 ">
            <input 
            className="border border-gray-300 rounded-md py-2 px-4  outline-none w-full text-[#4c4b4b] "
            type="search" 
            placeholder="Search admin name..."
            
            />
        </div>
        <div className="table-header-filter flex flex-col">
            <label className="text-[#4c4c4c] font-semibold text-[.8rem]" htmlFor="status">Filter by status</label>
            <select 
            className="border border-gray-300 rounded-md py-2 px-10 outline-none text-[#4c4b4b] text-[.9rem]"
            name="status" 
            id="status" >
                <option value="">All status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="inactive">Disable</option>
            </select>
        </div>
    </div>
  )
}

export default AdminCardHeader
