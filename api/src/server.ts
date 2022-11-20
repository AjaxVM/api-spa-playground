import express from 'express'

import v1 from './v1'

const app = express()

app.use(v1)

app.listen(3000, () => {
  console.log('API running at http://localhost:3000')
})
