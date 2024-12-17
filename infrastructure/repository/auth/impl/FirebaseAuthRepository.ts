import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'

import {
  FirebaseAuthException,
  isFirebaseError,
} from '@/infrastructure/exception/FirebaseAuthException'
import { UserNotFoundException } from '@/infrastructure/exception/UserNotFoundException'
import { auth } from '@/infrastructure/firebase/config'
import { AuthRepository } from '@/infrastructure/repository/auth/AuthRepository'

export class FirebaseAuthRepository implements AuthRepository {
  async signIn(email: string, password: string): Promise<void> {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user === null) {
        throw new UserNotFoundException()
      }
    } catch (error) {
      this.handleFirebaseAuthError(error)
    }
  }

  async signUp(
    email: string,
    password: string
  ): Promise<UserCredential | null> {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, email, password)

      if (!userCredential) {
        throw new UserNotFoundException()
      } else {
        // 確認メール送信処理
        await this.sendEmailVerification()
      }
      return userCredential
    } catch (error) {
      this.handleFirebaseAuthError(error)
    }
    return null
  }

  async logout(): Promise<void> {
    await auth.signOut()
  }

  /**
   * メールアドレスの確認メールを送信
   * @returns Promise<void> なし
   */
  async sendEmailVerification(): Promise<void> {
    const currentUser = auth.currentUser

    if (currentUser === null) {
      throw new UserNotFoundException()
    }

    await sendEmailVerification(currentUser)
  }

  /**
   * Firebaseのエラーハンドリングを行う
   * @param e エラーオブジェクト
   */
  private handleFirebaseAuthError(e: any): void {
    if (isFirebaseError(e)) {
      let message
      switch (e.code) {
        case 'auth/user-not-found':
          message = '認証情報が見つかりません'
          break
        case 'auth/wrong-password':
          message = 'パスワードが違います'
          break
        case 'auth/user-disabled':
          message = '無効なアカウントです'
          break
        case 'auth/too-many-requests':
          message = 'リクエストが多すぎます。後ほど再試行してください'
          break
        case 'auth/invalid-email':
          message = '無効なメールアドレスです'
          break
        case 'auth/email-already-in-use':
          message = '既に登録されたメールアドレスです'
          break
        default:
          message = 'ログインに失敗しました'
          break
      }
      throw new FirebaseAuthException(message, e.code)
    } else {
      throw new FirebaseAuthException(
        'ログインに失敗しました',
        'auth/unknown-error'
      )
    }
  }
}
