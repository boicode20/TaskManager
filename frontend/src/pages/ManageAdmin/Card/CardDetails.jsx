import React from 'react'
import { FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

const CardDetails = () => {
  return (
    <div className="card-deatils grid grid-cols-2 gap-2 grid-rows-auto w-full h-auto p-2">
            <div className="card-team flex justify-center items-center flex-nowrap flex-col  bg-(--primary-color) rounded-sm p-1 text-white">
            
                    <p className="text-1xl">5</p>
                <div className="teams text-sm flex flex-nowrap items-center gap-1">
                    <FaUsers className=" text-1xl"/>
                    <p>Team</p>
                </div>
            </div>
            {/* Status */}
            <div className="card-status flex justify-center items-center flex-nowrap flex-col gap-1 bg-[#18be63] text-white rounded-sm p-2">
                <p className="text-1xl">Active</p>
                <div className="status text-sm flex flex-nowrap items-center gap-1">
                    <FaUserCheck className=" text-1xl"/>
                    <p>Status</p>
                </div>
            </div>
        </div>
  )
}

export default CardDetails
