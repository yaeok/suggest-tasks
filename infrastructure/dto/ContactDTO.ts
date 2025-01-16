import { DataTransferObject } from '@/infrastructure/dto/dto'
import { Contact } from '@/model/Contact'
import { DocumentData } from '@firebase/firestore'

export class ContactDTO implements DataTransferObject {
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

  static fromDocumentData(args: {
    document: DocumentData
    id: string
  }): ContactDTO {
    const { document, id } = args

    return new ContactDTO({
      contactId: id,
      type: document.type,
      email: document.email,
      content: document.content,
      createdAt: document.createdAt,
    })
  }

  static fromDomain(domain: Contact): ContactDTO {
    return new ContactDTO({
      contactId: domain.contactId,
      type: domain.type,
      email: domain.email,
      content: domain.content,
      createdAt: domain.createdAt,
    })
  }

  toDocumentData(): DocumentData {
    return {
      type: this.type,
      email: this.email,
      content: this.content,
      createdAt: this.createdAt,
    }
  }
}
