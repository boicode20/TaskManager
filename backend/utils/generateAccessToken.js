import jwt from 'jsonwebtoken'

export const generateAccessToken = (user) =>{
    return jwt.sign(
        // User payload 
        {
            _id: user._id,
            role: user.role
        },
        // User secret key
        process.env.JWT_SECRET_KEY,
        // Token expires in 3 days
        {
            expiresIn: '3d'
        }
    )
}