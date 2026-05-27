import jwt from 'jsonwebtoken'

export const generateAccessToken = (user) =>{
    let payLoad = null
    if(user.role === "Super Admin"){
        payLoad = {
            _id: user._id,
            name: user.name,
            username: user.username,
            avatar: user.avatar,
            email: user.email,
            role: user.role,
            members: user.members,
            admins: user.admins
        }
    }
    else if(user.role === "Admin"){
        payLoad = {
             _id: user._id,
            name: user.name,
            username: user.username,
            avatar: user.avatar,
            email: user.email,
            role: user.role,
            adminCode: user.adminCode.code, 
            members: user.members 
        }
    }
    else if(user.role === "Member"){
        payLoad = {
            _id: user._id,
            name: user.name,
            username: user.username,
            avatar: user.avatar,
            email: user.email,
            role: user.role,
        }
    }
    else{
        return null
    }
    return jwt.sign(
        // User payload 
        payLoad,
        // User secret key
        process.env.JWT_SECRET_KEY,
        // Token expires in 3 days
        {
            expiresIn: '3d'
        }
    )
}