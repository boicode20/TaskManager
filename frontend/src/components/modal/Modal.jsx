import React, { memo } from 'react'
import ModalHeader from './ModalHeader';
import { MdOutlineClose } from "react-icons/md";

const Modal = ({setShowModal, title, children, subTitle,}) => {
  return (
    <div className="modal fixed top-0 left-0 w-full h-full bg-[#f2f2f2a4]  flex justify-center items-center z-50">
      <div className="modal-content bg-white p-6 rounded-md shadow-2xl max-w:full w-140 relative">
        <div className="modal-close p-2 flex items-center justify-center absolute top-2 right-3 cursor-pointer" onClick={()=>setShowModal(false)}>
          <MdOutlineClose className="text-2xl text-gray-500"/>
        </div>
        <ModalHeader title={title} subTitle={subTitle} />
        {children}
      </div>
    </div>
  )
}

export default memo(Modal)
