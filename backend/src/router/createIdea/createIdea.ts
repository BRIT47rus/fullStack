
import { trpc } from "../../lib/trpc";
import { ideas } from "../../lib/ideas";
import { zCreateIdeaTrpsInput } from "./input";



export const createIdeaTrpsRoute = trpc.procedure
    .input(
        zCreateIdeaTrpsInput
    )
    .mutation(({ input }) => {
        if (ideas.find((idea) => idea.nick === input.nick)) {
            throw Error('Idea with this nick already exists')
          }
        ideas.unshift(input);
        return true
    })