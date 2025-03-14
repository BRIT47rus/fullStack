import express from 'express'

import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRoute } from './trpc'

const expressApp = express()

expressApp.get('/ping', (req, res) => {
  res.send('pong dd')
})
expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRoute,
  })
)

expressApp.listen(3000, () => {
  console.info('Listining at http://localhost:3000/ ')
})
