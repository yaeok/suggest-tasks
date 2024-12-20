import { DataTransferObject } from '@/infrastructure/dto/dto'
import { TaskItem } from '@/model/TaskItem'
import { DocumentData } from '@firebase/firestore'

export class TaskItemDTO implements DataTransferObject {
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

  static fromDocumentData(args: {
    document: DocumentData
    id: string
  }): TaskItemDTO {
    const { document, id } = args

    return new TaskItemDTO({
      itemId: id,
      taskId: document.taskId,
      title: document.title,
      content: document.content,
      startDate: document.startDate.toDate(),
      endDate: document.endDate.toDate(),
      duration: document.duration,
      priority: document.priority,
      reference: document.reference,
      isCompleted: document.isCompleted,
      completedAt: document.completedAt ? document.completedAt.toDate() : null,
      createdAt: document.createdAt.toDate(),
      updatedAt: document.updatedAt ? document.updatedAt.toDate() : null,
    })
  }

  static fromDomain(domain: TaskItem): TaskItemDTO {
    return new TaskItemDTO({
      itemId: domain.itemId,
      taskId: domain.taskId,
      title: domain.title,
      content: domain.content,
      startDate: domain.startDate,
      endDate: domain.endDate,
      duration: domain.duration,
      priority: domain.priority,
      reference: domain.reference,
      isCompleted: domain.isCompleted,
      completedAt: domain.completedAt,
      createdAt: domain.createdAt,
      updatedAt: domain.updatedAt,
    })
  }

  toDocumentData(): DocumentData {
    return {
      taskId: this.taskId,
      title: this.title,
      content: this.content,
      startDate: this.startDate,
      endDate: this.endDate,
      duration: this.duration,
      priority: this.priority,
      reference: this.reference,
      isCompleted: this.isCompleted,
      completedAt: this.completedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}
