import React, { useState } from 'react'
import AuthBox from './AuthBox';
import Logo from '../../components/Logo/Logo';
import AuthHeader from './AuthHeader';
import AuthForm from './AuthForm';
import { useInputChange } from '../../hooks/useInputChange.js';
import { useSubmit } from '../../hooks/useSubmit.js';
import { MdOutlineEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaEyeLowVision,FaEye } from "react-icons/fa6";
import { useShowPassword } from '../../utils/useShowPassword.js';
import CustomInput from '../../components/Input/CustomInput.jsx';
import { usePasswordStrength } from '../../hooks/usePasswordStrength.js';
import PasswordStrengthBar from '../../components/Input/PasswordStrengthBar.jsx';
const Register = () => {
    const [user,setUser] = useState({
        fullname: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        code: ''
    })
    const [showPassword,setShowPassword] = useState(false)
    const [resResult,setResResult] = useState({result: "", result: null,message:""})
    const [loading,setLoading] = useState(false)
    // handle register custom hook
    const {handleRegister} = useSubmit(user,setLoading)
    // handle input change custom hook
    const {handleChange} = useInputChange(setUser)

    const {handleShowPassword} = useShowPassword({showPass: showPassword, setShowPass: setShowPassword})

    const passwordStrength = usePasswordStrength(user.password);
    const isFormComplete = Boolean(
      user.email && user.username && user.password && user.confirmPassword && user.code
    )
    const isPasswordMatch = user.password === user.confirmPassword;
    const isSubmitDisabled = !isFormComplete || !passwordStrength.isValid || !isPasswordMatch
  return (
    <AuthBox>
        <Logo  />
        <AuthHeader text="Registration for Member Account" tColor="--secondary-color" />
        <AuthForm onSubmit={(e)=>{handleRegister(e,setResResult,setUser)}} bText="Register" bColor="(--secondary-color)" authType="Register" isDisabled={isSubmitDisabled} >

            {
              resResult.message && (
                <div className={`p-2 rounded-md text-sm mb-2 ${resResult.result === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {resResult.message}
                </div>
              )
            }
            {/* Fullname input */}
            <CustomInput label="Fullname" type="text" id="fullname" placeholder="Enter your fullname" value={user.fullname} isRequired={true} handleChange={handleChange} name="fullname" Icon={FaUserCircle} />
            {/* Email input */}
            <CustomInput label="Email" type="email" id="email" placeholder="Enter your email" value={user.email} isRequired={true} handleChange={handleChange} name="email" Icon={MdOutlineEmail} />
            {/* Username input */}
            <CustomInput label="Username" type="text" id="username" placeholder="Enter your username" value={user.username} isRequired={true} handleChange={handleChange} name="username" Icon={FaUserCircle}/>
            {/* Password input */}
            <CustomInput label="Password" type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" value={user.password} isRequired={true} handleChange={handleChange} name="password" Icon={showPassword ? FaEye : FaEyeLowVision} handleShowPassword={handleShowPassword} /> 
            {user.password && (
              <PasswordStrengthBar
                rules={passwordStrength.rules}
                strengthLabel={passwordStrength.strengthLabel}
                strengthColor={passwordStrength.strengthColor}
                strengthWidth={passwordStrength.strengthWidth}
              />
            )}
            {/* Confirm Password input */}
            <CustomInput label="Confirm Password" type="password" id="confirmPassword" placeholder="Confirm your password" value={user.confirmPassword} isRequired={true} handleChange={handleChange} name="confirmPassword" />
            {/* Code input from admin */}
            <CustomInput label="Code" type="text" id="code" placeholder="Enter your code from admin" value={user.code} isRequired={true} handleChange={handleChange} name="code" />
        </AuthForm>
    </AuthBox>
  )
}

export default Register