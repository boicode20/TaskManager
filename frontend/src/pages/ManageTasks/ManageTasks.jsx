import React, { useState } from 'react'
import TasksCard from '../components/ManageTasks/TasksCard'
import { MdOutlineSearch } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'

const ManageTasks = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Sample task data
  const allTasks = [
    {
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
      createdDate: 'May 25, 2026'
    },
    {
      id: 'TM-002',
      title: 'API Integration',
      description: 'Integrate payment gateway API with backend authentication and error handling.',
      status: 'To Do',
      priority: 'High',
      members: [
        { id: 4, name: 'John Doe', avatar: 'JD', color: 'bg-green-500' },
        { id: 5, name: 'Emma Wilson', avatar: 'EW', color: 'bg-orange-500' }
      ],
      createdDate: 'May 24, 2026'
    },
    {
      id: 'TM-003',
      title: 'Database Schema Optimization',
      description: 'Optimize existing database schema for better query performance and indexing.',
      status: 'Done',
      priority: 'Medium',
      members: [
        { id: 6, name: 'David Lee', avatar: 'DL', color: 'bg-indigo-500' },
        { id: 7, name: 'Lisa Park', avatar: 'LP', color: 'bg-rose-500' },
        { id: 8, name: 'Tom Harris', avatar: 'TH', color: 'bg-cyan-500' }
      ],
      createdDate: 'May 20, 2026'
    },
    {
      id: 'TM-004',
      title: 'Bug Fixes - Mobile Responsive',
      description: 'Fix CSS issues on mobile devices and ensure responsive design across all screen sizes.',
      status: 'Review',
      priority: 'Medium',
      members: [
        { id: 9, name: 'Rachel Green', avatar: 'RG', color: 'bg-amber-500' }
      ],
      createdDate: 'May 23, 2026'
    },
    {
      id: 'TM-005',
      title: 'User Authentication System',
      description: 'Implement JWT-based authentication system with refresh tokens and secure password hashing.',
      status: 'In Progress',
      priority: 'High',
      members: [
        { id: 10, name: 'Chris Martin', avatar: 'CM', color: 'bg-lime-500' },
        { id: 11, name: 'Nina Patel', avatar: 'NP', color: 'bg-violet-500' }
      ],
      createdDate: 'May 22, 2026'
    },
    {
      id: 'TM-006',
      title: 'Write Unit Tests',
      description: 'Write comprehensive unit tests for React components with 80% code coverage.',
      status: 'Blocked',
      priority: 'Low',
      members: [
        { id: 12, name: 'Kevin Zhang', avatar: 'KZ', color: 'bg-teal-500' }
      ],
      createdDate: 'May 19, 2026'
    },
    {
      id: 'TM-007',
      title: 'UI Component Library',
      description: 'Create reusable component library with Storybook documentation.',
      status: 'To Do',
      priority: 'Low',
      members: [
        { id: 13, name: 'Amy Rhodes', avatar: 'AR', color: 'bg-fuchsia-500' },
        { id: 14, name: 'Barry Scott', avatar: 'BS', color: 'bg-emerald-500' }
      ],
      createdDate: 'May 18, 2026'
    },
    {
      id: 'TM-008',
      title: 'Documentation Update',
      description: 'Update API documentation and create developer guide for third-party integrations.',
      status: 'In Progress',
      priority: 'Medium',
      members: [
        { id: 15, name: 'Claire Morgan', avatar: 'CM', color: 'bg-sky-500' }
      ],
      createdDate: 'May 21, 2026'
    }
  ]

  // Filter tasks based on search
  const filteredTasks = allTasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Pagination
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const endIdx = startIdx + itemsPerPage
  const paginatedTasks = filteredTasks.slice(startIdx, endIdx)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Task Manager</h1>
          <p className="text-gray-600">Manage and track your project tasks efficiently</p>
        </div>

        {/* Search & Create Button */}
        <div className="flex gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <MdOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search tasks by title, description, or ID..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Create Task Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
            <FiPlus size={20} />
            Create Task
          </button>
        </div>

        {/* Task Count */}
        <div className="mb-6 text-sm text-gray-600">
          Showing {paginatedTasks.length} of {filteredTasks.length} tasks
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedTasks.length > 0 ? (
            paginatedTasks.map(task => (
              <TasksCard key={task.id} task={task} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No tasks found matching your search</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredTasks.length > itemsPerPage && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ManageTasks
