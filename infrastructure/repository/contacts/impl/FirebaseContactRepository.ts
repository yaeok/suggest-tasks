import { ContactDTO } from '@/infrastructure/dto/ContactDTO'
import { db } from '@/infrastructure/firebase/config'
import { contactRef } from '@/infrastructure/firebase/ref/path'
import { Contact } from '@/model/Contact'
import { addDoc, collection, updateDoc } from '@firebase/firestore'

import { ContactRepository } from '../ContactRepository'

export class FirebaseContactRepository implements ContactRepository {
  async createContact(args: {
    type: string
    email: string
    content: string
  }): Promise<void> {
    const { type, email, content } = args

    const contact = new Contact({
      contactId: '',
      type,
      email,
      content,
      createdAt: new Date(),
    })

    const data = ContactDTO.fromDomain(contact).toDocumentData()

    const ref = collection(db, contactRef)

    await addDoc(ref, data).then(async (docRef) => {
      await updateDoc(docRef, {
        contactId: docRef.id,
      })
    })
  }
}
