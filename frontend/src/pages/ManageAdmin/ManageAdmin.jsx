import React, { useState } from 'react'
import AdminHeader from './AdminHeadFilter/AdminHeader';
import AdminCards from './AdminCardLists/AdminCards';
import Modal from '../../components/modal/Modal';
import AdminModalForm from './AdminModalForm/AdminModalForm';

const ManageAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full max:h-auto p-6 relative">
      {
        showModal && (
          <Modal setShowModal={setShowModal} title={"New Admin Account"} subTitle={"Fill in the details to create a new admin account."}>
            <AdminModalForm/>
          </Modal>
        )
      }
      <AdminHeader/>
      <AdminCards/>
    </div>
  )
}

export default ManageAdmin
