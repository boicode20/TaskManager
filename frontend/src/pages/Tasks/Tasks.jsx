import React, { useState } from 'react'
import TaskHead from '../../components/ManageTasks/TaskHead';
import Greetings from '../../components/Greetings/Greetings';
import TaskCount from '../../components/ManageTasks/TaskCount';
import TaskLists from '../../components/ManageTasks/TaskLists';
import Modal from '../../components/modal/Modal';
import TaskModalForm from '../../components/ManageTasks/TaskModal/TaskModalForm';

const Tasks = () => {
  const [showModal,setShowModal] = useState(false)
  return (
    <div className="tasks p-4">
      {
        showModal&&(
          <Modal setShowModal={setShowModal} title={"Create New Task"} subTitle={"Fill in the details to create a new task."} width={"w-100"}>
   
            <TaskModalForm/>
          </Modal>
        )
      }
      <TaskHead setShowModal={setShowModal}/>
      <TaskCount count={0}/>
      <TaskLists/>
    </div>
  )
}

export default Tasks
