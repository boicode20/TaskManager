import {Schema, model} from 'mongoose'

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        default: 'Admin'
    },
    avatar:{
        type: String,
        default: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    },
    adminCode:{
        code:{
            type: String,
            required: true
        },
        createdBy:{
            type: Schema.Types.ObjectId,
            ref: 'SuperAdmin',
            required: true
        }
    },
    verified:{
        type: Boolean,
        default: false
    }
})

export const Admin = model("Admin", adminSchema)
