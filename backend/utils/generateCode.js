import {AdminSchema} from '../schema/admin.js' 
import crypto from 'crypto'


export const newUniqueCode = async () =>{
    let code
    let exists = true

    while (exists) {
    code = generateCode()

    exists = await AdminSchema.findOne({ "adminCode.code":code })
    
    }

    return code
}




const generateCode = () => {
    const length = 10
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    const bytes = crypto.randomBytes(length)

    for (let i = 0; i < length; i++) {
        result += chars[bytes[i] % chars.length]
    }

    return result
}