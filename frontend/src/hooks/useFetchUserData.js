import {useState,useCallback} from 'react'
import api from '../api/api.js'
export const useFetchUserData = (user,setUser,setAdmins,setMembers,setLoading) =>{
    const [error,setError] = useState(null)
    
    const userData = useCallback(async (url) => {
        setLoading(true)
        try {
            const response = await api.get(url)
            setUser(response.data)
            if (response.data.user.role === "Super Admin") {
                setUser(response.data.user)
                setAdmins(response.data.admins)
                setMembers(response.data.members)
            } else if (response.data.user.role === "Admin") {
                setUser(response.data.user)
                setMembers(response.data.members)
            }
            else if(response.data.user.role==="Member"){
                setMembers(response.data.user)
            }
            setLoading(false)

        } catch (error) {
            console.error('Error fetching user data:', error.response)
            setUser(null)
            setAdmins(null)
            setMembers(null)
            setError(error.response)
            setLoading(false)

        }finally{
            setLoading(false)

        }
    },[user])

    


    return {error,userData}

}