import { useState } from 'react';
import api from '../api/api.js'
import { showToast } from '../utils/toastify.js';

export const useDeleteUser = (setUser,loading, setLoading,setShowModal) => {
    const [error,setError] = useState(null)

    const handleDeleteUser = async (userId,type,) => {
        setLoading(true)
        try{
            const res = await api.delete(`/delete-user/${type}/${userId}`)
            setUser(prevUser => prevUser.filter(user => user.id !== userId))
            console.log(res)
            showToast("success",res.data.message)
            setShowModal(false)
            setLoading(false)
        }catch (err){
            console.log(err)
            const errorMessage = err?.response?.data?.message || "An error occurred while deleting the user."
            setError(errorMessage)
            showToast("error", errorMessage)   
            setLoading(false)

        }finally{
            setLoading(false)
            setError(null)
        }
}

return{handleDeleteUser,error}
}