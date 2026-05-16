import {Schema, model} from 'mongoose'

const notificationSchema = new Schema({
    senderId: [
        {
            type: Schema.Types.ObjectId,
            required: true      
        }
    ],
    receiverId: [
        {
            type: Schema.Types.ObjectId,
            required: true      
        }
    ],
    notifType:{
        type: String,
        enum: ["Task Update", "New Task", "New Member", "General Announcement"],
        required: true
    }
},{timestamps: true})

export const Notification = model("Notification", notificationSchema)
