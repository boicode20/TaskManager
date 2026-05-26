import {Admin} from '../schema/admin.js'
import {Member} from '../schema/member.js'
import {SuperAdmin} from '../schema/superAdmin.js'
import { generateAccessToken } from '../utils/generateAccessToken.js';
import { generateCookie } from '../utils/generateCookie.js';
import { comparePassword, hashPassword } from '../utils/hashPassword.js';

export const updateUserFullname = async (req, res) => {
    const {fullname} = req.body
    const userId = req.user._id
    if(fullname==='') return res.status(400).json({message: 'Fullname is required'})
    try{
        const [member,admin,superAdmin] = await Promise.all([
            Member.findOne({_id: userId}).select("-password"),
            Admin.findOne({_id: userId}).select("-password"),
            SuperAdmin.findOne({_id: userId}).select("-password")
        ])
        const userUpdated = member || admin || superAdmin
        if(!userUpdated) return res.status(404).json({message: 'User not found'})
        userUpdated.name = fullname
        await userUpdated.save()
        const token = generateAccessToken(userUpdated)
        console.log(userUpdated)
        generateCookie(res, token)
        return res.status(200).json({message: 'Fullname updated successfully', user: userUpdated})
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Server error'})
    }
}

export const updateUserPassword = async (req, res) => {

    const {newPassword,oldPassword} = req.body
    const userId = req.user._id

    if(newPassword==="") return res.status(400).json({message: 'New password is required'})
    try{
        const [member,admin,superAdmin] = await Promise.all([
             Member.findOne({_id: userId}),
            Admin.findOne({_id: userId}),
            SuperAdmin.findOne({_id: userId})
        ])
        const userUpdated = member || admin || superAdmin
        if(!userUpdated) return res.status(404).json({message: 'User not found'})
        // hash the newPass and compare
        const isMatch = comparePassword(oldPassword, userUpdated.password)
        if(!isMatch) return res.status(400).json({message: 'Old password is incorrect'})
        const hashedPassword = await hashPassword(newPassword)
        userUpdated.password = hashedPassword
        await userUpdated.save()
      
        return res.status(200).json({message: 'Password updated successfully'})

    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal Server Error", error:err})
    }
}