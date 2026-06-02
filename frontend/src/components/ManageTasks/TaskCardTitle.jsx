import React from 'react'

const TaskCardTitle = ({ taskId = 'TM-001', title = 'Design New Landing Page', status = 'In Progress' }) => {
  const statusConfig = {
    'To Do': { badge: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' },
    'In Progress': { badge: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-500' },
    'Done': { badge: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
    'Blocked': { badge: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' },
    'Review': { badge: 'bg-yellow-100', text: 'text-yellow-700', dot: 'bg-yellow-500' }
  }

  const currentStatus = statusConfig[status] || statusConfig['To Do']

  return (
    <div className="flex justify-between items-center mb-4 gap-3">
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-[#4c4b4b] truncate">{title}</h3>
      </div>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${currentStatus.badge} ${currentStatus.text}`}>
        <span className={`w-2 h-2 rounded-full ${currentStatus.dot}`}></span>
        {status}
      </div>
    </div>
  )
}

export default TaskCardTitle
