import { TaskDTO } from '@/infrastructure/dto/TaskDTO'
import { db } from '@/infrastructure/firebase/config'
import { taskRef } from '@/infrastructure/firebase/ref/path'
import { Task } from '@/model/Task'
import { addDoc, collection, updateDoc } from '@firebase/firestore'

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
}
