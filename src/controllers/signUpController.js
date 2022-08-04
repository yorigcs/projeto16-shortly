import connection from '../database/postgressSQL.js'
import bcrypt from 'bcrypt'

const signUpController = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const { rows: user } = await connection.query('SELECT * FROM users WHERE email = $1', [email])
    if (user[0]) {
      return res.sendStatus(409)
    }
    const encryptedPw = bcrypt.hashSync(password, 10)
    await connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, encryptedPw])
    res.sendStatus(201)
  } catch (err) {
    res.status(500).send('Houve um erro interno ao criar o usuário!')
  }
}

export default signUpController
