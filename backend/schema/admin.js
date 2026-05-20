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
    status:{
        type: String,
        enum: ['Active', 'Inactive', 'Disabled'],
        default: 'Active'
    }
    ,
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
},{timestamps: true})


// Virtual setup to get all members under the admin
adminSchema.virtual("members",{
    ref: "Member",
    localField: "_id",
    foreignField:"parentAdmin"
})

// set virtual to be included in json obj
adminSchema.set("toJSON",{
    virtuals: true
})
// set virtual to obj to return as json res
adminSchema.set("toObject",{
    virtuals: true
})


export const Admin = model("Admin", adminSchema)
