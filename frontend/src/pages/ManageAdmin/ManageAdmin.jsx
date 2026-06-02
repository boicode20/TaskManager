import React, { useContext, useEffect, useState } from 'react'

import AdminCards from './AdminCardLists/AdminCards';
import Modal from '../../components/modal/Modal';
import AdminModalForm from './AdminModalForm/AdminModalForm';
import { UserContext } from '../../provider/UserProvider';
import EditAction from '../../components/ActionForm/Edit/EditAction';
import DeleteAction from '../../components/ActionForm/Delete/DeleteAction';
import UserHeader from '../../components/ManageUser/UserHeader';

const ManageAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const {admins,setAdmins} = useContext(UserContext)
  const [adminList,setAdminList] = useState(admins)
  const [showEditModal,setShowEditModal] = useState(false)
  const [editAdmin,setEditAdmin] = useState(null)
  const [showDeleteModal,setShowDeleteModal] = useState(false)
  const [deleteAdmin,setDeleteAdmin] = useState(null)
  useEffect(()=>{
    setAdminList(admins)
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
            <EditAction editAdmin={editAdmin} setEditAdmin={setEditAdmin} setOriginalAdmin={setAdmins} originalAdmin={admins} setShowEditModal={setShowEditModal}/>
          </Modal>
        )
      }
      {
        showDeleteModal && (
          <Modal setShowModal={setShowDeleteModal} title={"Delete Admin Account"} subTitle={"Are you sure you want to delete this admin account?"}>
            <DeleteAction deleteUser={deleteAdmin} setShowDeleteModal={setShowDeleteModal} text={"Delete Admin Account"} setOriginalAdmin={setAdmins}/>
          </Modal>
        )
      }
      <UserHeader title={"Manage Admin"} desc={"Manage administrator accounts."} setShowModal={setShowModal} userType={"admin"}/>
      <AdminCards adminList={adminList} setAdminList={setAdminList} setShowEditModal={setShowEditModal} setEditAdmin={setEditAdmin} setShowDeleteModal={setShowDeleteModal} setDeleteAdmin={setDeleteAdmin} />
    </div>
  )
}

export default ManageAdmin
