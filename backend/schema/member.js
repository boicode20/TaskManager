import{Schema, model} from 'mongoose'

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
    parentUser:{
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

export const Member = model("Member",memberSchema)