import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    
    try{
        // Get token from cookies or Authorization header
        const authHeader = req.headers.authorization
        const token = req.cookies.token || (authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null)

        // checking token if exists or not
        if(!token){
            return res.status(401).json({ message: "Unauthorized: No token provided" })
        }
        
        // verifying token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = decoded
        next()

    }catch(err){
        console.error("Error in auth middleware:", err)
        return res.status(500).json({ message: "Internal server error" })
    }
}