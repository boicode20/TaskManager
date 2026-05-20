import {Admin} from '../schema/admin.js'
import {SuperAdmin} from '../schema/superAdmin.js'
import { hashPassword } from '../utils/hashPassword.js';

export const editAdminAccount = async(req,res) => {
    const superAdminId= req.user._id
    const {_id,email,name,username,password,status} = req.body
    
    if(email===''||name===""||username===''||status==='') return res.status(400).json({message:"Email, username and status are required."})
    
    if(!superAdminId) return res.status(400).json({message: "Super Admin ID is required."})

    try{
        const admin =await Admin.findOne({_id:_id})
        if(!admin) return res.status(404).json({message:"Admin not found."})
        
        const hashPass =  await hashPassword(password)
        admin.email = email
        admin.name=name
        admin.username = username
        admin.password = password === ""? admin.password :  hashPass 
        admin.status = status
        await admin.save()
        res.status(200).json({message:"Admin account updated successfully.", admin})
        
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Server Internal Error", err})
    }


}