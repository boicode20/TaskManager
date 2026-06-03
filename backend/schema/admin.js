import {Schema, model} from 'mongoose'
import {Member} from './member.js'
import  {Tasks} from './tasks.js'

const adminSchema = new Schema({
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


// Pre delete, if admin delete all members  and all tasks to that admin will also deleted
adminSchema.pre("findOneAndDelete", async function(){
   try{
    const admin = await this.model.findOne(this.getFilter())
    if(admin){
        await Member.deleteMany({parentAdmin:admin._id})
        await Tasks.deleteMany({createdBy:admin._id})
    }
   }catch(err){
        console.log(err)
   }
})


// Virtual setup to get all tasks under the admin
adminSchema.virtual("tasks",{
    ref: "Task",
    localField: "_id",
    foreignField:"createdBy"
})


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
