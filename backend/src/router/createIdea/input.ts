import { z } from "zod";

export const zCreateIdeaTrpsInput =  z.object({
    name: z.string().min(2, 'Нужно больше 1го символа'),
    nick: z.string().min(1).regex(/^[a-z0-9-]+$/, 'Nick may contain only lowercase letters, numbers and dashes'),
    description: z.string().min(1),
    text: z.string().min(10, 'минимум 10 символов')

})