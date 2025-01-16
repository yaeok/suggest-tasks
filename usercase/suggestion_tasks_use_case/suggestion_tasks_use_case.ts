/* eslint-disable @typescript-eslint/no-explicit-any */

import { createTaskSuggestPrompt } from '@/constants/Prompt'
import { GenerateLimitException } from '@/infrastructure/exception/GenerateLimitException'
import { FirebaseUserRepository } from '@/infrastructure/repository/users/impl/FirebaseUserRepository'
import { TaskItem } from '@/model/TaskItem'
import { GeminiService } from '@/service/gemini/GeminiService'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface SuggestionTaskItemUseCaseInput extends UseCaseInput {
  level: string
  supplement?: string
  libraries: string[]
  targets: string
  technology: string
  uid: string
}

interface SuggestionTaskItemUseCaseOutput extends UseCaseOutput {
  taskItems: TaskItem[]
}

export class SuggestionTaskItemUseCase
  implements
    UseCase<
      SuggestionTaskItemUseCaseInput,
      Promise<SuggestionTaskItemUseCaseOutput>
    >
{
  // GeminiServiceのインスタンス
  private service: GeminiService
  // FirebaseUserRepositoryのインスタンス
  private userRepository: FirebaseUserRepository
  // プロンプト生成制限
  private MAX_PROMPT_LIMIT = 3

  // コンストラクタ
  constructor() {
    // 依存関係の注入
    this.service = new GeminiService()
    this.userRepository = new FirebaseUserRepository()
  }

  /**
   * タスク生成呼び出し処理
   * @param args lebel: string, supplement: string, libraries: string[], targets: string
   * @returns Promise<TaskItem[]>
   */
  async execute(
    input: SuggestionTaskItemUseCaseInput
  ): Promise<SuggestionTaskItemUseCaseOutput> {
    const { uid } = input
    // プロンプトの生成制限を超えていないか判定
    const limit = await this.userRepository.checkLimit({
      uid: uid,
    })

    if (limit >= this.MAX_PROMPT_LIMIT) {
      throw new GenerateLimitException()
    }
    // プロンプトの作成
    const prompt = createTaskSuggestPrompt(input)

    const result = await this.service.generateSuddgestTodos({ prompt })

    // プロンプトの生成回数をインクリメント
    await this.userRepository.incrementLimit({ uid: uid })

    const text = result.response.text()

    const json = JSON.parse(text)

    const response = json.taskItems.map((task: any, index: number) => {
      return new TaskItem({
        itemId: '',
        taskId: '',
        title: task.title,
        content: task.content,
        startDate: new Date(task.startDate),
        endDate: new Date(task.endDate),
        duration: task.duration,
        priority: index,
        reference: task.reference,
        isCompleted: false,
        completedAt: null,
        createdAt: new Date(),
        updatedAt: null,
      })
    })

    return { taskItems: response }
  }
}
