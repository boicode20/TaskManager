import React from 'react'

const TaskCount = ({count}) => {
  return (
    <div className="task-count text-sm text-gray-500 mb-2">
        <h1>{count === 0 ? "0 Task" : `${count} Tasks`}</h1>
    </div>
  )
}

export default TaskCount
