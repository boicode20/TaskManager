import React from 'react'
import { Link } from 'react-router-dom';

const AuthForm = ({ children, onSubmit , bText, bColor,authType}) => {
  return (
    <form onSubmit={onSubmit} className='auth-form flex flex-col gap-1'>
        {children}
        {
            authType ==='Login' && (
                <Link to="" className="underline text-[.9rem] text-[#4f4f4f]">Forgot your password?</Link>
            )
        }
        <button type="submit" className={`bg-${bColor} text-white py-2 px-3 rounded-md hover:bg-${bColor}/90 transition-colors duration-300 mt-2 cursor-pointer font-semibold`}>
          {bText}
        </button>
        {/* add or register link button */}
        {
            authType === 'Login' ? (
                <div className="flex flex-col items-center justify-center gap-4 mt-3">
  
                    <div className="flex items-center w-full gap-3">
                        <span className="flex-1 h-px bg-gray-400"></span>
                        
                        <span className="text-gray-500 text-sm whitespace-nowrap">
                        or
                        </span>
                        
                        <span className="flex-1 h-[1px] bg-gray-400"></span>
                    </div>

                    <Link to="/register" className="w-full">
                        <button className="w-full text-white py-2 px-3 rounded-md bg-(--secondary-color) font-semibold cursor-pointer">
                        Register
                        </button>
                    </Link>

                </div>
            ):(
                <div className="flex flex-col items-center justify-center gap-4 mt-3">
  
                    <div className="flex items-center w-full gap-3">
                        <span className="flex-1 h-px bg-gray-400"></span>
                        
                        <span className="text-gray-500 text-sm whitespace-nowrap">
                        or
                        </span>
                        
                        <span className="flex-1 h-[1px] bg-gray-400"></span>
                    </div>

                    <Link to="/" className="w-full">
                        <button className="w-full text-white py-2 px-3 rounded-md bg-(--primary-color) font-semibold cursor-pointer">
                        Login
                        </button>
                    </Link>

                </div>
            )
        }
    </form>
  )
}

export default AuthForm
