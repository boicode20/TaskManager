import React,{useState,useEffect,createContext} from 'react'
import { useFetchUserData } from '../hooks/useFetchUserData.js';


export const UserContext = createContext()

const UserProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [admins,setAdmins] = useState([])
  const [members,setMembers] = useState([])
  const [loading,setLoading] = useState(false)
  const {error,userData} = useFetchUserData(user,setUser,setAdmins,setMembers,setLoading)


  useEffect(()=>{
    const getUserData = async () => {
      if(!user){
        console.log("Hello")
        setLoading(true)
        try{
          await userData('/user-data')
          setLoading(false)
        }catch(err){
          console.log(err)
          setLoading(false)

        }finally{
          setLoading(false)
        }
      }
    }
    getUserData()
  },[])
  console.log(user)
  
  return (
    <UserContext.Provider value={{ user, setUser,admins,setAdmins,members,setMembers,loading,setLoading}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
