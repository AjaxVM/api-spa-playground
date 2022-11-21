import express from 'express'
import {
  authn,
  default404,
  errorFormatter
} from './middleware'

import userFromToken from './users'
import * as v1 from './v1'

const app = express()

app.use(authn.readAuth(userFromToken))

app.use(v1.routes)

// add default 404 handler after all other routes
app.use(default404)

// catch handler errors and format a proper response
app.use(errorFormatter)

const setup = async (): Promise<void> => {
  await v1.setup()
  app.listen(3000, () => {
    console.log('API running at http://localhost:3000')
  })
}

setup().catch((e) => {
  console.log('issue setting up APIs and starting server:', e)
})
