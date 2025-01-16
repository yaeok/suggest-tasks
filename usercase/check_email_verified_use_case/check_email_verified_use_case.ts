import { FirebaseAuthRepository } from '@/infrastructure/repository/auth/impl/FirebaseAuthRepository'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface CheckEmailVerifiedUseCaseInput extends UseCaseInput {}

interface CheckEmailVerifiedUseCaseOutput extends UseCaseOutput {
  result: boolean
}

export class CheckEmailVerifiedUseCase
  implements
    UseCase<
      CheckEmailVerifiedUseCaseInput,
      Promise<CheckEmailVerifiedUseCaseOutput>
    >
{
  private readonly authRepository: FirebaseAuthRepository

  constructor() {
    this.authRepository = new FirebaseAuthRepository()
  }

  async execute(): Promise<CheckEmailVerifiedUseCaseOutput> {
    try {
      const result = await this.authRepository.checkEmailVerified()

      return { result }
    } catch (error) {
      throw new Error('エラーが発生しました。開発者へ連絡してください。')
    }
  }
}
