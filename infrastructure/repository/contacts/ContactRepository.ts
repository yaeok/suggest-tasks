export interface ContactRepository {
  createContact(args: {
    type: string
    email: string
    content: string
  }): Promise<void>
}
