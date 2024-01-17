import { ExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";

//initialising trpc and creating a router

const t = initTRPC.context<ExpressContext>().create()


export const router = t.router
export const publicProcedure = t.procedure