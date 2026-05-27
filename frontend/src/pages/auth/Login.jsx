import React, { useContext, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import AuthBox from './AuthBox';
import AuthHeader from './AuthHeader';
import AuthForm from './AuthForm';
import { useInputChange } from '../../hooks/useInputChange.js';
import { FaUserCircle } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { useShowPassword } from '../../utils/useShowPassword.js';
import api from '../../api/api.js';
import { UserContext } from '../../provider/UserProvider.jsx';
import CustomInput from '../../components/Input/CustomInput.jsx';

const Login = () => {
  const {user,setUser} = useContext(UserContext)
  const [formData,setFormData] = useState({
    username: '',
    password: ''
  })
  const [resResult,setResResult] = useState({result: "", error: null,message:""})
  const [loading,setLoading] = useState(false)
  const [showPassword,setShowPassword] = useState(false)

  // handle input change custom hook
  const {handleChange} = useInputChange(setFormData)
  
  // handle show password
  const {handleShowPassword} = useShowPassword({showPass: showPassword, setShowPass: setShowPassword})

  const userLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        setResResult({result: "", error: null, message: ""})
        try{
          const response = await api.post('/login', formData)
          // console.log(response.data)
          setUser(response.data.user)
          window.location.href = '/dashboard'
        }catch(err){
          setResResult({result: "error", error: err.response.data.message, message: err.response.data.message || "Login failed"})
          setLoading(false)
          console.log(err.response)
        }finally{
          setLoading(false)

        }
    }



  return (
    <AuthBox>
      <Logo  />
      <AuthHeader text="Login to Your Account" tColor="--primary-color" />
       {
              resResult.message && (
                <div className={`p-2 rounded-md text-sm mb-2 ${resResult.result === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {resResult.message}
                </div>
              )
            }
      <AuthForm onSubmit={userLogin} bText={loading?"Logging in...":"Login"} bColor="(--primary-color)" authType="Login" loading={loading}>
        {/* Username input */}
        <CustomInput label="Username" type="text" id="username" placeholder="Enter your username" value={formData.username} isRequired={true} handleChange={handleChange} name="username" Icon={FaUserCircle}/>
        {/* Password input */}
        <CustomInput label="Password" type={showPassword?"text":"password"} id="password" placeholder="Enter your password" value={formData.password} isRequired={true} handleChange={handleChange} name="password" Icon={showPassword ? FaEye : FaEyeLowVision } handleShowPassword={handleShowPassword}/>

      </AuthForm>
    </AuthBox>
  )
}

export default Login