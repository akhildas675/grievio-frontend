import { z } from "zod";
const envSchema = z.object({
    VITE_API_URL: z.string().url(),
});


const parsedEnv = envSchema.safeParse(import.meta.env);
if(!parsedEnv.success){
    console.error("Invalid environment variables:", z.treeifyError(parsedEnv.error));
    throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;