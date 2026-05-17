import {useState,useCallback} from 'react'
import api from '../api/api.js'
export const useFetchUserData = (user,setUser,setLoading) =>{
    const [error,setError] = useState(null)
    
    const userData = useCallback(async (url) => {
        setLoading(true)
        try {
            const response = await api.get(url)
            setUser(response.data)
            setLoading(false)

        } catch (error) {
            console.error('Error fetching user data:', error.response)
            setError(error.response)
            setLoading(false)

        }
    },[user])

    


    return {error,userData}

}