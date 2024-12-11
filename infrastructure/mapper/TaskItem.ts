import { TaskItemDTO } from '@/infrastructure/dto/TaskItemDTO'
import { TaskItem } from '@/model/TaskItem'

export class TaskItemMapper {
  static toDomain(dto: TaskItemDTO): TaskItem {
    return new TaskItem({
      itemId: dto.itemId,
      taskId: dto.taskId,
      title: dto.title,
      content: dto.content,
      startDate: dto.startDate,
      endDate: dto.endDate,
      duration: dto.duration,
      reference: dto.reference,
      isCompleted: dto.isCompleted,
      completedAt: dto.completedAt,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    })
  }
}
