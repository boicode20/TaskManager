import React from 'react'
import Card from './Card';

const AdminCardLists = () => {
  return (
    <div className="admin-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default AdminCardLists
