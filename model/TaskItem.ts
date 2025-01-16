export class TaskItem {
  itemId: string
  taskId: string
  title: string
  content: string
  startDate: Date
  endDate: Date
  duration: number
  priority: number
  reference: string | null
  isCompleted: boolean
  completedAt: Date | null
  createdAt: Date
  updatedAt: Date | null

  constructor(args: {
    itemId: string
    taskId: string
    title: string
    content: string
    startDate: Date
    endDate: Date
    duration: number
    priority: number
    reference: string | null
    isCompleted: boolean
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date | null
  }) {
    const {
      itemId,
      taskId,
      title,
      content,
      startDate,
      endDate,
      duration,
      priority,
      reference,
      isCompleted,
      completedAt,
      createdAt,
      updatedAt,
    } = args

    this.itemId = itemId
    this.taskId = taskId
    this.title = title
    this.content = content
    this.startDate = startDate
    this.endDate = endDate
    this.duration = duration
    this.priority = priority
    this.reference = reference
    this.isCompleted = isCompleted
    this.completedAt = completedAt
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
