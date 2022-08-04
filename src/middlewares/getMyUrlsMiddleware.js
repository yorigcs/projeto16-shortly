
import { decodeToken } from '../services/jwtToken.js'

const getMyUrlsMiddleware = (req, res, next) => {
  const TOKEN = req.header('Authorization')?.split('Bearer ')[1]
  const decoded = decodeToken(TOKEN)
  if (!decoded) {
    return res.status(401).send('Token Inválido')
  }
  res.locals.myId = decoded.id
  next()
}
export default getMyUrlsMiddleware
