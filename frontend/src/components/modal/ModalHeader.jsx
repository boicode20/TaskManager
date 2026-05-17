import React from 'react'

const ModalHeader = ({ title,subTitle }) => {
  return (
    <div className="modal-header mb-4">
        <h2 className="text-xl font-bold  text-(--primary-color)">{title}</h2>
        <p className="text-gray-600 text-[.9rem]">{subTitle}</p>

    </div>
  )
}

export default ModalHeader
