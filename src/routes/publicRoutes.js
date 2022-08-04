import signUpMiddleware from '../middlewares/signUpMiddleware.js'
import signUpController from '../controllers/signUpController.js'

import { Router } from 'express'
const router = Router()

router.post('/signup', signUpMiddleware, signUpController)
router.post('/signin')
router.get('/urls/:id')
router.get('/urls/open/:shortUrl')
router.get('/ranking')

export default router
