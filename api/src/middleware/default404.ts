import express from 'express'

export const default404 = express.Router()

default404.use('*', (_, res) => {
  res.status(404).json({
    message: 'Page does not exist'
  })
})
