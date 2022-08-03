import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const { Pool } = pg
const isDeploy = process.env.IS_DEPLOY
const databaseConfigDev = {
  connectionString: process.env.DATABASE_URL_DEV
}

const databaseConfigDeploy = {
  connectionString: process.env.DATABASE_URL_DEPLOY,
  ssl: {
    rejectUnauthorized: false
  }
}

const connection = new Pool(isDeploy ? databaseConfigDeploy : databaseConfigDev)
export default connection
