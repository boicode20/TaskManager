import { useState } from 'react';
export const useShowPassword = ({showPass,setShowPass}) => {

    const handleShowPassword =()=>{
        setShowPass(prev => !prev)
    }
    return {handleShowPassword}
}
