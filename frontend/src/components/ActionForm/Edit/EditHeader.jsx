import React from 'react'

const EditHeader = ({editUser}) => {
  return (
    <div className="mt-6 edit-header w-auto flex items-center justify-center">
        <div className="header">
            <img className="w-20 h-20 rounded-full" src={editUser?.avatar} alt={editUser?.name} />
        </div>
    </div>
  )
}

export default EditHeader