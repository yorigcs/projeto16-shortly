import { Router } from 'express'

import signUpMiddleware from '../middlewares/signUpMiddleware.js'
import signUpController from '../controllers/signUpController.js'
import signInMiddleware from '../middlewares/signInMiddleware.js'
import signInController from '../controllers/signInController.js'
import getUrlById from '../controllers/getUrlByIdController.js'

const router = Router()

router.post('/signup', signUpMiddleware, signUpController)
router.post('/signin', signInMiddleware, signInController)
router.get('/urls/:id', getUrlById)
router.get('/urls/open/:shortUrl')
router.get('/ranking')

export default router
