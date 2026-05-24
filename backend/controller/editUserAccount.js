import {Admin} from '../schema/admin.js'
import {SuperAdmin} from '../schema/superAdmin.js'
import { hashPassword } from '../utils/hashPassword.js';
import {Member} from '../schema/member.js'

export const editUserAccount = async(req,res) => {
    const superAdminId= req.user._id
    const {_id,email,name,username,password,status,user} = req.body
    
    if(user===''||email===''||name===""||username===''||status==='') return res.status(400).json({message:"Email, username and status are required."})
    
    if(!superAdminId) return res.status(400).json({message: "Super Admin ID is required."})

    try{
        const hashPass =  await hashPassword(password)

        if(user==='admin'){

        const superAdmin = await SuperAdmin.findOne({_id:superAdminId})
        if(!superAdmin) return res.status(404).json({message:"Super Admin not found."})
        const admin =await Admin.findOne({_id:_id})
        if(!admin) return res.status(404).json({message:"Admin not found."})
        
        admin.email = email
        admin.name=name
        admin.username = username
        admin.password = password === ""? admin.password :  hashPass 
        admin.status = status
        await admin.save()
        return res.status(200).json({message:"Admin account updated successfully.", admin})
        }else if(user==='member'){
            const member = await Member.findOne({_id:_id})
            if(!member) return res.status(404).json({message:"Member not found."})
            member.name=name
            member.email = email
            member.username = username
            member.password = password === ""? member.password :  hashPass 
            member.status = status
            await member.save()
            return res.status(200).json({message:"Member account updated successfully.", member})
        }else{
            return res.status(400).json({message:"Invalid user type."})
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Server Internal Error", err})
    }


}