import React from 'react'

const CardHead = () => {
  return (
     <div className="card-header grid grid-cols-[100px_1fr] place-items-center">
            <div className="card-header-image">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Admin Avatar" className="w-16 h-16 rounded-full mx-auto" />
            </div>
            <div className="card-name-email w-full flex flex-col">
                <h3 className="text-lg font-semibold text-[#4c4b4b]">John Doe</h3>
                <p className="text-sm text-gray-600">john.doe@example.com</p>
                <div className="card-role p-1 px-2 bg-[#3967caa1] w-15 text-white text-[.7rem] rounded-2xl flex items-center justify-center mt-1">
                    <p className="">Admin</p>
                </div>
            </div>
</div>
  )
}

export default CardHead
