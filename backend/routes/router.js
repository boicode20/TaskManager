import express from 'express'
import { registerSuperAdmin } from '../controller/registerSuperAdmin.js';
import { login } from '../controller/login.js';
import { authMiddleware } from '../middleware/middleware.js';
import { userData } from '../controller/userData.js';
import { registerAdmin } from '../controller/registerAdmin.js';
import { getAdminData } from '../controller/getAdminData.js';
import { editUserAccount } from '../controller/editUserAccount.js';
import { deleteUserAccount } from '../controller/deleteUserAccount.js';

const routes = express.Router()

// Userdata
routes.get('/user-data', authMiddleware,userData)
// Admin Data
routes.get('/admin-data', authMiddleware,getAdminData)

// Registration for super admin
routes.post('/register-super-admin',registerSuperAdmin)


// Registration for admin
routes.post('/admin/add', authMiddleware, registerAdmin)

// Login route
routes.post('/login', login)


// Edit user account
routes.put('/edit-user',authMiddleware,editUserAccount)

// const delete admin acc 
routes.delete('/delete-user/:type/:userId',authMiddleware,deleteUserAccount)



// Logout route also delete cookie
routes.post('/logout', authMiddleware, (req, res) => {
  res.clearCookie('token')
  res.json({ message: 'Logged out successfully' })
})
export default routes