import React from 'react'
import { FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa";
const UserCardDetails = ({user}) => {
  return (
     <div className="card-deatils grid grid-cols-2 gap-2 w-full h-auto p-2 items-stretch">
            <div className="card-team w-full py-1 flex justify-center items-center flex-nowrap flex-col  bg-(--primary-color) rounded-sm text-white text-[.9rem] col-1 row-1">
            
                    <p className="">{user.members?user.members.length:0}</p>
                <div className="teams text-sm flex flex-nowrap items-center gap-1">
                    <FaUsers className=""/>
                    <p>Team</p>
                </div>
            </div>
            {/* Status */}
            <div className={"card-status  w-full py-1 flex justify-center items-center flex-nowrap flex-col  text-[.9rem] text-white rounded-sm col-2 row-1 " + (user.status === "Active" ? "bg-(--active-color)" : user.status === "Inactive" ? "bg-(--inactive-color)" : "bg-(--disabled-color)")}>
                <p className="">{user.status==="Active"?"Active":user.status==="Inactive"?"Inactive":"Disabled"}</p>
                <div className="status text-sm flex flex-nowrap items-center gap-1">
                    {user.status === "Active" && <FaUserCheck className=""/>}
                    {user.status === "Inactive" && <FaUserClock className=""/>}
                    {user.status === "Disabled" && <FaUserSlash className=""/>}
                    <p>Status</p>
                </div>
            </div>
            <div className="card-admin-code col-span-2 row-2 w-full py-1 flex justify-center items-center flex-nowrap flex-col  bg-[#f0f0f0] text-[.9rem] rounded-sm text-[#4c4b4b]">
                <h4 className="">Admin Code</h4>
                <span className="font-semibold">{user.adminCode.code}</span>
            </div>
        </div>
  )
}

export default UserCardDetails