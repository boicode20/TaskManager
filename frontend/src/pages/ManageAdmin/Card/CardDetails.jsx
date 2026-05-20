import React from 'react'
import { FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa";

const CardDetails = ({admin}) => {
  return (
    <div className="card-deatils grid grid-cols-2 grid-rows-2 gap-1 grid-rows-auto w-full h-auto p-2 place-items-center">
            <div className="card-team w-full py-1 flex justify-center items-center flex-nowrap flex-col  bg-(--primary-color) rounded-sm text-white text-[.9rem] col-1 row-1">
            
                    <p className="">{admin.members?admin.members.length:0}</p>
                <div className="teams text-sm flex flex-nowrap items-center gap-1">
                    <FaUsers className=""/>
                    <p>Team</p>
                </div>
            </div>
            {/* Status */}
            <div className={"card-status  w-full py-1 flex justify-center items-center flex-nowrap flex-col  text-[.9rem] text-white rounded-sm col-2 row-1 " + (admin.status === "Active" ? "bg-(--active-color)" : admin.status === "Inactive" ? "bg-(--inactive-color)" : "bg-(--disabled-color)")}>
                <p className="">{admin.status==="Active"?"Active":admin.status==="Inactive"?"Inactive":"Disabled"}</p>
                <div className="status text-sm flex flex-nowrap items-center gap-1">
                    {admin.status === "Active" && <FaUserCheck className=""/>}
                    {admin.status === "Inactive" && <FaUserClock className=""/>}
                    {admin.status === "Disabled" && <FaUserSlash className=""/>}
                    <p>Status</p>
                </div>
            </div>
            <div className="card-admin-code col-span-2 row-2 w-full py-1 flex justify-center items-center flex-nowrap flex-col  bg-[#f0f0f0] text-[.9rem] rounded-sm  text-[#4c4b4b]">
                <h4 className="">Admin Code</h4>
                <span className="font-semibold">{admin.adminCode.code}</span>
            </div>
        </div>
  )
}

export default CardDetails
