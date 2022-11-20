import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

router.get('/error', (req, res) => {
  throw new Error('testing')
})

export default router
