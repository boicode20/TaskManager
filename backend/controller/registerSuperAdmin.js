import {SuperAdmin} from '../schema/superAdmin.js'
import { hashPassword } from '../utils/hashPassword.js';

export const registerSuperAdmin = async(req,res) =>{
    const {name,username,email,password} = req.body
    if(name===''||username===''||email===''||password==='') return res.status(400).json({message: "All fields are required" })
    
    try{
        const existingSuperAdmin = await SuperAdmin.findOne({$or: [
            { username },
            { email }
        ]
        })
    
        if(existingSuperAdmin) return res.status(400).json({message:"Username or email already used."})

        const hashPass = await hashPassword(password)
        const newSuperAdmin = await SuperAdmin.create({
            name,
            username,
            email,
            password: hashPass
        })
        return res.status(200).json({message:"New super admin created.", superAdmin:newSuperAdmin})
    }catch(err){
        console.log(err)
        return res.status(500).json({message: "Internal server error" })
    }
}