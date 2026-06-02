import React from 'react'
import CustomInput from '../Input/CustomInput';
import { IoSearch } from "react-icons/io5";

const TaskHead = ({setShowModal}) => {
  return (
    <div className="task-head flex items-start justify-between mb-2" >
        <div className="tasks-title text-gray-700">
            <h2 className="text-lg font-bold text-gray-700">Task List</h2>
            <p>Track and manage your all tasks in your team.</p>
        </div>
        <div className="tasks-filter flex items-center gap-1">
            <div className="search-">
                <CustomInput type="text" placeholder="Search tasks..." className="w-full border rounded"  Icon={IoSearch}/>
            </div>
            <div className="filter-options flex gap-2">
                <select className="border border-gray-200 rounded outline-none px-1 py-1 text-[.7rem] h-10 w-auto max:w-full">
                    <option value="">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="new-tasks">
               
                <button className="px-3 py-2 bg-(--primary-color) rounded-sm text-white text-[.9rem] cursor-pointer" 
                
                onClick={()=>{setShowModal(true)}}
                >+ Task</button>
         
            </div>
        </div>
        
    </div>
  )
}

export default TaskHead
