import React,{useState,useEffect,createContext} from 'react'
import { useFetchUserData } from '../hooks/useFetchUserData.js';


export const UserContext = createContext()

const UserProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(false)
  const {error,userData} = useFetchUserData(user,setUser,setLoading)


  useEffect(()=>{
    const getUserData = async () => {
      if(!user){
        console.log("Hello")
        await userData('/user-data')
      }
    }
    getUserData()
  },[])
  console.log(user)
  return (
    <UserContext.Provider value={{ user, setUser,loading,setLoading}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
