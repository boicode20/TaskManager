import api from "../api/api.js";
import { showToast } from "./toastify.js";

export const handleChangeFullname = async (e,fullname,setUser,setLoading,handleError) => {
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
      }
  }

export const handleChangePassword = async (e,oldPassword,newPassword,confirmNewPassword,setLoading,setErrPass) => {
    e.preventDefault()
    setErrPass(null)
    if(oldPassword==='') return setErrPass('Old password is required')
    if(newPassword==="") return setErrPass('New password is required')
    if(confirmNewPassword==="") return setErrPass('Please confirm your new password')
    if(newPassword !== confirmNewPassword) return setErrPass('New passwords do not match')
    setLoading(true)
      try{
        const res = await api.put('/account-settings/change-password', {oldPassword, newPassword})
        showToast('success',res.data.message||"Password updated successfully")
        setLoading(false)
        console.log(res)
      }catch(err){
        setErrPass(err.response.data?.message||'An error occurred while changing password')
        console.log(err.response.data?.message)
      }finally{
        setLoading(false)
      }
  }