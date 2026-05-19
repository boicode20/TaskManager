import React,{useState,useEffect,createContext} from 'react'
import { useFetchUserData } from '../hooks/useFetchUserData.js';


export const UserContext = createContext()

const UserProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [admins,setAdmins] = useState(null)
  const [members,setMembers] = useState(null)
  const [loading,setLoading] = useState(false)
  const {error,userData} = useFetchUserData(user,setUser,setAdmins,setMembers,setLoading)


  useEffect(()=>{
    const getUserData = async () => {
      if(!user){
        console.log("Hello")
        await userData('/user-data')
      }
    }
    getUserData()
  },[])
  console.log({user,admins,members})
  return (
    <UserContext.Provider value={{ user, setUser,admins,setAdmins,members,setMembers,loading,setLoading}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
