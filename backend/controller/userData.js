import {Admin} from '../schema/admin.js'
import {SuperAdmin} from '../schema/superAdmin.js'
import {Member} from '../schema/member.js'
export const userData = async(req,res) =>{
    const user = req.user
    try{
        if(user.role === "Super Admin"){
            const admins = await Admin.find({"adminCode.createdBy":user._id}).populate("members").select("-password")
            const members = await Member.find().select("-password")
            return res.status(200).json({user, admins, members})

        }
        if(user.role === "Admin"){
            const members = await Member.find({parentAdmin: user._id}).select("-password")
            return res.status(200).json({user, members})
        }


        res.status(200).json(user)
    }catch(err){
        console.error("Error fetching user data:", err)
        res.status(500).json({ message: "Internal server error" })
    }
}