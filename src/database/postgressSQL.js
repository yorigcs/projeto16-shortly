import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const { Pool } = pg
const isDeploy = true
const databaseConfigDev = {
  connectionString: process.env.DATABASE_URL
}

const databaseConfigDeploy = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
}

const connection = new Pool(isDeploy ? databaseConfigDeploy : databaseConfigDev)
export default connection
