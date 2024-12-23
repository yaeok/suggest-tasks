import { FirebaseUserRepository } from '@/infrastructure/repository/users/impl/FirebaseUserRepository'

export class UpdateUsernameUseCase {
  private userRepository: FirebaseUserRepository

  constructor() {
    this.userRepository = new FirebaseUserRepository()
  }

  async updateUsername(args: {
    uid: string
    username: string
  }): Promise<boolean> {
    const { uid, username } = args

    const response = await this.userRepository.updateUsername({ uid, username })

    return response
  }
}
