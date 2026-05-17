import React, { useContext, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import AuthBox from './AuthBox';
import AuthHeader from './AuthHeader';
import AuthForm from './AuthForm';
import AuthInput from './AuthInput';
import { useAuthInputChange } from '../../hooks/useAuthInputChange.js';
import { FaUserCircle } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { useShowPassword } from '../../utils/useShowPassword.js';
import api from '../../api/api.js';
import { UserContext } from '../../provider/UserProvider.jsx';

const Login = () => {
  const {user,setUser} = useContext(UserContext)
  const [formData,setFormData] = useState({
    username: '',
    password: ''
  })
  const [loading,setLoading] = useState(false)
  const [showPassword,setShowPassword] = useState(false)

  // handle input change custom hook
  const {handleChange} = useAuthInputChange(setFormData)
  
  // handle show password
  const {handleShowPassword} = useShowPassword({showPass: showPassword, setShowPass: setShowPassword})

  const userLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        try{
          const response = await api.post('/login', formData)
          // console.log(response.data) 
          setUser(response.data.user)
        }catch(err){
          console.log(err.response)
          setLoading(false)
        }finally{
          setLoading(false)

        }
    }



  return (
    <AuthBox>
      <Logo  />
      <AuthHeader text="Login to Your Account" tColor="--primary-color" />
      <AuthForm onSubmit={userLogin} bText={loading?"Logging in...":"Login"} bColor="(--primary-color)" authType="Login" loading={loading}>
        {/* Username input */}
        <AuthInput label="Username" type="text" id="username" placeholder="Enter your username" value={formData.username} isRequired={true} handleChange={handleChange} name="username" Icon={FaUserCircle}/>
        {/* Password input */}
        <AuthInput label="Password" type={showPassword?"text":"password"} id="password" placeholder="Enter your password" value={formData.password} isRequired={true} handleChange={handleChange} name="password" Icon={showPassword ? FaEye : FaEyeLowVision } handleShowPassword={handleShowPassword}/>

      </AuthForm>
    </AuthBox>
  )
}

export default Login