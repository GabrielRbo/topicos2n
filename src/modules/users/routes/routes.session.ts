import { Router } from "express";
import SessionController from "../controllers/SessionController";


const sessionRouter = Router()

const sessionController = new SessionController()

sessionRouter.post('/session', sessionController.create)


export default sessionRouter
