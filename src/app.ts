
import "../instrument.js";
import config from "./config/config.js"
import express, { Request, Response } from 'express'
import usersRoute from './routes/usersRoutes.js'
import Sentry from "../utils/sentry.js";
const app = express()
app.use(express.json())

Sentry.setupExpressErrorHandler(app);

app.use('/users', usersRoute)
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});

app.listen(config.port, () => {
    console.log(`Docker Man listening on port ${config.port}`)
})
