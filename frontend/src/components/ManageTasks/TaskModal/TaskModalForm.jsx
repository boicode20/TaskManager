import React, { useState } from 'react'
import CustomInput from '../../Input/CustomInput'
import AssignedTeamForm from './AssignedTeamForm'
import TaskTeamSelection from './TaskTeamSelection'
import TaskDescription from './TaskDescription'
import { useEffect } from 'react'
import api from '../../../api/api.js'
import { showToast } from '../../../utils/toastify.js'
const TaskModalForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignedTeam: [],
    dueDate: ''
  })
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  const [btnDisabled,setBtnDisabled] = useState(false)

  // Available team members
  const teamMembers = [
    { _id: 1, name: 'Alex Johnson', avatar: 'AJ', color: 'bg-blue-500' },
    { _id: 2, name: 'Sarah Chen', avatar: 'SC', color: 'bg-purple-500' },
    { _id: 3, name: 'Mike Brown', avatar: 'MB', color: 'bg-pink-500' },
    { _id: 4, name: 'Emma Davis', avatar: 'ED', color: 'bg-green-500' },
    { _id: 5, name: 'John Smith', avatar: 'JS', color: 'bg-orange-500' },
    { _id: 6, name: 'Alex Johnson', avatar: 'AJ', color: 'bg-blue-500' },
    { _id: 7, name: 'Sarah Chen', avatar: 'SC', color: 'bg-purple-500' },
    { _id: 8, name: 'Mike Brown', avatar: 'MB', color: 'bg-pink-500' },
    { _id: 9, name: 'Emma Davis', avatar: 'ED', color: 'bg-green-500' },
    { _id: 10, name: 'John Smith', avatar: 'JS', color: 'bg-orange-500' },
    { _id: 11, name: 'Alex Johnson', avatar: 'AJ', color: 'bg-blue-500' },
    { _id: 12, name: 'Sarah Chen', avatar: 'SC', color: 'bg-purple-500' },
    { _id: 13, name: 'Mike Brown', avatar: 'MB', color: 'bg-pink-500' },
    { _id: 14, name: 'Emma Davis', avatar: 'ED', color: 'bg-green-500' },
    { _id: 15, name: 'John Smith', avatar: 'JS', color: 'bg-orange-500' },
  ]

  const [showTeamDropdown, setShowTeamDropdown] = useState(false)

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Validate due date is not in the past
    if (name === 'dueDate') {
      const selectedDate = new Date(value)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today && value !== '') {
        setError('Due date cannot be in the past')
        return
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleTeamMemberSelect = (member) => {
    setFormData(prev => {
      const isSelected = prev.assignedTeam.find(m => m._id === member._id)
      if (isSelected) {
        return {
          ...prev,
          assignedTeam: prev.assignedTeam.filter(m => m._id !== member._id)
        }
      } else {
        return {
          ...prev,
          assignedTeam: [...prev.assignedTeam, member]
        }
      }
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    if(formData.title.trim() === '' || formData.description.trim() === '' || formData.assignedTeam.length === 0 || formData.dueDate === ''){
      setError('Please fill in all required fields')
      return
    }
    setLoading(true)
    setError('')
    
    try{
      const res = await api.post('/create-task',{
        title: formData.title,
        description: formData.description,
        assignedTo: formData.assignedTeam.map(member => member._id),
        dueDate: formData.dueDate
      })
      console.log(res.data)
      showToast("success", res.data.message||'Task created successfully')
      setLoading(false)
      setError('')
      setFormData({
        title: '',
        description: '',
        assignedTeam: [],
        dueDate: ''
      })
    }catch(err){
      console.log(err.response)
      setError(err.response?.data?.message || 'An error occurred while creating the task')
      setLoading(false)
    }finally{
      setLoading(false)
    }

  }



  useEffect(()=>{
    if(formData.title.trim() !== '' && formData.description.trim() !== '' && formData.assignedTeam.length > 0 && formData.dueDate !== ''){
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }
  }, [formData])
  return (
    <form onSubmit={handleSubmit} className="task-modal-form mt-6 space-y-4">
      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-3 py-2 rounded-md">
          {error}
        </div>
      )}

      {/* Title Input */}
      <CustomInput
        label="Task Title"
        type="text"
        id="taskTitle"
        name="title"
        placeholder="Enter task title"
        value={formData.title}
        handleChange={handleChange}
        isRequired={true}
      />

      {/* Description Input */}
      <TaskDescription formData={formData} handleChange={handleChange} />

      {/* Team Selection */}
     <TaskTeamSelection
        formData={formData}
        teamMembers={teamMembers}
        showTeamDropdown={showTeamDropdown}
        setShowTeamDropdown={setShowTeamDropdown}
        handleTeamMemberSelect={handleTeamMemberSelect}
      />

      {/* Due Date Input */}
      <CustomInput
        label="Due Date"
        type="date"
        id="dueDate"
        name="dueDate"
        value={formData.dueDate}
        handleChange={handleChange}
        isRequired={true}
      />

      {/* Submit Button */}
      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className={`px-4 py-2 rounded-md text-white ${btnDisabled || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} transition-colors w-full`}
          disabled={btnDisabled || loading}
        >
         {
          loading ? 'Creating...' : 'Create Task'
         }
        </button>
      </div>
    </form>
  )
}

export default TaskModalForm