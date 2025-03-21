import { initTRPC } from "@trpc/server";
import { type Express } from "express";
import {type TrpcRouter } from "../router";
import * as trpcExpress from '@trpc/server/adapters/express'
import {type AppContext } from "./ctx";



export const trpc = initTRPC.context<AppContext>().create();

export const apllyTrpcToExpressApp=(expressApp:Express,appContext:AppContext,trpcRoute:TrpcRouter)=>{
    expressApp.use(
        '/trpc',
        trpcExpress.createExpressMiddleware({
          router: trpcRoute,
          createContext:()=>appContext,
        })
      )
}