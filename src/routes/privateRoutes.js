import { Router } from 'express'
import deleteUrlController from '../controllers/deleteUrlController.js'
import shortenURLController from '../controllers/shortenURLController.js'
import deleteShortenUrlMiddleware from '../middlewares/deleteUrlMiddleware.js'
import shortenMiddleware from '../middlewares/shortenMiddleware.js'
import getMyUrlsMiddleware from '../middlewares/getMyUrlsMiddleware.js'
import getMyUrlsController from '../controllers/getMyUrlsController.js'

const router = Router()

router.post('/urls/shorten', shortenMiddleware, shortenURLController)
router.delete('/urls/:id', deleteShortenUrlMiddleware, deleteUrlController)
router.get('/users/me', getMyUrlsMiddleware, getMyUrlsController)

export default router
