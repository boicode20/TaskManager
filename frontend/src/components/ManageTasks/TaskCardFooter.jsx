import React from 'react'
import { MdOutlineCalendarToday } from 'react-icons/md'

const TaskCardFooter = ({ 
  startDate = 'May 20, 2026',
  dueDate = 'May 30, 2026'
}) => {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
      {/* Start Date - Left */}
      <div className="flex items-center gap-2">
        <MdOutlineCalendarToday size={14} className="text-gray-400" />
        <span>Start: {startDate}</span>
      </div>

      {/* Due Date - Right */}
      <div className="flex items-center gap-2">
        <MdOutlineCalendarToday size={14} className="text-gray-400" />
        <span>Due: {dueDate}</span>
      </div>
    </div>
  )
}

export default TaskCardFooter
