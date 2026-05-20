import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from './AdminHeadFilter/AdminHeader';
import AdminCards from './AdminCardLists/AdminCards';
import Modal from '../../components/modal/Modal';
import AdminModalForm from './AdminModalForm/AdminModalForm';
import { UserContext } from '../../provider/UserProvider';
import EditAction from '../../components/ActionForm/Edit/EditAction';

const ManageAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const {admins,setAdmins} = useContext(UserContext)
  const [adminList,setAdminList] = useState(admins)
  const [showEditModal,setShowEditModal] = useState(false)
  const [editAdmin,setEditAdmin] = useState(null)
  
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
          <Modal setShowModal={setShowEditModal} title={"Edit Admin Account"} subTitle={"Update the details for the selected admin account."}>
            <EditAction editAdmin={editAdmin} setEditAdmin={setEditAdmin} setOriginalAdmin={setAdmins} originalAdmin={admins} setShowEditModal={setShowEditModal}/>
          </Modal>
        )
      }
      <AdminHeader setShowModal={setShowModal} setAdminList={setAdminList}/>
      <AdminCards adminList={adminList} setAdminList={setAdminList} setShowEditModal={setShowEditModal} setEditAdmin={setEditAdmin}/>
    </div>
  )
}

export default ManageAdmin
