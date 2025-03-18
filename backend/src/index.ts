import express from 'express'
import cors from 'cors'

import { apllyTrpcToExpressApp } from './lib/trpc'
import { trpcRoute } from './router'

const expressApp = express()
expressApp.use(cors())
expressApp.get('/ping', (req, res) => {
  res.send('pong dd')
})


apllyTrpcToExpressApp(expressApp,trpcRoute)


expressApp.listen(3000, () => {
  console.info('Listining at http://localhost:3000/ ')
})
