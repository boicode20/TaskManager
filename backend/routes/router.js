import express from 'express'
import { registerSuperAdmin } from '../controller/registerSuperAdmin.js';

const routes = express.Router()
routes.post('/register-super-admin',registerSuperAdmin)



export default routes