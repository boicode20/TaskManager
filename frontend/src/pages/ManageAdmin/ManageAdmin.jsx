import React, { useContext, useEffect, useState } from 'react'

import AdminCards from './AdminCardLists/AdminCards';
import Modal from '../../components/modal/Modal';
import AdminModalForm from './AdminModalForm/AdminModalForm';
import { UserContext } from '../../provider/UserProvider';
import EditAction from '../../components/ActionForm/Edit/EditAction';
import DeleteAction from '../../components/ActionForm/Delete/DeleteAction';
import UserHeader from '../../components/ManageUser/UserHeader';

const ManageAdmin = () => {
  const [showModal, setShowModal] = useState(false) //Show Modal
  const {admins,setAdmins} = useContext(UserContext) //Original Copy
  const [adminList,setAdminList] = useState([]) //Copy for filtering and searching
  const [showEditModal,setShowEditModal] = useState(false) //Edit Modal
  const [editAdmin,setEditAdmin] = useState(null) //Selected Admin for Edit
  const [showDeleteModal,setShowDeleteModal] = useState(false) //Delete Modal
  const [deleteAdmin,setDeleteAdmin] = useState(null) //Selected Admin for Delete
  useEffect(()=>{
    setAdminList(admins) //Update the copy list whenever the original list changes
  },[admins])
  return (
    <div className="w-full h-full max:h-auto p-6 relative ">
      {
        showModal && (
          <Modal setShowModal={setShowModal} title={"New Admin Account"} subTitle={"Fill in the details to create a new admin account."}>
            <AdminModalForm/>
          </Modal>
        )
      }
      {
        showEditModal && (
          <Modal setShowModal={setShowEditModal} title={"Edit Admin Account"} subTitle={"Update the details for the selected admin account."} width={"w-auto"}>
            <EditAction editUser={editAdmin} setEditUser={setEditAdmin} setOriginalUser={setAdmins} originalUser={admins} setShowEditModal={setShowEditModal} user={"admin"}/>
            
          </Modal>
        )
      }
      {
        showDeleteModal && (
          <Modal setShowModal={setShowDeleteModal} title={"Delete Admin Account"} subTitle={"Are you sure you want to delete this admin account?"}>
            <DeleteAction deleteUser={deleteAdmin} setShowDeleteModal={setShowDeleteModal} text={"Delete Admin Account"} setOriginalAdmin={setAdmins} setUsers={setAdmins} type={"admin"}/>
          </Modal>
        )
      }
      <UserHeader title={"Manage Admin"} desc={"Manage administrator accounts."} setShowModal={setShowModal} userType={"admin"} originalUser={admins} setCopyUserLists={setAdminList}/>
      <AdminCards adminList={adminList} setAdminList={setAdminList} setShowEditModal={setShowEditModal} setEditAdmin={setEditAdmin} setShowDeleteModal={setShowDeleteModal} setDeleteAdmin={setDeleteAdmin} />
    </div>
  )
}

export default ManageAdmin
