import React from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskCardBody from './TaskCardBody'
import TaskCardFooter from './TaskCardFooter'

const TasksCard = ({ 
  task = {
    id: 'TM-001',
    title: 'Design New Landing Page',
    description: 'Create a modern and responsive landing page design with Figma. Include hero section, features, and CTA buttons.',
    status: 'In Progress',
    priority: 'High',
    members: [
      { id: 1, name: 'Alex Johnson', avatar: 'AJ', color: 'bg-blue-500' },
      { id: 2, name: 'Sarah Chen', avatar: 'SC', color: 'bg-purple-500' },
      { id: 3, name: 'Mike Brown', avatar: 'MB', color: 'bg-pink-500' }
    ],
    startDate: 'May 20, 2026',
    dueDate: 'May 30, 2026',
    moreCount: 0
  }
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:border-gray-300 hover:-translate-y-1 cursor-pointer group">
      <TaskCardTitle taskId={task.id} title={task.title} status={task.status} />
      <TaskCardBody description={task.description} members={task.members} moreCount={task.moreCount} />
      <TaskCardFooter startDate={task.startDate} dueDate={task.dueDate} />
    </div>
  )
}

export default TasksCard
