import { Router } from 'express'

const router = Router()

router.get('/urls/shorten')
router.delete('/urls/:id')
router.get('/users/me')

export default router
