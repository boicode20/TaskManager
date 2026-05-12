import React from 'react'
import logo from '../../assets/tm-logo.png'
import './logo.css'
const Logo = () => {
  return (
    <div className="logo flex items-center flex-nowrap justify-center">
        <img src={logo} alt="TaskManager Logo" className={`sm:w-12 sm:h-12 w-10 h-10`}/>
        <h1 className={`text-[1.3rem] sm:text-2xl font-bold text-gray-800`}>Task<span>Manager</span></h1>
    </div>
  )
}

export default Logo