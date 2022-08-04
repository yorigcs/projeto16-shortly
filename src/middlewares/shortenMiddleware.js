import shortenURLSchema from '../schemas/shortenURLSchema.js'
import { decodeToken } from '../services/jwtToken.js'
const shortenMiddleware = async (req, res, next) => {
  const { url } = req.body
  const TOKEN = req.header('Authorization')?.split('Bearer ')[1]
  try {
    await shortenURLSchema.validateAsync({ url })
    const decoded = decodeToken(TOKEN)
    if (!decoded) {
      return res.status(401).send('Token Inválido')
    }
    res.locals.shortenData = { userId: decoded.id, url }
    next()
  } catch (err) {
    const { message } = err.details[0]
    console.log(message)
    return res.status(422).send(message)
  }
}
export default shortenMiddleware
