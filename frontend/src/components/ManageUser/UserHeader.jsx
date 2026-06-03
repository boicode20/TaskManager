import React, { useEffect, useState } from 'react'
import { useFilterItems } from '../../hooks/useFIlterItems';

const UserHeader = ({title,desc,setShowModal,userType,originalUser,setCopyUserLists}) => {
     const [search,setSearch] = useState("")
        const {handleSearchItems,handleStatusItems} = useFilterItems()
    
        useEffect(() => {
            
            handleSearchItems(search,originalUser,setCopyUserLists)
    
        }, [search]);
  return (
    <div className='admin-header w-full h-auto flex justify-between items-center'>
        <div className="admin-header-content">
            <h1 className='text-2xl text-[#424242] font-semibold'>{title}</h1>
            <p className='text-gray-600 text-[.9rem]'>{desc}</p>
        </div>
        
            <div className="flex flex-nowrap gap-5">
            <div className="admin-table-header mb-4 flex items-center justify-between gap-2 flex-wrap">
        <div className="table-header-search max:w-full w-120 ">
            <input 
            className="border border-gray-300 rounded-md py-2 px-4  outline-none w-full text-[#4c4b4b] "
            type="search" 
            value={search}
            placeholder="Search name here..."
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div className="table-header-filter  w-auto max:w-full">
            <select 
            className="border border-gray-300 rounded-md py-2 px-10 outline-none text-[#4c4b4b] text-[.9rem] w-full"
            name="status" 
            id="status" 
            onChange={(e)=>{handleStatusItems(e.target.value,originalUser,setCopyUserLists)}}
            >
                <option value="all">All status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="disabled">Disabled</option>
            </select>
        </div>
    </div>
    {userType === 'admin' && (
            <div className="admin-header-button">
                <button className="px-3 py-2 bg-(--primary-color) rounded-sm text-white text-[.9rem] cursor-pointer" 
                onClick={()=>setShowModal(true)}
                >+ Admin</button>
            </div>
                )}
            </div>
    
    </div>
  )
}

export default UserHeader