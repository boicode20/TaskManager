import React, { memo } from 'react'
import AdminCardHeader from '../AdminHeadFilter/AdminCardHeader';
import AdminCardLists from './AdminCardLists';

const AdminCards = ({adminList,setAdminList,setShowEditModal,setEditAdmin}) => {
  return (
    <div className="admin-table mt-8 pb-30">
      <AdminCardHeader adminList={adminList} setAdminList={setAdminList}/>
      <AdminCardLists adminList={adminList} setShowEditModal={setShowEditModal} setEditAdmin={setEditAdmin}/>
    </div>
  )
}
  
export default memo(AdminCards)
