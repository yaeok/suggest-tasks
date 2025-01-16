import { FirebaseAuthRepository } from '@/infrastructure/repository/auth/impl/FirebaseAuthRepository'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface ResendEmailUseCaseInput extends UseCaseInput {}

interface ResendEmailUseCaseOutput extends UseCaseOutput {
  result: boolean
}

export class ResendEmailUseCase
  implements
    UseCase<ResendEmailUseCaseInput, Promise<ResendEmailUseCaseOutput>>
{
  private readonly authRepository: FirebaseAuthRepository

  constructor() {
    this.authRepository = new FirebaseAuthRepository()
  }

  async execute(): Promise<ResendEmailUseCaseOutput> {
    try {
      await this.authRepository.sendEmailVerification()
      return { result: true }
    } catch (error) {
      throw new Error('エラーが発生しました。開発者へ連絡してください。')
    }
  }
}
