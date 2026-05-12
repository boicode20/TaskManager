import React, { useState } from 'react'
import AuthBox from './AuthBox';
import Logo from '../../components/Logo/Logo';
import AuthHeader from './AuthHeader';
import AuthForm from './AuthForm';
import AuthInput from './AuthInput';
import { useAuthInputChange } from '../../hooks/useAuthInputChange.js';
import { useSubmit } from '../../hooks/useSubmit.js';
import { MdOutlineEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaEyeLowVision,FaEye } from "react-icons/fa6";
import { useShowPassword } from '../../utils/useShowPassword.js';
const Register = () => {
    const [user,setUser] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        code: ''
    })
    const [showPassword,setShowPassword] = useState(false)
      // handle register custom hook
    const {handleRegister} = useSubmit(user);
    // handle input change custom hook
    const {handleChange} = useAuthInputChange(setUser);

    const {handleShowPassword} = useShowPassword({showPass: showPassword, setShowPass: setShowPassword})

  return (
    <AuthBox>
        <Logo  />
        <AuthHeader text="Register for an Account" tColor="--secondary-color" />
        <AuthForm onSubmit={handleRegister} bText="Register" bColor="(--secondary-color)" authType="Register">
            {/* Email input */}
            <AuthInput label="Email" type="email" id="email" placeholder="Enter your email" value={user.email} isRequired={true} handleChange={handleChange} name="email" Icon={MdOutlineEmail} />
            {/* Username input */}
            <AuthInput label="Username" type="text" id="username" placeholder="Enter your username" value={user.username} isRequired={true} handleChange={handleChange} name="username" Icon={FaUserCircle}/>
            {/* Password input */}
            <AuthInput label="Password" type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" value={user.password} isRequired={true} handleChange={handleChange} name="password" Icon={showPassword ? FaEye : FaEyeLowVision} handleShowPassword={handleShowPassword} /> 
            {/* Confirm Password input */}
            <AuthInput label="Confirm Password" type="password" id="confirmPassword" placeholder="Confirm your password" value={user.confirmPassword} isRequired={true} handleChange={handleChange} name="confirmPassword" />
            {/* Code input from admin */}
            <AuthInput label="Code" type="text" id="code" placeholder="Enter your code from admin" value={user.code} isRequired={true} handleChange={handleChange} name="code" />
        </AuthForm>
    </AuthBox>
  )
}

export default Register