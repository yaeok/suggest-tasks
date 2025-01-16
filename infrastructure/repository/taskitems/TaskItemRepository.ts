import { TaskItem } from '@/model/TaskItem'

export interface TaskItemRepository {
  saveTaskItems(args: {
    taskItems: TaskItem[]
    taskId: string
  }): Promise<TaskItem[]>
  getTaskItemsByTaskId(args: { taskId: string }): Promise<TaskItem[]>
}
