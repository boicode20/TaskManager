
import { LuNotebookText } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineFactCheck } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";


const useDataCards = (role,data) => {
    const dataCardsByRole = {
        'Super Admin': [
            {id:1,data: 2, label: 'Total Admin', Icon: RiAdminLine}, 
            {id:2,data: 10, label: 'Total Member', Icon: FaUsers}, 
            {id:3,data: 5, label: 'Total Task', Icon: LuNotebookText},
            {id:4,data: 3, label: 'Completed Task', Icon: MdOutlineFactCheck}, 
            {id:5,data: 1, label: 'Pending Task', Icon: MdPendingActions}, 
            {id:6,data: 1, label: 'In Progress Task', Icon: GrInProgress}],
        'Admin': [
            {id:1,data: 10, label: 'Total Member', Icon: FaUsers}, 
            {id:2,data: 5, label: 'Total Task', Icon: LuNotebookText},
            {id:3,data: 3, label: 'Completed Task', Icon: MdOutlineFactCheck}, 
            {id:4,data: 1, label: 'Pending Task', Icon: MdPendingActions}, 
            {id:5,data: 1, label: 'In Progress Task', Icon: GrInProgress}],
        'Member': [
            {id:1, data: 5, label: 'Total Task', Icon: LuNotebookText},
            {id:2, data: 3, label: 'Completed Task', Icon: MdOutlineFactCheck}, 
            {id:3,data: 1, label: 'Pending Task', Icon: MdPendingActions}, 
            {id:4,data: 1, label:'In Progress Task', Icon: GrInProgress}],
    }
    return dataCardsByRole[role] || [];
}

export default useDataCards;

