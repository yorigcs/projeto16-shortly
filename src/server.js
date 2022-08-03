import privateRoutes from './routes/privateRoutes.js'
import publicRoutes from './routes/publicRoutes.js'

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000
const server = express()

server.use([express.json(), cors(), privateRoutes, publicRoutes])

server.listen(PORT, () => console.log('listening on port ' + PORT))
