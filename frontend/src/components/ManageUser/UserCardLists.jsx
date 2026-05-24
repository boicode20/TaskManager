import React from 'react'
import UserCard from './UserCard';

const UserCardLists = ({userLists,setShowEditModal,setShowDeleteModal,setEditSelectedUser, setDeleteUser}) => {
  return (
    <div className="admin-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        userLists && userLists.length > 0 ? (
          userLists.map((user) => (
            <UserCard key={user._id} user={user} setShowEditModal={setShowEditModal} setEditSelectedUser={setEditSelectedUser} setShowDeleteModal={setShowDeleteModal} setDeleteUser={setDeleteUser}/>
          ))):(<p>No users found.</p>)
      }
      
    </div>
  )
}

export default UserCardLists