import React from 'react'
import AssignedTeamForm from './AssignedTeamForm'

const TaskTeamSelection = ({ formData, teamMembers, showTeamDropdown, setShowTeamDropdown, handleTeamMemberSelect }) => {
  return (
     <div className="flex flex-col w-full">
        <label className="text-sm text-gray-600 mb-2">Assign Team</label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowTeamDropdown(!showTeamDropdown)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
          >
            <span className="text-sm text-gray-700">
              {formData.assignedTeam.length > 0
                ? `${formData.assignedTeam.length} member(s) selected`
                : 'Select team members'}
            </span>
            <span className="text-gray-400">▼</span>
          </button>

          {/* Team Dropdown */}
          {showTeamDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-64 overflow-y-auto">
              {teamMembers.map((member) => {
                const isSelected = formData.assignedTeam.find(m => m._id === member._id)
                return (
                  <div
                    key={member._id}
                    onClick={() => handleTeamMemberSelect(member)}
                    className={`p-3 flex items-center gap-3 cursor-pointer transition-colors ${
                      isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <div className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-bold`}>
                      <img src={member.avatar} alt={member.name} />
                    </div>
                    <span className="text-sm text-gray-700">{member.name}</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Selected Team Members Display */}
        {formData.assignedTeam.length > 0 && (
         <AssignedTeamForm formData={formData} handleTeamMemberSelect={handleTeamMemberSelect} />
        )}
      </div>
  )
}

export default TaskTeamSelection
