import { TaskDTO } from '@/infrastructure/dto/TaskDTO'
import { Task } from '@/model/Task'

export class TaskMapper {
  static toDomain(dto: TaskDTO): Task {
    return new Task({
      taskId: dto.taskId,
      target: dto.target,
      technology: dto.technology,
      ownerId: dto.ownerId,
      isCompleted: dto.isCompleted,
      completedAt: dto.completedAt,
      createdAt: dto.createdAt,
    })
  }
}
