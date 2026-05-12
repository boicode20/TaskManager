import React from 'react'

const AuthBox = ({ children }) => {
  return (
    <div className="shadow-xl p-4 rounded-sm flex flex-col gap-2 w-full max-w-110 h-auto bg-[#ffffff]">{children}</div>
  )
}

export default AuthBox