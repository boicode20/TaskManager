import React, { useEffect, useState } from 'react'
import { useFilterItems } from '../../hooks/useFIlterItems';

const UserCardHeader = ({setCopyUserLists,originalUser}) => {
  const [search,setSearch] = useState("")
    const {handleSearchItems,handleStatusItems} = useFilterItems()

    useEffect(() => {
        
        handleSearchItems(search,originalUser,setCopyUserLists)

    }, [search]);
  return (
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
  )
}

export default UserCardHeader