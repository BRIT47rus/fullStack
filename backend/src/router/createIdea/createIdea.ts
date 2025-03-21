
import { trpc } from "../../lib/trpc";
import { ideas } from "../../lib/ideas";
import { zCreateIdeaTrpsInput } from "./input";



export const createIdeaTrpsRoute = trpc.procedure
    .input(
        zCreateIdeaTrpsInput
    )
    .mutation(async ({ input, ctx }) => {

        const exIdea = await ctx.prisma.idea.findUnique({
            where: {
                nick: input.nick
            },
        })
        if (exIdea) {
            throw Error('Idea with this nick already exists')
        }
        await ctx.prisma.idea.create({
            data: input
        })
        return true;
    })