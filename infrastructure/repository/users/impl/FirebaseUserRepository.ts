import { UserDTO } from '@/infrastructure/dto/UserTDO'
import { UserNotFoundException } from '@/infrastructure/exception/UserNotFoundException'
import { db } from '@/infrastructure/firebase/config'
import { userRef } from '@/infrastructure/firebase/ref/path'
import { UserMapper } from '@/infrastructure/mapper/User'
import { UserRepository } from '@/infrastructure/repository/users/UserRepository'
import { User } from '@/model/User'
import {
  collection,
  doc,
  getDocs,
  increment,
  query,
  setDoc,
  where,
} from '@firebase/firestore'

export class FirebaseUserRepository implements UserRepository {
  async getUserById(args: { uid: string }): Promise<User> {
    const { uid } = args

    const ref = collection(db, userRef)

    const q = query(ref, where('uid', '==', uid))

    const snapshot = await getDocs(q)

    if (snapshot.empty) {
      throw new UserNotFoundException()
    }

    const document = snapshot.docs[0].data()
    const response = UserMapper.toDomain(
      UserDTO.fromDocumentData({ document, id: document.uid })
    )

    return response
  }

  async createUser(args: { user: User }): Promise<void> {
    const { user } = args

    const ref = doc(db, userRef, user.uid)

    const document = UserDTO.fromDomain(user).toDocumentData()

    await setDoc(ref, document)
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

    if (snapshot.empty) {
      throw new UserNotFoundException()
    }

    const document = snapshot.docs[0].data()
    const response = UserMapper.toDomain(
      UserDTO.fromDocumentData({ document, id: document.id })
    )

    return response.limit
  }
}
