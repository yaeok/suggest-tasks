import { FirebaseUserRepository } from '@/infrastructure/repository/users/impl/FirebaseUserRepository'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface UpdateUsernameUseCaseInput extends UseCaseInput {
  uid: string
  username: string
}

interface UpdateUsernameUseCaseOutput extends UseCaseOutput {
  result: boolean
}

export class UpdateUsernameUseCase
  implements
    UseCase<UpdateUsernameUseCaseInput, Promise<UpdateUsernameUseCaseOutput>>
{
  private userRepository: FirebaseUserRepository

  constructor() {
    this.userRepository = new FirebaseUserRepository()
  }

  async execute(
    input: UpdateUsernameUseCaseInput
  ): Promise<UpdateUsernameUseCaseOutput> {
    const { uid, username } = input

    const response = await this.userRepository.updateUsername({ uid, username })

    return { result: response }
  }
}
