import { Response, Request } from "express"
import { saveMessageService } from "../../domain/services/save-message-service"
import { table } from "console"
import { listMessagesService } from "../../domain/services/list-messages-service"

export async function saveMessageController(req: Request, res: Response) {
  const { name, email, message } = req.body

  const comment = await saveMessageService({ name, email, message })

  return res.status(201).json(comment)
}

export async function listMessagesController(req: Request, res: Response) {
  const messages = await listMessagesService()
  
  return res.status(200).json(messages)
  
}