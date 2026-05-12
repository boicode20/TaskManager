import React from 'react'

const AuthInput = ({ value, label, type, id, placeholder , handleChange, isRequired, name, Icon,handleShowPassword}) => {

  return (
    <div className='auth-input flex flex-col w-full'>
        <label htmlFor={id} className='text-sm text-gray-600'>{label}</label>
        <div className="relative w-full flex items-center">
          <input type={type} id={id} placeholder={placeholder} className='border border-gray-300  rounded-md py-2 pl-3 pr-9 outline-none w-full text-[#4c4b4b]' onChange={handleChange} value={value} name={name} required={isRequired} />
          {Icon && (<Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"  onClick={handleShowPassword}/>)}
        </div>
    </div>
  )
}

export default AuthInput
