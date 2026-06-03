import {Admin} from '../schema/admin.js'
import {SuperAdmin} from '../schema/superAdmin.js'
import {Member} from '../schema/member.js'
import bcrypt from 'bcryptjs'
import { generateAccessToken } from '../utils/generateAccessToken.js';
import { generateCookie } from '../utils/generateCookie.js';

export const login = async (req, res) => {
    const {username,password} = req.body
    if(username===''||password==='') return res.status(400).json({message: "Username and password are required" });
    
    try{
        let user = null
        // Check in SuperAdmin collection
        user = await SuperAdmin.findOne({ username: username }).populate({
                path:"admins",
                select:"-password"
            })

        if(!user) {
            // Check in Admin collection
            user = await Admin.findOne({ username: username }).populate({
                path:"members",
                select:"-password"
            })
        }
        if(!user) {
            // Check in Member collection
            user = await Member.findOne({ username: username })
        }

        if(!user){
            return res.status(404).json({message: "Username not found" });
        }

        // Checking password 
        const isPasswordValid = bcrypt.compareSync(password, user.password)
        if(!isPasswordValid){
            return res.status(401).json({message: "Incorrect password" });
        }

        // Generate JWT token
        const token = generateAccessToken(user)
        // Cookies
        generateCookie(res,token)

       
        return res.status(200).json({message:"Login successful", user:{
            _id:user._id,
            name:user.name,
            username:user.username,
            email:user.email,
            role:user.role,
            avatar:user.avatar,
            verified:user.verified
        }})

    }catch(err){
        console.log(err)
        return res.status(500).json({message: "Internal server error" , error:err});
    }
}

