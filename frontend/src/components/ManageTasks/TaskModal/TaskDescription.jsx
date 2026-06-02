import React from 'react'

const TaskDescription = ({ formData, handleChange }) => {
  return (
    <div className="flex flex-col w-full">
        <label htmlFor="taskDescription" className="text-sm text-gray-600">Description</label>
        <textarea
          id="taskDescription"
          name="description"
          placeholder="Enter task description"
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-300 rounded-md py-2 px-3 outline-none w-full text-[#4c4b4b] min-h-[100px] resize-none"
        />
      </div>
  )
}

export default TaskDescription