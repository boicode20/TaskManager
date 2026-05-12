import React from 'react'

const AuthHeader = ({text, tColor}) => {
  return (
    <div className={`text-[1.5rem] sm:text-2xl text-center font-bold text-${tColor}`} 
    style={{color: `var(${tColor})`}}
    >{text}</div>
  )
}

export default AuthHeader