
import { MdOutlineDashboard } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { LuNotebookText } from "react-icons/lu";
export const menuItemsByRole = {
    'Super Admin': [
      { id: 'dashboard', label: 'Dashboard', icon: MdOutlineDashboard, path: '/dashboard' },
      { id: 'manage-admin', label: 'Manage Admin', icon: RiAdminLine, path: '/manage-admin' },
      { id: 'manage-member', label: 'Manage Member', icon: FaUsers, path: '/manage-member' },
      { id: 'settings', label: 'Account Settings', icon: CiSettings, path: '/settings' },
      { id: 'logout', label: 'Logout', icon: CiLogout, path: '/logout' },
    ],
    'Admin': [
      { id: 'dashboard', label: 'Dashboard', icon: MdOutlineDashboard, path: '/dashboard' },
      { id: 'task', label: 'Task', icon: LuNotebookText, path: '/task' },
      { id: 'manage-team', label: 'Manage Team', icon: FaUsers, path: '/manage-team' },
      { id: 'settings', label: 'Account Settings', icon: CiSettings, path: '/settings' },
      { id: 'logout', label: 'Logout', icon: CiLogout, path: '/logout' },
    ],
    'Member': [
      { id: 'dashboard', label: 'Dashboard', icon: MdOutlineDashboard, path: '/dashboard' },
      { id: 'task', label: 'Task', icon: LuNotebookText, path: '/task' },
      { id: 'settings', label: 'Account Settings', icon: CiSettings, path: '/settings' },
      { id: 'logout', label: 'Logout', icon: CiLogout, path: '/logout' },
    ],
  };