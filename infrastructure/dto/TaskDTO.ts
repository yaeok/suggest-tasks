import { DataTransferObject } from '@/infrastructure/dto/dto'
import { Task } from '@/model/Task'
import { DocumentData } from '@firebase/firestore'

export class TaskDTO implements DataTransferObject {
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

  static fromDocumentData(args: {
    document: DocumentData
    id: string
  }): TaskDTO {
    const { document, id } = args

    return new TaskDTO({
      taskId: id,
      target: document.target,
      technology: document.technology,
      ownerId: document.ownerId,
      isCompleted: document.isCompleted,
      completedAt: document.completedAt ? document.completedAt.toDate() : null,
      createdAt: document.createdAt,
    })
  }

  static fromDomain(domain: Task): TaskDTO {
    return new TaskDTO({
      taskId: domain.taskId,
      target: domain.target,
      technology: domain.technology,
      ownerId: domain.ownerId,
      isCompleted: domain.isCompleted,
      completedAt: domain.completedAt,
      createdAt: domain.createdAt,
    })
  }

  toDocumentData(): DocumentData {
    return {
      target: this.target,
      technology: this.technology,
      ownerId: this.ownerId,
      isCompleted: this.isCompleted,
      completedAt: this.completedAt,
      createdAt: this.createdAt,
    }
  }
}
