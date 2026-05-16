import express from 'express'
import 'dotenv/config'
import cookie from 'cookie-parser'
import cors from 'cors'
import { connectDb } from './connection/connectDb.js';
import routes from './routes/router.js'
const server = express()
const PORT = process.env.SERVER_PORT || 8000
// accept json type
server.use(express.json())
// accept cookie
server.use(cookie())
// cors config
server.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
))

const serverStart = async() => {
    await connectDb()
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

server.use('/backend-api',routes)


serverStart()
