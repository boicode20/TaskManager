import {Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './pages/auth/Login'
import AuthWrapper from './pages/auth/AuthWrapper';
import Register from './pages/auth/Register';
import SecuredRoutes from './secure/SecuredRoutes';
import Dashboard from './pages/dashboard/Dashboard';
import ManageAdmin from './pages/ManageAdmin/ManageAdmin';
import AccountSettings from './pages/AccountSettings/AccountSettings';
import Tasks from './pages/Tasks/Tasks';
import ManageMember from './pages/ManageMember/ManageMember';

function App() {

  return (
    <Routes>
      {/* Login and Register page */}
      <Route path="/" element={<AuthWrapper/>}>
        <Route path="" element={<Login/>} />
        <Route path="register" element={<Register/>} />
      </Route>

      {/* Secured Routes */}
      <Route path="/dashboard" element={<SecuredRoutes/>}>
        <Route path="" element={<Dashboard/>} />
        <Route path="manage-admin" element={<ManageAdmin/>} />
        <Route path="manage-team" element={<ManageMember/>} />
        <Route path="task" element={<Tasks/>} />

        <Route path="account-settings" element={<AccountSettings/>} />
      </Route>
    </Routes>
  )
}

export default App
