import shortenURLSchema from '../schemas/shortenURLSchema.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const SECRET = process.env.SECRET_KEY || '$1AIKSO%6A41'
const shortenMiddleware = async (req, res) => {
  const { url } = req.body
  const TOKEN = req.header('Authorization')?.split('Bearer ')[1]
  try {
    await shortenURLSchema.validateAsync({ url })
    try {
      const decoded = jwt.verify(TOKEN, SECRET)
      console.log(decoded)
    } catch (err) {
      return res.status(401).send('Token Inválido')
    }
  } catch (err) {
    const { message } = err.details[0]
    console.log(message)
    return res.status(422).send(message)
  }
}
export default shortenMiddleware
