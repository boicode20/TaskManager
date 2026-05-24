import React from 'react'
import UserCardHeading from './UserCardHeading';
import UserCardDetails from './UserCardDetails';
import UserCardFooter from './UserCardFooter';

const UserCard = ({user,setShowEditModal,setEditSelectedUser,setShowDeleteModal,setDeleteUser}) => {
  return (
     <div className="user-card bg-white rounded-lg shadow-md p-4 grid grid-cols-1 grid-rows-[auto_auto_auto] gap-3 items-start">
        <UserCardHeading user={user} />
        <UserCardDetails user={user} />
        <UserCardFooter user={user} setShowEditModal={setShowEditModal} setEditSelectedUser={setEditSelectedUser} setShowDeleteModal={setShowDeleteModal} setDeleteUser={setDeleteUser} />
    </div>
  )
}

export default UserCard