import {useState,useCallback} from 'react'
import api from '../api/api.js'
export const useFetchUserData = (user,setUser,setAdmins,setMembers,setTasks,setLoading) =>{
    const [error,setError] = useState(null)
    
    const userData = useCallback(async (url) => {
        setLoading(true)
        try {
            const response = await api.get(url)
           
            console.log(response.data.user.tasks)
            if (response.data.user.role === "Super Admin") {
                setUser(response.data.user)
                setAdmins(response.data.admins)
                setMembers(response.data.admins.members)
            } else if (response.data.user.role === "Admin") {
                setUser(response.data.user)
                console.log(response.data.user.tasks)
                setMembers(response.data.user.members)
                setTasks(response.data.user.tasks)
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