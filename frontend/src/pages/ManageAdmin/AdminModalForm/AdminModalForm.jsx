import React, { useState } from 'react'
import CustomInput from '../../../components/Input/CustomInput'
import { MdOutlineEmail } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import { FaEyeLowVision,FaEye } from "react-icons/fa6"
import api from '../../../api/api.js'
import { useInputChange } from '../../../hooks/useInputChange.js'
const AdminModalForm = () => {
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


  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  }


  const handleSubmit = async(e)=>{
    e.preventDefault()
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
      setFormData({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      })
      setError('')
    }catch(err){
      setError(err.response.data.message || "An error occurred while adding the admin.")
      console.log(err.response)
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
      <CustomInput label="Confirm Password" type="password" id="confirmPassword" placeholder="Confirm password" handleChange={handleChange} value={formData.confirmPassword} isRequired={true} name="confirmPassword"/>
      <button type="submit" className="mt-2 w-full py-2 bg-(--primary-color) text-white rounded-md" disabled={loading}>
        {loading ? 'Adding Admin...' : 'Add Admin'}
      </button>
    </form>
  )
}

export default AdminModalForm
