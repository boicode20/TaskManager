import React, { useEffect, useState } from 'react';
import CustomInput from '../../components/Input/CustomInput';
import { FaUserEdit, FaLock } from 'react-icons/fa';
import { useError } from '../../hooks/useError';
import api from '../../api/api.js'
import { showToast } from '../../utils/toastify.js';
import { handleChangeFullname,handleChangePassword } from '../../utils/changeAccountSettings.js';
import AccountPersonalForm from './AccountPersonalForm.jsx';
import AccountPasswordForm from './AccountPasswordForm.jsx';

const AccountSettingsForm = ({ user,setUser }) => {
  const [loading,setLoading] = useState(false)
  const [passLoading,setPassLoading] = useState(false)
  const {error,handleError}  = useError(null)
  const [errPass,setErrPass] = useState(null)
  const [oldPassword,setOldPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [confirmNewPassword,setConfirmNewPassword] = useState('')
  const [fullname,setFullname] = useState(user.name)
  const [disable,setDisable] = useState(true)
  const handleChange = (e) =>{
    const {value} = e.target
    setFullname(value)
  }


  useEffect(()=>{
    setDisable(fullname === user.name)
  },[fullname, user.name])
  console.log(errPass)
  return (
    <div className="rounded-2xl  bg-white p-5 shadow-md">
      <div className="grid gap-8">
        <AccountPersonalForm
          handleChangeFullname={handleChangeFullname}
          fullname={fullname}
          user={user}
          setUser={setUser}
          setLoading={setLoading}
          handleError={handleError}
          disable={disable}
          loading={loading}
          handleChange={handleChange}
        />

        <AccountPasswordForm
          oldPassword={oldPassword}
          newPassword={newPassword}
          confirmNewPassword={confirmNewPassword}
          setOldPassword={setOldPassword}
          setNewPassword={setNewPassword}
          setConfirmNewPassword={setConfirmNewPassword}
          errPass={errPass}
          setErrPass={setErrPass}
          handleChangePassword={handleChangePassword}
          setPassLoading={setPassLoading}
          passLoading={passLoading}
        />
      </div>
    </div>
  );
};

export default AccountSettingsForm;
