import React, { useEffect, useState } from 'react'
import { FaEye, FaUserCircle } from 'react-icons/fa';
import CustomInput from '../../Input/CustomInput';
import { MdOutlineEmail } from 'react-icons/md';
import { FaEyeLowVision } from 'react-icons/fa6';
import api from '../../../api/api.js';
import { showToast } from '../../../utils/toastify.js';
const EditForm = ({editUser,setEditUser,setOriginalUser,setShowEditModal,originalUser,user}) => {
  const [showPassword,setShowPassword] = useState(false)
  const [btnDisabled,setBtnDisabled] = useState(false)
  const [newPassword,setNewPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const currentUser = originalUser.find((a) => a._id === editUser._id)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  
  const handleUpdatedUserChange = (e) => {
    const {name,value} = e.target
    setEditUser(prev => ({...prev,[name]: value}))
  }
  const handlePasswordChange = (e)=>{
    setNewPassword(e.target.value)
  }
  const handleSubmitUpdate = async(e) =>{
    console.log("hello")
    e.preventDefault()
    setLoading(true)
    try{
      
      const response = await api.put('/edit-user',{
        user: user,
        _id:editUser._id,
        name:editUser.name,
        email:editUser.email,
        username:editUser.username,
        password:newPassword,
        status:editUser.status
      })
      setOriginalUser(prev => prev.map(user => user._id === editUser._id ? {...user,...editUser} : user))
      showToast("success",response.data.message||"User account successfuly edited.")
      setLoading(false)
    }catch(err){
      console.log(err)
      showToast("error","Update user account error.")
      setLoading(false)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    if(editUser.name === currentUser.name && editUser.email === currentUser.email && editUser.username === currentUser.username && editUser.status === currentUser.status && newPassword === ''){
      setBtnDisabled(true)
    }else{
      setBtnDisabled(false)
    }
  },[editUser,setEditUser,originalUser,newPassword])
  return (
    <form className="edit-form flex flex-col gap-2 mt-4 text-[#4c4b4b]" onSubmit={handleSubmitUpdate}>
        <CustomInput label="Name" type="text" id="name" placeholder="Enter your username" value={editUser.name} isRequired={false}  name="name" Icon={FaUserCircle} disabled={false} handleChange={handleUpdatedUserChange}/>
        <CustomInput label="Email" type="email" id="email" placeholder="Enter your email" value={editUser.email} isRequired={false}  name="email" Icon={MdOutlineEmail} disabled={false} handleChange={handleUpdatedUserChange}/>
        <CustomInput label="Username" type="text" id="username" placeholder="Enter your username" value={editUser.username} isRequired={false}  name="username" Icon={FaUserCircle} disabled={false} handleChange={handleUpdatedUserChange}/>
            {/* Password input */}
        <CustomInput label="Enter New Password" type={showPassword ? "text" : "password"} id="password" placeholder="Enter new password"  isRequired={false} value={newPassword} name="password" Icon={showPassword ? FaEye : FaEyeLowVision} handleShowPassword={handleShowPassword} handleChange={handlePasswordChange}/> 
        {/* Select for Disable Admin account */}
        <div className="flex flex-col gap-2">
          <label htmlFor="disableAdmin" className="text-sm text-gray-600">Manage Account</label>
          <select id="disableAdmin" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none " name="status" value={editUser.status} 
             
             onChange={handleUpdatedUserChange
            }
             >       
            <option value="Active">Set to active</option>
            <option value="Inactive">Set to inactive</option>
            <option value="Disabled">Set to disabled</option>
          </select>
        </div>
        <div className="form-buttons flex items-center flex-nowrap gap-4 mt-3">
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded cursor-pointer" type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
          <button className={`bg-(--primary-color) text-white px-4  rounded ${btnDisabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'} py-2`} type="submit" disabled={btnDisabled || loading}>{loading?"Saving Changes...":"Save Changes"}</button>
        </div>
    </form>
  )
}

export default EditForm