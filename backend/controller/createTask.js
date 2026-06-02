import {Member} from '../schema/member.js'
import {Tasks} from '../schema/tasks.js'
import {Admin} from '../schema/admin.js'

export const createTask = async (req, res) => {
    const {title, description, assignedTo, dueDate} = req.body
    const adminId = req.user._id

    if(title==='' || description === '' || assignedTo.length === 0 || !dueDate){
        return res.status(400).json({message: 'Please fill in all required fields'})
    }   
    try {
        // Check if the admin exists
        const admin = await Admin.findById(adminId).select('-password')
        if (!admin) {
            return res.status(404).json({message: 'Admin not found'})
        }
        // Check if the assigned members exist
        const members = await Member.find({_id: {$in: assignedTo}})
        if (members.length !== assignedTo.length) {
            return res.status(404).json({message: 'One or more assigned members not found'})
        }

        // Create the task
        await Tasks.create({
            createdBy: admin._id,
            title,
            description,
            assignedTo,
            dueDate
        })
        return res.status(201).json({message: 'Task created successfully'})
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: 'Server error'})
    }
}