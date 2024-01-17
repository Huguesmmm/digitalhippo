import express from "express"
import { getPayloadClient } from "./get-payload"
import { nextApp, nextHandler } from "./next-utils"
import * as trpcExpress from "@trpc/server/adapters/express"
import { appRouter } from "./trpc"
import { inferAsyncReturnType } from "@trpc/server"
import nextBuild from "next/dist/build"
import path from "path"


const app = express()
const PORT = Number(process.env.PORT) || 3000

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({
    req, res
})

export type ExpressContext = inferAsyncReturnType<typeof createContext>

const start = async () => {

    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms) => {
                cms.logger.info(`Admin URL ${cms.getAdminURL}`)
            }
        }
    })

    if (process.env.NEXT_BUILD) {
        app.listen(async () => {
            payload.logger.info("Payload is building for production")
            // @ts-ignore-error
            await nextBuild(path.join(__dirname, '../'))

            process.exit()
        })

        return
    }

    app.use('/api/trpc', trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext
    }))

    app.use((req, res) => nextHandler(req, res))

    nextApp.prepare().then(() => {
        payload.logger.info('Next.js started')

        app.listen(PORT, async () => {
            payload.logger.info(`Next.js App URL : ${process.env.NEXT_PUBLIC_SERVER_URL}`)
        })
    })
}

start()