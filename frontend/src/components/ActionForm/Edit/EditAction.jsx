import React from 'react'
import EditHeader from './EditHeader';
import EditForm from './EditForm';

const EditAction = ({editAdmin,setEditAdmin,setOriginalAdmin,setShowEditModal,originalAdmin}) => {
  return (
    <div>
      <EditHeader editAdmin={editAdmin} />
      <EditForm editAdmin={editAdmin} setEditAdmin={setEditAdmin} setOriginalAdmin={setOriginalAdmin} setShowEditModal={setShowEditModal} originalAdmin={originalAdmin} />
    </div>
  )
}

export default EditAction