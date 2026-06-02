import React from 'react'
import TasksCard from './TasksCard';

const TaskLists = () => {
  return (
    <div className="task-lists mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TasksCard/>
    </div>
  )
}

export default TaskLists
