import {Admin} from '../schema/admin.js'
import {Member} from '../schema/member.js'
import { hashPassword } from '../utils/hashPassword.js';

export const registerMember = async (req, res) => {
    const {fullname,email,username,password,adminCode} = req.body
    
    if(fullname==="" || email==="" || username==="" || password==="" || adminCode===""){
        return res.status(400).json({message:"All fields are required"})
    }
    try{
        const admin = await Admin.findOne({"adminCode.code":adminCode})
        if(!admin){
            return res.status(400).json({message:"Invalid admin code"})
        }
        const existingMember = await Member.findOne({$or:[{email}, {username}]})
        if(existingMember){
            return res.status(400).json({message:"Email or username already exists"})
        }
        const hashPass = await hashPassword(password)
        const newMember = await Member.create({
            name: fullname,
            email,
            username,
            password: hashPass,
            parentAdmin: admin._id,
            adminCode: admin.adminCode.code
        })
        return res.status(201).json({message:"Member registered successfully", member: newMember})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Server error"})
    }
}
