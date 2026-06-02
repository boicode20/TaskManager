import React from 'react'

const TaskCardBody = ({ 
  description = 'Create a modern and responsive landing page design with Figma. Include hero section, features, and CTA buttons.',
  members = [
    { id: 1, name: 'Alex Johnson', avatar: 'AJ', color: 'bg-blue-500' },
    { id: 2, name: 'Sarah Chen', avatar: 'SC', color: 'bg-purple-500' },
    { id: 3, name: 'Mike Brown', avatar: 'MB', color: 'bg-pink-500' }
  ],
  moreCount = 0
}) => {
  const displayMembers = members.slice(0, 3)
  const totalMore = moreCount > 0 ? moreCount : Math.max(0, members.length - 3)

  return (
    <div className="mb-4">
      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{description}</p>

      {/* Assigned Team - Center */}
      <div className="mb-4 text-center">
        <p className="text-xs font-medium text-gray-600 mb-2">Assigned Team</p>
        <div className="flex justify-center">
          <div className="flex -space-x-2">
          {displayMembers.map((member) => (
            <div
              key={member.id}
              className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-bold border-2 border-white hover:z-10 transition-transform hover:scale-110 cursor-pointer`}
              title={member.name}
            >
              {member.avatar}
            </div>
          ))}
          {totalMore > 0 && (
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-xs font-bold border-2 border-white hover:bg-gray-400 transition-colors cursor-pointer" title={`+${totalMore} more`}>
              +{totalMore}
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCardBody
