
import { decodeToken } from '../services/jwtToken.js'

const deleteShortenUrlMiddleware = (req, res, next) => {
  const { id } = req.params
  if (isNaN(id)) {
    return res.status(422).send('Digite um valor númerico!')
  }
  const TOKEN = req.header('Authorization')?.split('Bearer ')[1]
  const decoded = decodeToken(TOKEN)
  if (!decoded) {
    return res.status(401).send('Token Inválido')
  }
  res.locals.deleteShortenData = { userId: decoded.id, urlId: id }
  next()
}
export default deleteShortenUrlMiddleware
