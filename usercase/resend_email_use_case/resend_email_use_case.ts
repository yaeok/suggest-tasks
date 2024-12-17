import { FirebaseAuthRepository } from '@/infrastructure/repository/auth/impl/FirebaseAuthRepository'

export class ResendEmailUseCase {
  private readonly authRepository: FirebaseAuthRepository

  constructor() {
    this.authRepository = new FirebaseAuthRepository()
  }

  async resendEmail(): Promise<void> {
    await this.authRepository.sendEmailVerification()
  }
}
