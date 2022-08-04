import connection from '../database/postgressSQL.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const SECRET = process.SECRET_KEY || '$1AIKSO%6A41'
const signInController = async (req, res) => {
  const { email, password } = req.body
  try {
    const { rows: user } = await connection.query('SELECT * FROM users WHERE email = $1', [email])
    if (!user[0] || !bcrypt.compareSync(password, user[0]?.password)) {
      return res.sendStatus(401)
    }
    const token = jwt.sign({ email, password }, SECRET)
    res.send(`Bearer ${token}`)
    console.log(token)
  } catch (err) {
    console.log(err)
  }
}

export default signInController
