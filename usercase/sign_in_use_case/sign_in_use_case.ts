import { FirebaseAuthException } from '@/infrastructure/exception/FirebaseAuthException'
import { FirebaseAuthRepository } from '@/infrastructure/repository/auth/impl/FirebaseAuthRepository'

export class SignInUseCase {
  private authRepository: FirebaseAuthRepository

  constructor() {
    this.authRepository = new FirebaseAuthRepository()
  }

  async signIn(email: string, password: string): Promise<void> {
    try {
      await this.authRepository.signIn(email, password)
    } catch (error) {
      if (error instanceof FirebaseAuthException) {
        console.log(error.message)
        throw new FirebaseAuthException(error.message, error.code)
      }
    }
  }
}
