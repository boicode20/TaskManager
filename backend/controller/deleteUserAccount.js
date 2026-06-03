import {Admin} from '../schema/admin.js'
import {SuperAdmin} from '../schema/superAdmin.js'
import {Member} from '../schema/member.js'
import {Tasks} from '../schema/tasks.js'

export const deleteUserAccount = async(req,res) => {
    const authUserId= req.user._id
    const {userId,type} = req.params
    console.log(userId,type)

    if(type===''||userId==='') return res.status(400).json({message:"User ID and user type are required."})

    if(!authUserId) return res.status(400).json({message: "Authorized user is required."})

    try{
          const [AD,SA] = await Promise.all([
            Admin.findOne({_id:authUserId}),
            SuperAdmin.findOne({_id:authUserId})
          ])

          const authorizedUser = AD || SA
          if(!authorizedUser) return res.status(403).json({message:"Unauthorized. Only Super Admin Or Admin can delete user accounts."})


        if(type==='admin'){
            
            const admin =await Admin.findOneAndDelete({_id:userId,"adminCode.createdBy":SA._id})

            if(!admin) return res.status(404).json({message:"Admin not found."})

            const updatedMembers = await Member.find()
            
            return res.status(200).json({message:"Admin account deleted.",members:updatedMembers})


        }else if(type==='member'){
         
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