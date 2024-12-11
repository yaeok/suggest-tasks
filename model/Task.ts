export class Task {
  taskId: string
  target: string
  technology: string
  ownerId: string
  isCompleted: boolean
  completedAt: Date | null
  createdAt: Date

  constructor(args: {
    taskId: string
    target: string
    technology: string
    ownerId: string
    isCompleted: boolean
    completedAt: Date | null
    createdAt: Date
  }) {
    const {
      taskId,
      target,
      technology,
      ownerId,
      isCompleted,
      completedAt,
      createdAt,
    } = args

    this.taskId = taskId
    this.target = target
    this.technology = technology
    this.ownerId = ownerId
    this.isCompleted = isCompleted
    this.completedAt = completedAt
    this.createdAt = createdAt
  }
}
