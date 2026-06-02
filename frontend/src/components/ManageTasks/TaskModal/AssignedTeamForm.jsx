import React from 'react'

const AssignedTeamForm = ({formData,handleTeamMemberSelect}) => {
  return (
     <div className="mt-2 max-h-32 overflow-y-auto flex flex-wrap gap-2 pr-2">
            {formData.assignedTeam.map((member) => (
              <div
                key={member.id}
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1"
              >
                <div className={`w-6 h-6 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {member.avatar}
                </div>
                <span className="text-xs text-gray-700">{member.name}</span>
                <button
                  type="button"
                  onClick={() => handleTeamMemberSelect(member)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
  )
}

export default AssignedTeamForm