import { blogComments } from "../../database/models/blog-comments-model"

interface Message {
  email: string
  message: string
  name: string
}

export async function saveMessageService({ email, message, name }: Message) {
  const comment = await blogComments.create({ email, message, name })

  return comment
}
