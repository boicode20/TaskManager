import{Schema, model} from 'mongoose'
import  {Tasks} from './tasks.js'
const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type:String,
        requred:true,
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
})


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