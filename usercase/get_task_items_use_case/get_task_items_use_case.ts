import { FirebaseTaskItemRepository } from '@/infrastructure/repository/taskitems/impl/FirebaseTaskItemRepository'
import { TaskItem } from '@/model/TaskItem'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface GetTaskItemsUseCaseInput extends UseCaseInput {
  taskId: string
}

interface GetTaskItemsUseCaseOutput extends UseCaseOutput {
  taskItems: TaskItem[]
}

export class GetTaskItemsUseCase
  implements
    UseCase<GetTaskItemsUseCaseInput, Promise<GetTaskItemsUseCaseOutput>>
{
  private taskItemRepository: FirebaseTaskItemRepository

  constructor() {
    this.taskItemRepository = new FirebaseTaskItemRepository()
  }

  async execute(
    input: GetTaskItemsUseCaseInput
  ): Promise<GetTaskItemsUseCaseOutput> {
    const { taskId } = input

    const taskItems = await this.taskItemRepository.getTaskItemsByTaskId({
      taskId,
    })

    return { taskItems }
  }
}
