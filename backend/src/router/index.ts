import { trpc } from "../lib/trpc"
import { createIdeaTrpsRoute } from "./createIdea/createIdea"
import { getIdeaTrpcRoute } from "./getIdea/getIdea"
import { getIdeasTrpcRoute } from "./getIdeas/getIdeas"

export const trpcRoute = trpc.router({
getIdeas:getIdeasTrpcRoute,
getIdea:getIdeaTrpcRoute,
createIdea: createIdeaTrpsRoute

})
export type TrpcRouter = typeof trpcRoute