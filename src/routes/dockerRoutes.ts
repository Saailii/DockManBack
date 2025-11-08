import { Application } from "express"
import { DockerController } from "../controllers/DockerController.js"
import express from 'express'
const router: Application = express()


router.post('/create', DockerController.create)
router.get('/container/:id', DockerController.getContainer)
router.delete('/container/:id', DockerController.delete)
router.get("/container-stats/:id", DockerController.getContainerStats)
router.get("/containers", DockerController.getAllContainers)





export default router;