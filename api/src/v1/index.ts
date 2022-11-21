import express from 'express'
import apis from './apis'
import { db } from './lib'

export const routes = express.Router()

routes.use('/v1', apis)

export const setup = async (): Promise<void> => {
  await db.connect()
}
