import {
  FirebaseAuthRepository
} from '@/infrastructure/repository/auth/impl/FirebaseAuthRepository';

export class CheckEmailVerifiedUseCase {
  private readonly authRepository: FirebaseAuthRepository

  constructor() {
    this.authRepository = new FirebaseAuthRepository()
  }

  async checkEmailVerified(): Promise<boolean> {
    return await this.authRepository.checkEmailVerified()
  }
}
