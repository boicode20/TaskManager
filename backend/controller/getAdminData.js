import {Admin} from '../schema/admin.js'
import {SuperAdmin} from '../schema/superAdmin.js'

export const getAdminData = async(req,res) => {
    const {_id} = req.user

    if(!_id) return res.status(400).json({message: "Super Admin ID is required."})
    
    try{
        const superAdmin = await SuperAdmin.findOne({_id})
        if(!superAdmin) return res.status(404).json({message:"Unauthorized access."})
        const admins = await Admin.find({"adminCode.createdBy":_id}).select("-password")
        return res.status(200).json({admins})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error",error:error})
    }

}