import React, {useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../provider/UserProvider';
import { useFilterItems } from '../../../hooks/useFIlterItems';

const AdminCardHeader = ({adminList, setAdminList }) => {
    const [search,setSearch] = useState("")
    const {admins,setAdmins} = useContext(UserContext)
    const {handleSearchItems,handleStatusItems} = useFilterItems()

    useEffect(() => {
        
        handleSearchItems(search,admins,setAdminList)

    }, [search]);
  return (
    <div className="admin-table-header mb-4 flex items-center justify-between">
        <div className="table-header-search max:w-full w-120 ">
            <input 
            className="border border-gray-300 rounded-md py-2 px-4  outline-none w-full text-[#4c4b4b] "
            type="search" 
            value={search}
            placeholder="Search admin name..."
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div className="table-header-filter flex flex-col">
            <label className="text-[#4c4c4c] font-semibold text-[.8rem]" htmlFor="status">Filter by status</label>
            <select 
            className="border border-gray-300 rounded-md py-2 px-10 outline-none text-[#4c4b4b] text-[.9rem]"
            name="status" 
            id="status" 
            onChange={(e)=>{handleStatusItems(e.target.value,admins,setAdminList)}}
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

export default AdminCardHeader
