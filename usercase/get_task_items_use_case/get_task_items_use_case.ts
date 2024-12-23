import { FirebaseTaskItemRepository } from '@/infrastructure/repository/taskitems/impl/FirebaseTaskItemRepository'

export class GetTaskItemsUseCase {
  private taskItemRepository: FirebaseTaskItemRepository

  constructor() {
    this.taskItemRepository = new FirebaseTaskItemRepository()
  }

  async getTaskItems(args: { taskId: string }) {
    const { taskId } = args

    const taskItems = await this.taskItemRepository.getTaskItemsByTaskId({
      taskId,
    })

    return taskItems
  }
}
