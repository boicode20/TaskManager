import React, { useContext, useState } from 'react'
import api from '../../../api/api.js'
import { useDeleteUser } from '../../../hooks/useDeleteUser.js';
import { UserContext } from '../../../provider/UserProvider.jsx';
const DeleteAction = ({deleteUser,setShowDeleteModal,setUsers,type}) => {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    const {handleDeleteUser} = useDeleteUser(setUsers,loading,setLoading,setShowDeleteModal)
  
    return (
    <div className="">
        <div className="user-account">
            <p className="text-lg font-semibold text-gray-600">Username: {deleteUser.username}</p>
        </div>
        <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 cursor-pointer" onClick={()=>setShowDeleteModal(false)}>Cancel</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer" onClick={()=>handleDeleteUser(deleteUser._id, type)}
            disabled={loading}    
            >{loading?"Deleting...":"Delete"}</button>
        </div>
    </div>
  )
}

export default DeleteAction
