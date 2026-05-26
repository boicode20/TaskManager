import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa';
import { FaEyeLowVision, FaEye } from 'react-icons/fa6';
import CustomInput from '../../components/Input/CustomInput';
import PasswordStrengthBar from '../../components/Input/PasswordStrengthBar';
import { usePasswordStrength } from '../../hooks/usePasswordStrength';
import { useShowPassword } from '../../utils/useShowPassword';

const AccountPasswordForm = ({oldPassword,newPassword,confirmNewPassword,setOldPassword,setNewPassword,setConfirmNewPassword,errPass,setErrPass,handleChangePassword,passLoading,setPassLoading}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleShowPassword } = useShowPassword({ showPass: showPassword, setShowPass: setShowPassword });
  const { rules, strengthLabel, strengthColor, strengthWidth, isValid } = usePasswordStrength(newPassword);
  const isFormValid = !!oldPassword && isValid && newPassword === confirmNewPassword;
    console.log(errPass)
  return (
    <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <FaLock />
            </span>
            Change Password
          </div>
          {
            errPass && <p className="text-red-500 text-sm">{errPass}</p>
          }
          <form className="space-y-4" onSubmit={(e)=>{handleChangePassword(e,oldPassword,newPassword,confirmNewPassword,setPassLoading,setErrPass)}}> 
            <CustomInput
              label="Old Password"
              id="oldPassword"
              name="oldPassword"
              value={oldPassword}
              handleChange={(e)=>{setOldPassword(e.target.value)}}
              type="password"
              placeholder="Enter your old password"
            />
            <CustomInput
              label="New Password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              handleChange={(e)=>{setNewPassword(e.target.value)}}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your new password"
              Icon={showPassword ? FaEye : FaEyeLowVision}
              handleShowPassword={handleShowPassword}
            />
            {newPassword && (
              <PasswordStrengthBar
                rules={rules}
                strengthLabel={strengthLabel}
                strengthColor={strengthColor}
                strengthWidth={strengthWidth}
              />
            )}
            <CustomInput
              label="Confirm New Password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={confirmNewPassword}
              handleChange={(e)=>{setConfirmNewPassword(e.target.value)}}
              type="password"
              placeholder="Confirm your new password"
            />
            <button
              type="submit"
              className={`w-full rounded-md py-2 text-sm font-medium text-white transition-colors hover:opacity-90 ${(isFormValid && !passLoading) ? 'bg-(--primary-color)' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={!isFormValid || passLoading}
            >
              {
                passLoading ? 'Saving changes...' : 'Change password'
              }
            </button>
          </form>
        </div>
     )
}

export default AccountPasswordForm
