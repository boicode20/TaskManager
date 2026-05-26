import React from 'react'
import { FaUserEdit } from 'react-icons/fa';
import CustomInput from '../../components/Input/CustomInput';

const AccountPersonalForm = ({handleChangeFullname,fullname,user,setUser,setLoading,handleError,disable,loading,handleChange}) => {
  return (
    <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <FaUserEdit />
            </span>
            Edit Profile
          </div>
          <form className="space-y-4" onSubmit={(event)=>{handleChangeFullname(event,fullname,setUser,setLoading,handleError)}}>
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
  )
}

export default AccountPersonalForm
