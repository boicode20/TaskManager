import {Admin} from '../schema/admin.js'
import {SuperAdmin} from '../schema/superAdmin.js'
import {Member} from '../schema/member.js'
import {Tasks} from '../schema/tasks.js'

export const userData = async(req,res) =>{
    const user = req.user
    try{
        
        res.status(200).json({user})
    }catch(err){
        console.error("Error fetching user data:", err)
        res.status(500).json({ message: "Internal server error" })
    }
}