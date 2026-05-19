import React, { useContext, useState } from 'react'
import AdminHeader from './AdminHeadFilter/AdminHeader';
import AdminCards from './AdminCardLists/AdminCards';
import Modal from '../../components/modal/Modal';
import AdminModalForm from './AdminModalForm/AdminModalForm';
import { UserContext } from '../../provider/UserProvider';

const ManageAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const {admins,setAdmins} = useContext(UserContext)
  const [adminList,setAdminList] = useState(admins)
  console.log("render")
  return (
    <div className="w-full h-full max:h-auto p-6 relative">
      {
        showModal && (
          <Modal setShowModal={setShowModal} title={"New Admin Account"} subTitle={"Fill in the details to create a new admin account."}>
            <AdminModalForm/>
          </Modal>
        )
      }
      <AdminHeader setShowModal={setShowModal}/>
      <AdminCards adminList={adminList} setAdminLists={setAdminList}/>
    </div>
  )
}

export default ManageAdmin
