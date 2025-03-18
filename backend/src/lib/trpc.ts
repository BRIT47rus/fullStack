import { initTRPC } from "@trpc/server";
import { type Express } from "express";
import { TrpcRouter } from "../router";
import * as trpcExpress from '@trpc/server/adapters/express'



export const trpc = initTRPC.create();

export const apllyTrpcToExpressApp=(expressApp:Express,trpcRoute:TrpcRouter)=>{
    expressApp.use(
        '/trpc',
        trpcExpress.createExpressMiddleware({
          router: trpcRoute,
        })
      )
}