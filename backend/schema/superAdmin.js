import {Schema, model} from 'mongoose'

const superAdminSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    username:{
        type:String,
        requred:true,
        unique:true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role:{
        type: String,
        default: 'Super Admin'
    },
    avatar:{
        type: String,
        default: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    },
    verified:{
        type: Boolean,
        default: false
    }
},{timestamps: true})


superAdminSchema.virtual("admins",{
    ref: "Admin",
    localField: "_id",
    foreignField:"adminCode.createdBy"
})



// set virtual to be included in json obj
superAdminSchema.set("toJSON",{
    virtuals: true
})
// set virtual to obj to return as json res
superAdminSchema.set("toObject",{
    virtuals: true
})


export const SuperAdmin = model("SuperAdmin", superAdminSchema)