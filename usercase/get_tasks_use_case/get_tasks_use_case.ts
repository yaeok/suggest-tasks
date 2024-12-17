import { FirebaseTaskRepository } from '@/infrastructure/repository/tasks/impl/FirebaseTaskRepository'
import { Task } from '@/model/Task'

export class GetTasksUseCase {
  private taskRepository: FirebaseTaskRepository

  constructor() {
    this.taskRepository = new FirebaseTaskRepository()
  }

  async getTasks(): Promise<Task[]> {
    const ownerId = ''

    const tasks = await this.taskRepository.getTasks({ ownerId })

    return tasks
  }
}
