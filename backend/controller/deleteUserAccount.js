import {Admin} from '../schema/admin.js'
import {SuperAdmin} from '../schema/superAdmin.js'
import {Member} from '../schema/member.js'
import {Tasks} from '../schema/tasks.js'

export const deleteUserAccount = async(req,res) => {
    const superAdminId= req.user._id
    const {userId,type} = req.params
    console.log(userId,type)
    if(type===''||userId==='') return res.status(400).json({message:"User ID and user type are required."})
    if(!superAdminId) return res.status(400).json({message: "Super Admin ID is required."})

    try{
        if(type==='admin'){
            
            const superAdmin = await SuperAdmin.findOne({_id:superAdminId})
            if(!superAdmin) return res.status(404).json({message:"Super Admin not found."})
            const admin =await Admin.findOneAndDelete({_id:userId,"adminCode.createdBy":superAdminId})
            if(!admin) return res.status(404).json({message:"Admin not found."})
            const updatedMembers = await Member.find()
            return res.status(200).json({message:"Admin account deleted.",members:updatedMembers})
        }else if(type==='member'){
            const superAdmin = await SuperAdmin.findOne({_id:superAdminId})
            if(!superAdmin) return res.status(404).json({message:"Super Admin not found."})
            const member =await Member.findOneAndDelete({_id:userId})
            if(!member) return res.status(404).json({message:"Member not found."})
            
            return res.status(200).json({message:"Member account deleted."})
        }else{
            return res.status(400).json({message:"Invalid user type."})
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal Server Error", err})
    }
}