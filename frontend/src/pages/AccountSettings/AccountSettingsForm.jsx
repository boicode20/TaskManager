import React, { useEffect, useState } from 'react';
import CustomInput from '../../components/Input/CustomInput';
import { FaUserEdit, FaLock } from 'react-icons/fa';
import { useError } from '../../hooks/useError';
import api from '../../api/api.js'
import { showToast } from '../../utils/toastify.js';

const AccountSettingsForm = ({ user,setUser }) => {
  const [loading,setLoading] = useState(false)
  const {error,handleError}  = useError()
  const [fullname,setFullname] = useState(user.name)
  const [disable,setDisable] = useState(true)
  const handleChange = (e) =>{
    const {value} = e.target
    setFullname(value)
  }

  const handleChangeFullname = async (e) => {
    e.preventDefault()
    if(fullname==='') return handleError('Fullname is required')
    setLoading(true)
      try{
        const res = await api.put('/account-settings/change-name', {fullname})
        showToast('success',res.data.message||"Fullname updated successfully")
        setUser(prev=>({...prev, name: fullname}))
        console.log(res)
      }catch(err){
        handleError(err.response?.data?.message || 'An error occurred')
      }finally{
        setLoading(false)
        handleError(null)
      }
  }

  const handleChangePassword = (e) =>{
    e.preventDefault()
  }

  useEffect(()=>{
    setDisable(fullname === user.name)
  },[fullname, user.name])
  return (
    <div className="rounded-2xl  bg-white p-5 shadow-md">
      <div className="grid gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <FaUserEdit />
            </span>
            Edit Profile
          </div>
          <form className="space-y-4" onSubmit={handleChangeFullname}>
            <CustomInput
              label="Full Name"
              id="fullName"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={fullname}
              handleChange={handleChange}
            />
            <CustomInput
              label="Username"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={user.username}
              disabled={true}
            />
            <CustomInput
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={user.email}
              disabled={true}
            />
            <button
              type="submit"
              className={`w-full rounded-md py-2 text-sm font-medium text-white transition-colors hover:opacity-90 ${disable || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-(--primary-color)'}`}
              
              disabled={disable || loading}
            >
              {
                loading ? 'Saving changes...' : 'Save Changes'
              }
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <FaLock />
            </span>
            Change Password
          </div>
          <form className="space-y-4">
            <CustomInput
              label="Old Password"
              id="oldPassword"
              type="password"
              placeholder="Enter your old password"
            />
            <CustomInput
              label="New Password"
              id="newPassword"
              type="password"
              placeholder="Enter your new password"
            />
            <CustomInput
              label="Confirm New Password"
              id="confirmNewPassword"
              type="password"
              placeholder="Confirm your new password"
            />
            <button
              type="submit"
              className="w-full rounded-md py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsForm;
