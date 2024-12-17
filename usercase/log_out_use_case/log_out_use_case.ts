import { FirebaseAuthRepository } from '@/infrastructure/repository/auth/impl/FirebaseAuthRepository'

export class LogOutUseCase {
  // FirebaseAuthRepositoryのインスタンス
  private authRepository: FirebaseAuthRepository

  // コンストラクタ
  constructor() {
    // 依存関係の注入
    this.authRepository = new FirebaseAuthRepository()
  }

  async logout(): Promise<void> {
    await this.authRepository.logout()
  }
}
