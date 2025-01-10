import { FirebaseTaskRepository } from '@/infrastructure/repository/tasks/impl/FirebaseTaskRepository'
import { Task } from '@/model/Task'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface GetTasksUseCaseInput extends UseCaseInput {
  uid: string
}

interface GetTasksUseCaseOutput extends UseCaseOutput {
  tasks: Task[]
}

export class GetTasksUseCase
  implements UseCase<GetTasksUseCaseInput, Promise<GetTasksUseCaseOutput>>
{
  private taskRepository: FirebaseTaskRepository

  constructor() {
    this.taskRepository = new FirebaseTaskRepository()
  }

  async execute(input: GetTasksUseCaseInput): Promise<GetTasksUseCaseOutput> {
    const { uid } = input

    const tasks = await this.taskRepository.getTasks({ ownerId: uid })

    return { tasks }
  }
}
