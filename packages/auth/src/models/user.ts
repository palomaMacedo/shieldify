import { z } from "zod";

import { roleSchema } from "../roles";


export const UserSchema = z.object({
    id:  z.string(),
    role: roleSchema
})

export type User = z.infer<typeof UserSchema>
