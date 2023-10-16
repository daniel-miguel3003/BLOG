import express, { Request, Response } from "express"
import { listMessagesController, saveMessageController } from "./controllers/message-controller"


export const routes = express.Router()

routes.post("/save-message", (req: Request, res: Response) =>
  saveMessageController(req, res)
)

routes.get("/list-messages", (req: Request, res: Response) => 
  listMessagesController(req, res)
)
