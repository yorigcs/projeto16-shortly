import { Router } from 'express'
import shortenURLController from '../controllers/shortenURLController.js'
import deleteShortenUrlMiddleware from '../middlewares/deleteUrlMiddleware.js'
import shortenMiddleware from '../middlewares/shortenMiddleware.js'

const router = Router()

router.post('/urls/shorten', shortenMiddleware, shortenURLController)
router.delete('/urls/:id', deleteShortenUrlMiddleware)
router.get('/users/me')

export default router
