import connection from '../database/postgressSQL.js'
import bcrypt from 'bcrypt'
import { createToken } from '../services/jwtToken.js'
const signInController = async (req, res) => {
  const { email, password } = req.body
  try {
    const { rows: user } = await connection.query('SELECT * FROM users WHERE email = $1', [email])
    if (!user[0] || !bcrypt.compareSync(password, user[0]?.password)) {
      return res.sendStatus(401)
    }
    const token = createToken({ id: user[0].id, email, password })
    const userData = {
      name: user[0].name,
      token: `Bearer ${token}`
    }
    res.send(userData)
  } catch (err) {
    console.log(err)
  }
}

export default signInController
