import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import makeConnection from './db/mongodb'

const app = express()
app.use(express.json())
app.use(cors(corsOptions))

dotenv.config()

makeConnection()
/**
 * test route
 */
app.get('/', (req, res) => {
  res.json({ success: true })
})

app.listen(process.env.PORT, () => {
  log.info(`[server] ->🚀 started on ${process.env.PORT}`)
  log.info(`[${process.env.NODE_ENV}] -> http://localhost:${process.env.PORT}`)
})
