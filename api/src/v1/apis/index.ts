import express from 'express'
import { authn } from '../../middleware'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

router.get('/error', (req, res) => {
  throw new Error('testing')
})

router.use(authn.requireAuth)

router.get('/private', (req, res) => {
  res.json({
    message: `private info for: ${req.user.name}`
  })
})

export default router
