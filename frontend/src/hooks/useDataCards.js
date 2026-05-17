
import { LuNotebookText } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineFactCheck } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { TbCalendarDue } from "react-icons/tb";


const useDataCards = (role,data) => {
    const dataCardsByRole = {
        'Super Admin': [
            {id:1,data: 2, label: 'Total Admin', Icon: RiAdminLine,bgColor: '#457fc0'}, 
            {id:2,data: 10, label: 'Total Member', Icon: FaUsers,bgColor: '#f97316'}, 
            {id:3,data: 5, label: 'Total Task', Icon: LuNotebookText,bgColor: '#25A18E'},
            {id:4,data: 3, label: 'Completed Task', Icon: MdOutlineFactCheck,bgColor: '#77D56F'}, 
            {id:5,data: 1, label: 'Pending Task', Icon: MdPendingActions,bgColor: '#DCC470'}, 
            {id:6,data: 1, label: 'In Progress Task', Icon: GrInProgress,bgColor: '#B65ED6'},
            {
            id:7,data: 3, label: 'Over Due Task', Icon: TbCalendarDue,bgColor: '#E74C3C'             
            }],
        'Admin': [
            {id:1,data: 10, label: 'Total Member', Icon: FaUsers,bgColor: '#f97316'}, 
            {id:2,data: 5, label: 'Total Task', Icon: LuNotebookText,bgColor: '#25A18E'},
            {id:3,data: 3, label: 'Completed Task', Icon: MdOutlineFactCheck,bgColor: '#77D56F'}, 
            {id:4,data: 1, label: 'Pending Task', Icon: MdPendingActions,bgColor: '#DCC470'}, 
            {id:5,data: 1, label: 'In Progress Task', Icon: GrInProgress,bgColor: '#B65ED6'},
            {id:6,data: 4, label: 'Over Due Task', Icon: TbCalendarDue,bgColor: '#E74C3C'}
            ],
        'Member': [
            {id:1, data: 5, label: 'Total Task', Icon: LuNotebookText,bgColor: '#25A18E'},
            {id:2, data: 3, label: 'Completed Task', Icon: MdOutlineFactCheck,bgColor: '#77D56F'}, 
            {id:3,data: 1, label: 'Pending Task', Icon: MdPendingActions,bgColor: '#DCC470'}, 
            {id:4,data: 1, label:'In Progress Task', Icon: GrInProgress,bgColor: '#B65ED6'},
            {id:5,data: 2, label: 'Over Due Task', Icon: TbCalendarDue,bgColor: '#E74C3C'}
            ],
    }
    return dataCardsByRole[role] || [];
}

export default useDataCards;

