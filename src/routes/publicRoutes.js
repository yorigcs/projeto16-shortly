import signUpMiddleware from '../middlewares/signUpMiddleware.js'
import signUpController from '../controllers/signUpController.js'
import signInMiddleware from '../middlewares/signInMiddleware.js'

import { Router } from 'express'
const router = Router()

router.post('/signup', signUpMiddleware, signUpController)
router.post('/signin', signInMiddleware)
router.get('/urls/:id')
router.get('/urls/open/:shortUrl')
router.get('/ranking')

export default router
