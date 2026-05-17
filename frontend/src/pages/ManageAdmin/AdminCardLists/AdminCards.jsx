import React from 'react'
import AdminCardHeader from '../AdminHeadFilter/AdminCardHeader';
import AdminCardLists from './AdminCardLists';

const AdminCards = () => {
  return (
    <div className="admin-table mt-8">
      <AdminCardHeader/>
      <AdminCardLists/>
    </div>
  )
}

export default AdminCards
