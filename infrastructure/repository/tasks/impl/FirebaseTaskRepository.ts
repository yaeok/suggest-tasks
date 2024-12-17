import { TaskDTO } from '@/infrastructure/dto/TaskDTO'
import { db } from '@/infrastructure/firebase/config'
import { taskRef } from '@/infrastructure/firebase/ref/path'
import { TaskMapper } from '@/infrastructure/mapper/Task'
import { Task } from '@/model/Task'
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from '@firebase/firestore'

import { TaskRepository } from '../TaskRepository'

export class FirebaseTaskRepository implements TaskRepository {
  async saveTask(args: { task: Task }): Promise<Task> {
    const { task } = args

    const ref = collection(db, taskRef)

    const response = await addDoc(
      ref,
      TaskDTO.fromDomain(task).toDocumentData()
    ).then(async (docRef) => {
      await updateDoc(docRef, { taskId: docRef.id })
      task.taskId = docRef.id
      return task
    })

    return response
  }

  async getTasks(args: { ownerId: string }): Promise<Task[]> {
    const { ownerId } = args

    const ref = collection(db, taskRef)
    const q = query(ref, where('ownerId', '==', ownerId))

    const snapshot = await getDocs(q)

    const tasks = snapshot.docs.map((doc) => {
      const data = doc.data()
      return TaskMapper.toDomain(
        TaskDTO.fromDocumentData({ document: data, id: doc.id })
      )
    })

    return tasks
  }
}
