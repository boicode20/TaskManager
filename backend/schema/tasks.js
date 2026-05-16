import {Schema,model} from 'mongoose'

const taskSchema = new Schema({
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tasks:[
        {
            title:{
                type: String,
                required: true
            },
            assignedTo:{
                type: Schema.Types.ObjectId,
                ref: 'Member',
                required: true
            },
            status:{
                type: String,
                enum:["Pending", "In Progress", "Completed"],
                default: 'Pending'
            }
        }
    
    ],
    status:{
                type: String,
                enum:["Pending", "In Progress", "Completed"],
                default: 'Pending'
    },
    dueDate:{
        type: Date,
        required: true
    },


},{timestamps: true})

export const TaskSchema = model("Task", taskSchema)