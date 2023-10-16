import { table } from "console"
import { blogComments } from "../../database/models/blog-comments-model"

export async function listMessagesService() {
  const comment = await blogComments.findAll()
  
  
  return comment
}