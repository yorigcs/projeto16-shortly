import { Router } from 'express'

const router = Router()

router.post('/signup')
router.post('/signin')
router.get('/urls/:id')
router.get('/urls/open/:shortUrl')
router.get('/ranking')

export default router
