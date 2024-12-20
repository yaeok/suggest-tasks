import { FirebaseTaskRepository } from '@/infrastructure/repository/tasks/impl/FirebaseTaskRepository'
import { Task } from '@/model/Task'

export class GetTasksUseCase {
  private taskRepository: FirebaseTaskRepository

  constructor() {
    this.taskRepository = new FirebaseTaskRepository()
  }

  async getTasks(args: { uid: string }): Promise<Task[]> {
    const { uid } = args

    const tasks = await this.taskRepository.getTasks({ ownerId: uid })

    return tasks
  }
}
