import React, { useContext, useEffect, useState } from 'react'
import UserHeader from '../../components/ManageUser/UserHeader'
import { UserContext } from '../../provider/UserProvider'
import UserCard from '../../components/ManageUser/UserCard'
import Modal from '../../components/modal/Modal'
import EditAction from '../../components/ActionForm/Edit/EditAction'
import DeleteAction from '../../components/ActionForm/Delete/DeleteAction'

const ManageMember = () => {
  const [showEditModal, setShowEditModal] = useState(false) //Show Modal
  const {members,setMembers} = useContext(UserContext) //Original Copy
  const [memberList,setMemberList] = useState([]) //Copy for filtering and searching
  const [deleteUser,setDeleteUser] = useState(null)
  const [editSelectedUser,setEditSelectedUser] = useState(null)
  const [editMember,setEditMember] = useState(null) //Selected member for Edit
  const [showDeleteModal,setShowDeleteModal] = useState(false)

  useEffect(()=>{
    setMemberList(members) //Update the copy list whenever the original list changes
  },[members])
  console.log(deleteUser)
  return (
    <div className="w-full h-full max:h-auto p-6 relative">

      {
        showEditModal && (
          <Modal setShowModal={setShowEditModal} title={"Edit Member Account"} subTitle={"Update the details for the selected member account."} width={"w-auto"}>
            <EditAction editUser={editMember} setEditUser={setEditMember} setOriginalUser={setMembers} originalUser={members} setShowEditModal={setShowEditModal} user={"member"}/>
          </Modal>
        )
      }

      {
        showDeleteModal && (
          <Modal setShowModal={setShowDeleteModal} title={"Delete Member Account"} subTitle={"Are you sure you want to delete this member account?"}>
            <DeleteAction deleteUser={deleteUser} setShowDeleteModal={setShowDeleteModal} text={"Delete Member Account"} setOriginalUser={setMembers} setUsers={setMembers} user={"member"} type={"member"}/>
          </Modal>
        )
      }


      <UserHeader title={"Manage Member"} desc={"Manage member accounts."}  userType={"member"} originalUser={members} setCopyUserLists={setMemberList}/>
      <div className="member-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {
          memberList && memberList.length > 0 ? (
            memberList.map((member) => (
              <UserCard key={member._id} user={member} setShowEditModal={setShowEditModal} setEditSelectedUser={setEditMember} setShowDeleteModal={setShowDeleteModal} setDeleteUser={setDeleteUser}/>
            ))
          ) : (
            <p>No members found.</p>
          )
        }
      </div>
    </div>
  )
}

export default ManageMember