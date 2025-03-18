import { trpc } from "../lib/trpc"
import { getIdeaTrpcRoute } from "./getIdea/getIdea"
import { getIdeasTrpcRoute } from "./getIdeas/getIdeas"

export const trpcRoute = trpc.router({
getIdeas:getIdeasTrpcRoute,
getIdea:getIdeaTrpcRoute,

})
export type TrpcRouter = typeof trpcRoute