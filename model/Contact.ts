export class Contact {
  contactId: string
  type: string
  email: string
  content: string
  createdAt: Date

  constructor(args: {
    contactId: string
    type: string
    email: string
    content: string
    createdAt: Date
  }) {
    const { contactId, type, email, content, createdAt } = args

    this.contactId = contactId
    this.type = type
    this.email = email
    this.content = content
    this.createdAt = createdAt
  }
}
