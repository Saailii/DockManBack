import { NextFunction, Request, Response } from "express"
import * as Sentry from "@sentry/node"
import jwt from "jsonwebtoken"
import User from "../../classes/User.js"
import { platform } from "os"


export async function userMiddleware(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers['authorization']
    if (!auth) {
        Sentry.captureException("Missing authorization header")
        return res.status(401).json({ error: "No authorization banner" })
    }

    const tokenUser = auth.split(" ")[1]

    const payload = jwt.verify(tokenUser, process.env.JWT_SECRET_KEY!)

    //const user = new User(payload.username, payload.password)

    console.log(payload)

    //if (!payload) {
    //  Sentry.captureException("Verify JWT Goes wrong")
    //return res.status(401).json({ error: "JWT Cannot be verified (Maybe expired ?)" })
    //}

    //req.user = user
    next();
}

