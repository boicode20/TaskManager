export const userData = async(req,res) =>{
    try{
        const user = req.user
        res.status(200).json(user)
    }catch(err){
        console.error("Error fetching user data:", err)
        res.status(500).json({ message: "Internal server error" })
    }
}