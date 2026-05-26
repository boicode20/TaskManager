import React, { useContext, useState } from 'react'
import CustomInput from '../../../components/Input/CustomInput'
import PasswordStrengthBar from '../../../components/Input/PasswordStrengthBar'
import { MdOutlineEmail } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import { FaEyeLowVision,FaEye } from "react-icons/fa6"
import api from '../../../api/api.js'
import { useInputChange } from '../../../hooks/useInputChange.js'
import { usePasswordStrength } from '../../../hooks/usePasswordStrength'
import { showToast } from '../../../utils/toastify.js';
import { UserContext } from '../../../provider/UserProvider.jsx';
const AdminModalForm = () => {
  const {admins,setAdmins} = useContext(UserContext)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [error,setError] = useState('')

  const [loading,setLoading] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  // custom hook for handling input change
  const {handleChange} = useInputChange(setFormData)
  const { rules, strengthLabel, strengthColor, strengthWidth, isValid } = usePasswordStrength(formData.password)


  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  }


  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!isValid){
      setError('Password must be at least 8 characters, include 1 uppercase, a number, and a special character.')
      return
    }
    if(formData.password !== formData.confirmPassword){
      alert("Passwords do not match!")
      return
    }
    setLoading(true)
    setError('')
    try{
      const response = await api.post('/admin/add', {
        name: formData.fullName,
        email: formData.email,
        username: formData.username,
        password: formData.password
      })
      console.log(response.data)
      setAdmins(prevState => [...prevState, {...response.data.admin,members:0}])
      setFormData({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      })
      setError('')

      showToast("success","Admin account created.")
    }catch(err){
      console.log(err)
      setError(err?.response?.data?.message || "An error occurred while adding the admin.")
      console.log(err.response)
      showToast("error","Failed to create admin account.")

    }finally{
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="admin-modal-form flex flex-col gap-2">
      {
        error && <p className="text-red-500">{error}</p>
      }
      <CustomInput label="Full Name" type="text" id="fullName" placeholder="Enter full name" handleChange={handleChange} value={formData.fullName} isRequired={true} name="fullName"/>
      <CustomInput label="Email" type="email" id="email" placeholder="Enter email address" handleChange={handleChange} value={formData.email} isRequired={true} name="email" Icon={MdOutlineEmail}/>
      <CustomInput label="Username" type="text" id="username" placeholder="Enter username" handleChange={handleChange} value={formData.username} isRequired={true} name="username" Icon={FaUserCircle}/>
      <CustomInput label="Password" type={showPassword?"text":"password"} id="password" placeholder="Enter password" handleChange={handleChange} value={formData.password} isRequired={true} name="password" Icon={showPassword ? FaEye  : FaEyeLowVision} handleShowPassword={handleShowPassword}/>
      {formData.password && (
        <PasswordStrengthBar
          rules={rules}
          strengthLabel={strengthLabel}
          strengthColor={strengthColor}
          strengthWidth={strengthWidth}
        />
      )}
      <CustomInput label="Confirm Password" type="password" id="confirmPassword" placeholder="Confirm password" handleChange={handleChange} value={formData.confirmPassword} isRequired={true} name="confirmPassword"/>
      <button type="submit" className="mt-2 w-full py-2 bg-(--primary-color) text-white rounded-md disabled:cursor-not-allowed disabled:opacity-60" disabled={loading || !isValid}>
        {loading ? 'Adding Admin...' : 'Add Admin'}
      </button>
    </form>
  )
}

export default AdminModalForm
