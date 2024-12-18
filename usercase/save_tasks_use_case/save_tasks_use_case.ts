import {
  FirebaseTaskItemRepository
} from '@/infrastructure/repository/taskitems/impl/FirebaseTaskItemRepository';
import {
  FirebaseTaskRepository
} from '@/infrastructure/repository/tasks/impl/FirebaseTaskRepository';
import { Task } from '@/model/Task';
import { TaskItem } from '@/model/TaskItem';

export class SavetaskItemsUseCase {
  private taskrepository: FirebaseTaskRepository
  private taskItemRepository: FirebaseTaskItemRepository

  constructor() {
    this.taskrepository = new FirebaseTaskRepository()
    this.taskItemRepository = new FirebaseTaskItemRepository()
  }

  async savetaskItems(args: {
    task: Task
    taskItems: TaskItem[]
    uid: string
  }): Promise<boolean> {
    const { task, taskItems, uid } = args

    // タスクのオーナーIDを設定
    task.ownerId = uid

    const result = await this.taskrepository.saveTask({ task })

    const response = await this.taskItemRepository.saveTaskItems({
      taskItems,
      taskId: result.taskId,
    })

    if (response.length === 0) {
      return false
    } else {
      return true
    }
  }
}
