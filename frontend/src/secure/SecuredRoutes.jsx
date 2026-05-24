import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { UserContext } from '../provider/UserProvider';
import Loader from '../components/Loader/Loader';
import { Bounce, ToastContainer } from 'react-toastify';

const SecuredRoutes = () => {
  const {user,setUser,loading} = useContext(UserContext)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  if(!user) {
      return <Navigate to="/" replace/>
  }
  
  return (
    <div className="secured-routes w-full h-dvh max-h-auto grid grid-cols-1 grid-rows-[60px_1fr] relative overflow-x-hidden">
        <div className="absolute top-0 left-0 z-100">
          <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
        />
        </div>
        {
          loading && (<Loader/>)
        }
        <Navbar isSidebarOpen={isSidebarOpen} onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-[auto_1fr] fixed top-15 left-0 overflow-x-hidden">
        <Sidebar user={user} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="secure-outlet w-full h-full max:h-auto overflow-y-scroll overflow-x-hidden">
        {<Outlet/>}
        </div>
        </div>
    </div>
  )
}

export default SecuredRoutes
