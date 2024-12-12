export class User {
  uid: string
  username: string
  email: string
  limit: number
  createdAt: Date

  constructor(args: {
    uid: string
    username: string
    email: string
    limit: number
    createdAt: Date
  }) {
    const { uid, username, email, limit, createdAt } = args
    this.uid = uid
    this.username = username
    this.email = email
    this.limit = limit
    this.createdAt = createdAt
  }
}
