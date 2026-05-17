import React from 'react'
import CustomInput from '../../../components/Input/CustomInput';
import { MdOutlineEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaEyeLowVision,FaEye } from "react-icons/fa6";
const AdminModalForm = () => {
  return (
    <form className="admin-modal-form flex flex-col gap-2">
      <CustomInput label="Full Name" type="text" id="fullName" placeholder="Enter full name" handleChange={()=>{}} value={""} isRequired={true} name="fullName"/>
      <CustomInput label="Email" type="email" id="email" placeholder="Enter email address" handleChange={()=>{}} value={""} isRequired={true} name="email" Icon={MdOutlineEmail}/>
      <CustomInput label="Username" type="text" id="username" placeholder="Enter username" handleChange={()=>{}} value={""} isRequired={true} name="username" Icon={FaUserCircle}/>
      <CustomInput label="Password" type="password" id="password" placeholder="Enter password" handleChange={()=>{}} value={""} isRequired={true} name="password" Icon={FaEyeLowVision}/>
      <CustomInput label="Confirm Password" type="password" id="confirmPassword" placeholder="Confirm password" handleChange={()=>{}} value={""} isRequired={true} name="confirmPassword"/>
      <button type="submit" className="mt-2 w-full py-2 bg-(--primary-color) text-white rounded-md">
        Add Admin
      </button>
    </form>
  )
}

export default AdminModalForm
