import { Router } from 'express'
import shortenMiddleware from '../middlewares/shortenMiddleware.js'

const router = Router()

router.post('/urls/shorten', shortenMiddleware)
router.delete('/urls/:id')
router.get('/users/me')

export default router
