import React from 'react'
import { convertDate } from '../../utils/convertDate.js'
import { FaCalendarWeek } from "react-icons/fa"
import { MdEditSquare } from "react-icons/md"
import { BsTrash3Fill } from "react-icons/bs"

const UserCardFooter = ({user,setShowEditModal,setEditSelectedUser,setShowDeleteModal,setDeleteUser}) => {
  return (
    <div className="card-footer grid grid-cols-[1fr_auto] items-center mt-3 gap-2">
            
            <div className="card-joined text-gray-600 flex flex-nowrap items-center gap-3" >
                <FaCalendarWeek className="text-gray-600 text-1xl"/>
                <div className="joined text-[.8rem]">
                    <p>Joined:</p>
                    <p>{convertDate(user.createdAt)}</p>
                </div>
            </div>
            <div className="card-actions flex items-center justify-end gap-1">
                <div
                 className="action-edit cursor-pointer"
                onClick={()=>{setShowEditModal(true); setEditSelectedUser(user);}}
                >
                    <MdEditSquare className="text-1xl text-(--secondary-color)"/>
                </div>
                <div className="action-delete  p-2 cursor-pointer" onClick={() => { setShowDeleteModal(true); setDeleteUser(user); }}>
                    <BsTrash3Fill className="text-1xl text-[#df2929]"/>
                </div>
            </div>
        </div>
  )
}

export default UserCardFooter