import { Application } from "express"
import UsersController from "../controllers/UserController.js";
import express from 'express'
import { userMiddleware } from "../middlewares/userMiddleware.js";
const router: Application = express()



router.post("/create", UsersController.create)
router.post("/me", userMiddleware)
router.post("login", userMiddleware)


export default router;