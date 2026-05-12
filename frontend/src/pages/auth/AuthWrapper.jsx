import React from 'react'
import { Outlet } from 'react-router-dom';

const AuthWrapper = () => {
  return (
    <div className="auth-wrapper w-full h-dvh flex items-center justify-center p-1">
      <Outlet/>
    </div>
  )
}

export default AuthWrapper