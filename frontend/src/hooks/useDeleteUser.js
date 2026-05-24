import { useState } from 'react';
import api from '../api/api.js'
import { showToast } from '../utils/toastify.js';

export const useDeleteUser = (setAdmins,setMembers,loading, setLoading,setShowModal) => {
    const [error,setError] = useState(null)

    const handleDeleteUser = async (userId,type,) => {
        setLoading(true)
        try{
            const res = await api.delete(`/delete-user/${type}/${userId}`)
            setMembers(res.data.members)
            setAdmins(prevAdmins => prevAdmins.filter(admin => admin.id !== userId))
            console.log(res)
            showToast("success",res.data.message)
            setShowModal(false)
            setLoading(false)
        }catch (err){
            console.log(err)
            setError(err.response?.data?.message || "An error occurred while deleting the user.")
            showToast("error", err.response?.data?.message || "An error occurred while deleting the user.")   
            setLoading(false)

        }finally{
            setLoading(false)
            setError(null)
        }
}

return{handleDeleteUser,error}
}