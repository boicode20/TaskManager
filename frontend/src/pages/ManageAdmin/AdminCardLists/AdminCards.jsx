import React from 'react'
import AdminCardHeader from '../AdminHeadFilter/AdminCardHeader';
import AdminCardLists from './AdminCardLists';

const AdminCards = ({adminList,setAdminLists}) => {
  return (
    <div className="admin-table mt-8">
      <AdminCardHeader setAdminLists={setAdminLists}/>
      <AdminCardLists adminList={adminList}/>
    </div>
  )
}

export default AdminCards
