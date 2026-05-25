import {Admin} from '../schema/admin.js'
import {Member} from '../schema/member.js'
import {SuperAdmin} from '../schema/superAdmin.js'
import { generateAccessToken } from '../utils/generateAccessToken.js';
import { generateCookie } from '../utils/generateCookie.js';

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
