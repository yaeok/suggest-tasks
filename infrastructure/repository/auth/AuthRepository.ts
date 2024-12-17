import { UserCredential } from 'firebase/auth'

export interface AuthRepository {
  signIn(email: string, password: string): Promise<void>
  signUp(email: string, password: string): Promise<UserCredential | null>
  sendEmailVerification(): Promise<void>
  checkEmailVerified(): Promise<boolean>
  logout(): Promise<void>
}
