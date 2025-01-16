import { FirebaseAuthException } from '@/infrastructure/exception/FirebaseAuthException'
import { FirebaseAuthRepository } from '@/infrastructure/repository/auth/impl/FirebaseAuthRepository'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface SignInUseCaseInput extends UseCaseInput {
  email: string
  password: string
}

interface SignInUseCaseOutput extends UseCaseOutput {
  result: boolean
}

export class SignInUseCase
  implements UseCase<SignInUseCaseInput, Promise<SignInUseCaseOutput>>
{
  private authRepository: FirebaseAuthRepository

  constructor() {
    this.authRepository = new FirebaseAuthRepository()
  }

  async execute(input: SignInUseCaseInput): Promise<SignInUseCaseOutput> {
    const { email, password } = input
    try {
      await this.authRepository.signIn(email, password)

      return { result: true }
    } catch (error) {
      if (error instanceof FirebaseAuthException) {
        console.log(error.message)
        throw new FirebaseAuthException(error.message, error.code)
      } else {
        throw new Error('エラーが発生しました。開発者へ連絡してください。')
      }
    }
  }
}
