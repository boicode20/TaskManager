import {Admin} from '../schema/admin.js'
import {SuperAdmin} from '../schema/superAdmin.js'
import { newUniqueCode } from '../utils/generateCode.js';
import { hashPassword } from '../utils/hashPassword.js';


export const registerAdmin = async(req,res) =>{
    const {name,username,email,password,adminCode} = req.body
    const superAdminID = req.user._id
    if(name===''||username===''||email===''||password===''||adminCode==='') return res.status(400).json({message: "All fields are required" })
    
    try{
        const superAdmin = await SuperAdmin.findOne({_id:superAdminID})
        if(!superAdmin) return res.status(404).json({message:"Unauthorized access."})


        const existingAdmin = await Admin.findOne({ username })
        if(existingAdmin) return res.status(400).json({message:"Username already used."})
        if(existingAdmin.email === email) return res.status(400).json({message:"Email already used."})
        if(existingAdmin.adminCode === adminCode) return res.status(400).json({message:"Admin code already used."})

        const hashPassword = await hashPassword(password)
        const aCode = await newUniqueCode()

        const newAdmin = await Admin.create({
            name,
            username,
            email,
            password: hashPassword,
            adminCode: {
                code:aCode,
                createdBy: superAdmin._id
            }
        })
        return res.status(200).json({message:"New admin created.", admin:newAdmin})
    }catch(err){
        console.log(err)
        return res.status(500).json({message: "Internal server error" })
    }
}