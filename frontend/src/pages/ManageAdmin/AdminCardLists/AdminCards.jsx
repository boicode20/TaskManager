import React, { memo } from 'react'
import UserCardHeader from '../../../components/ManageUser/UserCardHeader';
import UserCardLists from '../../../components/ManageUser/UserCardLists';

const AdminCards = ({adminList,setAdminList,setShowEditModal,setEditAdmin,setShowDeleteModal,setDeleteAdmin}) => {

  return (
    <div className="admin-table mt-8 pb-30">
      {/* <UserCardHeader originalUser={admins} setCopyUserLists={setAdminList}/> */}
      <UserCardLists userLists={adminList} setShowEditModal={setShowEditModal} setEditSelectedUser={setEditAdmin} setShowDeleteModal={setShowDeleteModal} setDeleteUser={setDeleteAdmin}/>
    </div>
  )
}
  
export default memo(AdminCards)
