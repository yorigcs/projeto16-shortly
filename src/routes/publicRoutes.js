import signUpMiddleware from '../middlewares/signUpMiddleware.js'
import { Router } from 'express'

const router = Router()

router.post('/signup', signUpMiddleware)
router.post('/signin')
router.get('/urls/:id')
router.get('/urls/open/:shortUrl')
router.get('/ranking')

export default router
