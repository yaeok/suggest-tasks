import { FirebaseAuthException } from '@/infrastructure/exception/FirebaseAuthException'
import { FirebaseAuthRepository } from '@/infrastructure/repository/auth/impl/FirebaseAuthRepository'
import { FirebaseUserRepository } from '@/infrastructure/repository/users/impl/FirebaseUserRepository'
import { User } from '@/model/User'

export class SignUpUseCase {
  private authRepository: FirebaseAuthRepository
  private userRepository: FirebaseUserRepository

  constructor() {
    this.authRepository = new FirebaseAuthRepository()
    this.userRepository = new FirebaseUserRepository()
  }

  async signUp(
    email: string,
    password: string,
    username: string
  ): Promise<void> {
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
    } catch (error) {
      if (error instanceof FirebaseAuthException) {
        throw new FirebaseAuthException(error.message, error.code)
      }
    }
  }
}
