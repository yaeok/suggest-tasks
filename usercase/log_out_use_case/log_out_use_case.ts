import { FirebaseAuthRepository } from '@/infrastructure/repository/auth/impl/FirebaseAuthRepository'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface LogOutUseCaseInput extends UseCaseInput {}

interface LogOutUseCaseOutput extends UseCaseOutput {
  result: boolean
}

export class LogOutUseCase
  implements UseCase<LogOutUseCaseInput, Promise<LogOutUseCaseOutput>>
{
  // FirebaseAuthRepositoryのインスタンス
  private authRepository: FirebaseAuthRepository

  // コンストラクタ
  constructor() {
    // 依存関係の注入
    this.authRepository = new FirebaseAuthRepository()
  }

  async execute(): Promise<LogOutUseCaseOutput> {
    try {
      await this.authRepository.logout()

      return { result: true }
    } catch (error) {
      throw new Error('エラーが発生しました。開発者へ連絡してください。')
    }
  }
}
