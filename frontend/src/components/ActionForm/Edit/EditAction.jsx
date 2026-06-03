import React from 'react'
import EditHeader from './EditHeader';
import EditForm from './EditForm';

const EditAction = ({editUser,setEditUser,setOriginalUser,setShowEditModal,originalUser,user}) => {
  return (
    <div>
      <EditHeader editUser={editUser} />
      <EditForm editUser={editUser} setEditUser={setEditUser} setOriginalUser={setOriginalUser} setShowEditModal={setShowEditModal} originalUser={originalUser} user={user} />
    </div>
  )
}

export default EditAction