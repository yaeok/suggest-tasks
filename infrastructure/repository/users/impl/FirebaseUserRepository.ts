import { UserDTO } from '@/infrastructure/dto/UserTDO'
import { db } from '@/infrastructure/firebase/config'
import { userRef } from '@/infrastructure/firebase/ref/path'
import { UserMapper } from '@/infrastructure/mapper/User'
import { User } from '@/model/User'
import {
  addDoc,
  collection,
  doc,
  FieldValue,
  getDocs,
  increment,
  query,
  setDoc,
  updateDoc,
  where,
} from '@firebase/firestore'

import { UserRepository } from '../UserRepository'

export class FirebaseUserRepository implements UserRepository {
  async getUserById(args: { uid: string }): Promise<User> {
    const { uid } = args

    const ref = collection(db, userRef)

    const q = query(ref, where('uid', '==', uid))

    const snapshot = await getDocs(q)

    if (snapshot.empty) {
      throw new Error('User not found')
    }

    const document = snapshot.docs[0].data()
    const response = UserMapper.toDomain(
      UserDTO.fromDocumentData({ document, id: document.id })
    )

    return response
  }

  async createUser(args: { user: User }): Promise<void> {
    const { user } = args

    const ref = collection(db, userRef)

    const document = UserDTO.fromDomain(user).toDocumentData()

    await addDoc(ref, document).then(async (docRef) => {
      await updateDoc(docRef, { uid: docRef.id })
    })
  }

  async incrementLimit(args: { uid: string }): Promise<void> {
    const { uid } = args

    const ref = doc(db, userRef, uid)

    await setDoc(
      ref,
      {
        limit: increment(1),
      },
      { merge: true }
    )
  }

  async checkLimit(args: { uid: string }): Promise<number> {
    const { uid } = args

    const ref = collection(db, userRef)

    const q = query(ref, where('uid', '==', uid))

    const snapshot = await getDocs(q)

    const document = snapshot.docs[0].data()
    const response = UserMapper.toDomain(
      UserDTO.fromDocumentData({ document, id: document.id })
    )

    return response.limit
  }
}
