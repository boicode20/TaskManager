import React, { useEffect, useState } from 'react'
import { FaEye, FaUserCircle } from 'react-icons/fa';
import CustomInput from '../../Input/CustomInput';
import { MdOutlineEmail } from 'react-icons/md';
import { FaEyeLowVision } from 'react-icons/fa6';
import api from '../../../api/api.js';
import { showToast } from '../../../utils/toastify.js';
const EditForm = ({editAdmin,setEditAdmin,setOriginalAdmin,setShowEditModal,originalAdmin}) => {
  const [showPassword,setShowPassword] = useState(false)
  const [btnDisabled,setBtnDisabled] = useState(false)
  const [newPassword,setNewPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const currentAdmin = originalAdmin.find((a) => a._id === editAdmin._id)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  
  const handleUpdatedAdminChange = (e) => {
    const {name,value} = e.target
    setEditAdmin(prev => ({...prev,[name]: value}))
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
        user: 'admin',
        _id:editAdmin._id,
        name:editAdmin.name,
        email:editAdmin.email,
        username:editAdmin.username,
        password:newPassword,
        status:editAdmin.status
      })
      setOriginalAdmin(prev => prev.map(admin => admin._id === editAdmin._id ? {...admin,...editAdmin} : admin))
      showToast("success",response.data.message||"Admin account successfuly edited.")
      setLoading(false)
    }catch(err){
      console.log(err)
      showToast("error","Update admin account error.")
      setLoading(false)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    if(editAdmin.name === currentAdmin.name && editAdmin.email === currentAdmin.email && editAdmin.username === currentAdmin.username && editAdmin.status === currentAdmin.status && newPassword === ''){
      setBtnDisabled(true)
    }else{
      setBtnDisabled(false)
    }
  },[editAdmin,setEditAdmin,originalAdmin,newPassword])
  return (
    <form className="edit-form flex flex-col gap-2 mt-4 text-[#4c4b4b]" onSubmit={handleSubmitUpdate}>
        <CustomInput label="Admin Name" type="text" id="name" placeholder="Enter your username" value={editAdmin.name} isRequired={false}  name="name" Icon={FaUserCircle} disabled={false} handleChange={handleUpdatedAdminChange}/>
        <CustomInput label="Admin Email" type="email" id="email" placeholder="Enter your email" value={editAdmin.email} isRequired={false}  name="email" Icon={MdOutlineEmail} disabled={false} handleChange={handleUpdatedAdminChange}/>
        <CustomInput label="Admin Username" type="text" id="username" placeholder="Enter your username" value={editAdmin.username} isRequired={false}  name="username" Icon={FaUserCircle} disabled={false} handleChange={handleUpdatedAdminChange}/>
            {/* Password input */}
        <CustomInput label="Enter New Admin Password" type={showPassword ? "text" : "password"} id="password" placeholder="Enter admin password"  isRequired={false} value={newPassword} name="password" Icon={showPassword ? FaEye : FaEyeLowVision} handleShowPassword={handleShowPassword} handleChange={handlePasswordChange}/> 
        {/* Select for Disable Admin account */}
        <div className="flex flex-col gap-2">
          <label htmlFor="disableAdmin" className="text-sm text-gray-600">Disable Admin Account</label>
          <select id="disableAdmin" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none " name="status" value={editAdmin.status} 
             
             onChange={handleUpdatedAdminChange
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