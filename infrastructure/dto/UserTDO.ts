import { DataTransferObject } from '@/infrastructure/dto/dto'
import { User } from '@/model/User'
import { DocumentData } from '@firebase/firestore'

export class UserDTO implements DataTransferObject {
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

  static fromDocumentData(args: {
    document: DocumentData
    id: string
  }): UserDTO {
    const { document, id } = args

    return new UserDTO({
      uid: id,
      username: document.username,
      email: document.email,
      limit: document.limit,
      createdAt: document.createdAt.toDate(),
    })
  }

  static fromDomain(domain: User): UserDTO {
    return new UserDTO({
      uid: domain.uid,
      username: domain.username,
      email: domain.email,
      limit: domain.limit,
      createdAt: domain.createdAt,
    })
  }

  toDocumentData(): DocumentData {
    return {
      uid: this.uid,
      username: this.username,
      email: this.email,
      limit: this.limit,
      createdAt: this.createdAt,
    }
  }
}
