import React, { useState } from 'react'
import Logo from '../../components/Logo/Logo'
import AuthBox from './AuthBox';
import AuthHeader from './AuthHeader';
import AuthForm from './AuthForm';
import AuthInput from './AuthInput';
import { useSubmit } from '../../hooks/useSubmit.js';
import { useAuthInputChange } from '../../hooks/useAuthInputChange.js';
import { FaUserCircle } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { useShowPassword } from '../../utils/useShowPassword.js';

const Login = () => {
  const [user,setUser] = useState({
    username: '',
    password: ''
  })
  const [showPassword,setShowPassword] = useState(false)
  // handle login custom hook
  const {handleLogin} = useSubmit(user);
  // handle input change custom hook
  const {handleChange} = useAuthInputChange(setUser);
  
  // handle show password
  const {handleShowPassword} = useShowPassword({showPass: showPassword, setShowPass: setShowPassword})
 
  return (
    <AuthBox>
      <Logo  />
      <AuthHeader text="Login to Your Account" tColor="--primary-color" />
      <AuthForm onSubmit={handleLogin} bText="Login" bColor="(--primary-color)" authType="Login">
        {/* Username input */}
        <AuthInput label="Username" type="text" id="username" placeholder="Enter your username" value={user.username} isRequired={true} handleChange={handleChange} name="username" Icon={FaUserCircle}/>
        {/* Password input */}
        <AuthInput label="Password" type={showPassword?"text":"password"} id="password" placeholder="Enter your password" value={user.password} isRequired={true} handleChange={handleChange} name="password" Icon={showPassword ? FaEye : FaEyeLowVision } handleShowPassword={handleShowPassword}/>

      </AuthForm>
    </AuthBox>
  )
}

export default Login