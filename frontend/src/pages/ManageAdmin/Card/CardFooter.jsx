import React from 'react'
import { FaCalendarWeek } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { BsTrash3Fill } from "react-icons/bs";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";

const CardFooter = () => {
  return (
        <div className="card-footer grid grid-cols-[auto_1fr] mt-4">
            
            <div className="card-joined text-gray-600 flex flex-nowrap items-center gap-3 " >
                <FaCalendarWeek className="text-gray-600 text-1xl"/>
                <div className="joined text-[.8rem]">
                    <p>Joined:</p>
                    <p>May 17, 2026</p>
                </div>
            </div>
            <div className="card-actions flex items-center justify-end gap-1">
                <div className="action-edit cursor-pointer">
                    <MdEditSquare className="text-1xl text-(--secondary-color)"/>
                </div>
                <div className="action-delete  p-2 cursor-pointer">
                    <BsTrash3Fill className="text-1xl text-[#df2929]"/>
                </div>
            </div>
        </div>
  )
}

export default CardFooter
