import React, { useContext, useState } from 'react'
import TaskHead from '../../components/ManageTasks/TaskHead';
import Greetings from '../../components/Greetings/Greetings';
import TaskCount from '../../components/ManageTasks/TaskCount';
import TaskLists from '../../components/ManageTasks/TaskLists';
import Modal from '../../components/modal/Modal';
import TaskModalForm from '../../components/ManageTasks/TaskModal/TaskModalForm';
import { UserContext } from '../../provider/UserProvider';

const Tasks = () => {
  const [showModal,setShowModal] = useState(false)
  const {members,tasks,setTasks,user} = useContext(UserContext)
  console.log(tasks)
  return (
    <div className="tasks p-4">
      {
        showModal&&(
          <Modal setShowModal={setShowModal} title={"Create New Task"} subTitle={"Fill in the details to create a new task."} width={"w-100"}>
   
            <TaskModalForm members={members}/>
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
