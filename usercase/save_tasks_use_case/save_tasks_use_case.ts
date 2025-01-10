import { FirebaseTaskItemRepository } from '@/infrastructure/repository/taskitems/impl/FirebaseTaskItemRepository'
import { FirebaseTaskRepository } from '@/infrastructure/repository/tasks/impl/FirebaseTaskRepository'
import { Task } from '@/model/Task'
import { TaskItem } from '@/model/TaskItem'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface SaveTaskItemsUseCaseInput extends UseCaseInput {
  task: Task
  taskItems: TaskItem[]
  uid: string
}

interface SaveTaskItemsUseCaseOutput extends UseCaseOutput {
  result: boolean
}

export class SaveTaskItemsUseCase
  implements
    UseCase<SaveTaskItemsUseCaseInput, Promise<SaveTaskItemsUseCaseOutput>>
{
  private taskrepository: FirebaseTaskRepository
  private taskItemRepository: FirebaseTaskItemRepository

  constructor() {
    this.taskrepository = new FirebaseTaskRepository()
    this.taskItemRepository = new FirebaseTaskItemRepository()
  }

  async execute(
    input: SaveTaskItemsUseCaseInput
  ): Promise<SaveTaskItemsUseCaseOutput> {
    const { task, taskItems, uid } = input

    // タスクのオーナーIDを設定
    task.ownerId = uid

    const result = await this.taskrepository.saveTask({ task })

    const response = await this.taskItemRepository.saveTaskItems({
      taskItems,
      taskId: result.taskId,
    })

    if (response.length === 0) {
      return { result: false }
    } else {
      return { result: true }
    }
  }
}
