import React from 'react'
import './loader.css'
const Loader = () => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-[#ffffff5f] top-0 left-0 z-50">
      <div className="loader"></div>
    </div>
  )
}

export default Loader
