import React, { useContext } from 'react'
import Navbar from '../components/Navbar/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { UserContext } from '../provider/UserProvider';
import Loader from '../components/Loader/Loader';
import { Bounce, ToastContainer } from 'react-toastify';

const SecuredRoutes = () => {
  const {user,setUser,loading} = useContext(UserContext)
  
  if(!user) {
      return <Navigate to="/" replace/>
  }
  
  return (
    <div className="secured-routes w-full h-dvh max-h-auto grid grid-cols-1 grid-rows-[60px_1fr] relative">
        <div className="absolute top-0 left-0 z-70">
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
        <Navbar/>
        <div className="w-full h-full grid grid-cols-[auto_1fr] relative">
        <Sidebar user={user}/>
        {<Outlet/>}
        </div>
    </div>
  )
}

export default SecuredRoutes
