import config from "./config/config.ts"

import express, { Request, Response } from 'express'
const router = express()


router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})


router.listen(config.port, () => {
    console.log(`Docker Man listening on port ${config.port}`)
})
