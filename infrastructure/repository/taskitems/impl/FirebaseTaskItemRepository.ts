import { TaskItemDTO } from '@/infrastructure/dto/TaskItemDTO'
import { db } from '@/infrastructure/firebase/config'
import { taskItemRef, taskRef } from '@/infrastructure/firebase/ref/path'
import { TaskItemMapper } from '@/infrastructure/mapper/TaskItem'
import { TaskItemRepository } from '@/infrastructure/repository/taskitems/TaskItemRepository'
import { TaskItem } from '@/model/TaskItem'
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from '@firebase/firestore'

export class FirebaseTaskItemRepository implements TaskItemRepository {
  async saveTaskItems(args: {
    taskItems: TaskItem[]
    taskId: string
  }): Promise<TaskItem[]> {
    const { taskItems, taskId } = args
    const response: TaskItem[] = []

    const ref = collection(db, taskRef, taskId, taskItemRef)

    const promise = taskItems.map(async (taskItem) => {
      taskItem.taskId = taskId
      const docRef = await addDoc(
        ref,
        TaskItemDTO.fromDomain(taskItem).toDocumentData()
      )
      await updateDoc(docRef, { itemId: docRef.id })
      taskItem.itemId = docRef.id
      response.push(taskItem)
    })

    await Promise.all(promise)

    return response
  }

  async getTaskItemsByTaskId(args: { taskId: string }): Promise<TaskItem[]> {
    const { taskId } = args
    const response: TaskItem[] = []

    const ref = collection(db, taskRef, taskId, taskItemRef)

    const q = query(ref, where('taskId', '==', taskId))

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      response.push(
        TaskItemMapper.toDomain(
          TaskItemDTO.fromDocumentData({ document: data, id: data.id })
        )
      )
    })

    return response
  }
}
