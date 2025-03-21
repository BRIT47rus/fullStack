import express from 'express'
import cors from 'cors'

import { apllyTrpcToExpressApp } from './lib/trpc'
import { trpcRoute } from './router';
import { AppContext, createAppContext } from './lib/ctx';



void (async ()=>{
let ctx: AppContext | null = null;
try {
  ctx = createAppContext();

  const expressApp = express()
  expressApp.use(cors())
  expressApp.get('/ping', (req, res) => {
    res.send('pong dd')
  })


  apllyTrpcToExpressApp(expressApp, ctx, trpcRoute)


  expressApp.listen(3000, () => {
    console.info('Listining at http://localhost:3000/ ')
  })
} catch (error) {
  console.log(error);
  await ctx?.stop()
}
})();
