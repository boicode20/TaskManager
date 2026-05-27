import{Schema, model} from 'mongoose'
import  {Tasks} from './tasks.js'
const memberSchema = new Schema({
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
        default: 'Member'
    },
    avatar:{
        type: String,
        default: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    },
    parentAdmin:{
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    adminCode: {
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        default: false
    }
},{timestamps:true})


memberSchema.pre("findOneAndDelete", async function(){
    try{
        const member = await this.model.findOne(this.getFilter())
        if(member){
            await Tasks.updateMany({"tasks.assignedTo":member._id},{$pull:{tasks:{assignedTo:member._id}}})
        }
        
    }catch(err){
        console.log(err)
    }
})

export const Member = model("Member",memberSchema)