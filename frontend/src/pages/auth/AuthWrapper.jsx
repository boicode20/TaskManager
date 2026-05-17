import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../provider/UserProvider';
import Loader from '../../components/Loader/Loader';

const AuthWrapper = () => {
  const {user,setUser,loading} = useContext(UserContext)
  if(loading) return <Loader/>
  if(user) return <Navigate to="/dashboard" replace/>
  return (
    <div className="auth-wrapper w-full h-dvh flex items-center justify-center p-1">
      <Outlet/>
    </div>
  )
}

export default AuthWrapper