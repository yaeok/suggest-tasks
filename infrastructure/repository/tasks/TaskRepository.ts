import { Task } from '@/model/Task'

export interface TaskRepository {
  saveTask(args: { task: Task }): Promise<Task>
}
