import express from 'express'
import { registerSuperAdmin } from '../controller/registerSuperAdmin.js';
import { login } from '../controller/login.js';
import { authMiddleware } from '../middleware/middleware.js';
import { userData } from '../controller/userData.js';

const routes = express.Router()

// Userdata
routes.get('/user-data', authMiddleware,userData)


// Registration for super admin
routes.post('/register-super-admin',registerSuperAdmin)


// Registration for admin


// Login route
routes.post('/login', login)

export default routes