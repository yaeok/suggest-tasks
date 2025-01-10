import { FirebaseAuthException } from '@/infrastructure/exception/FirebaseAuthException'
import { FirebaseAuthRepository } from '@/infrastructure/repository/auth/impl/FirebaseAuthRepository'
import { FirebaseUserRepository } from '@/infrastructure/repository/users/impl/FirebaseUserRepository'
import { User } from '@/model/User'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface SignUpUseCaseInput extends UseCaseInput {
  email: string
  password: string
  username: string
}

interface SignUpUseCaseOutput extends UseCaseOutput {
  result: boolean
}

export class SignUpUseCase
  implements UseCase<SignUpUseCaseInput, Promise<SignUpUseCaseOutput>>
{
  private authRepository: FirebaseAuthRepository
  private userRepository: FirebaseUserRepository

  constructor() {
    this.authRepository = new FirebaseAuthRepository()
    this.userRepository = new FirebaseUserRepository()
  }

  async execute(input: SignUpUseCaseInput): Promise<SignUpUseCaseOutput> {
    const { email, password, username } = input
    try {
      const response = await this.authRepository.signUp(email, password)
      const user = new User({
        uid: response!.user.uid,
        username: username,
        email: response!.user.email!,
        limit: 0,
        createdAt: new Date(),
      })
      await this.userRepository.createUser({ user })

      return { result: true }
    } catch (error) {
      if (error instanceof FirebaseAuthException) {
        throw new FirebaseAuthException(error.message, error.code)
      } else {
        throw new Error('エラーが発生しました。開発者へ連絡してください。')
      }
    }
  }
}
