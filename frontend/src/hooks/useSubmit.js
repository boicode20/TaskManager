import { useState } from "react";
import { useFetchUserData } from "./useFetchUserData.js";
import api from "../api/api.js";
import { showToast } from "../utils/toastify.js";

export const useSubmit = (user,setLoading) =>{
    const {error,userLogin} = useFetchUserData(user,setLoading)
    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            await userLogin()
        }catch(err){
            console.log(err)
        }
    }
    const handleRegister = async(e,setResResult,setUser) => {
        e.preventDefault();
        setLoading(true)
        setResResult({message: '', result: null})
        try{
            const newMember = await api.post('/member/add',{
                fullname: user.fullname,
                email: user.email,
                username: user.username,
                password: user.password,
                adminCode: user.code
            })
            setResResult({result:"success", message: newMember.data.message || "Registration successful", error: null})
            setUser({
                fullname: '',
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
                code: ''
            })
        setLoading(false)
        }catch(err){
            console.log(err.response.data.message)
            setResResult({result:"error", message: err.response.data.message || "Registration failed", error: err.response.data.message || "Registration failed"})
        setLoading(false)
        }finally{
        setLoading(false)
        }
    }


    return {handleLogin, handleRegister}    

}